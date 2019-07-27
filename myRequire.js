const path = require('path');
const fs = require('fs');
const vm = require('vm');

function Module(id) {
  this.id = id;
  this.exports = {};

}
const wrapper = [
  '(function (exports, module, require, __dirname, __filename){',
  '})'
]
Module._extensions = {};
Module._extensions['.js'] = function (module) {
  const script = fs.readFileSync(module.id, 'utf8');
  const funcStr = wrapper[0] + script + wrapper[1];
  const fn = vm.runInThisContext(funcStr);
  fn.call(module.exports, module.exports, module, myRequire);

}
Module.prototype.load = function () {
  const ext = path.extname(this.id);
  Module._extensions[ext](this);

}

function myRequire(filePath) {
  const absPath = path.resolve(__dirname, filePath);
  const module = new Module(absPath);
  module.load();
  return module.exports;
}

module.exports = myRequire;