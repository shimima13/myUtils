import React, { Component } from 'react';
import '../styles/style.scss';
// import store from './utils/store'
import PotentialError from './comps/PotentialError'
class App extends Component {
  componentDidMount() {
    const _this = this;
    // this.unsbscribe = store.subscribe(() => {
    //   _this.forceUpdate()
    // })
  }
  componentWillUnmount() {
    // this.unsbscribe()
  }
  render() {
    return (
      <PotentialError>
        <div className="app">
          <h2>史米马！</h2>
        </div>
      </PotentialError>
    );
  }

}

export default App;


