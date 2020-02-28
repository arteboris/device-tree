import React, { Component } from 'react';
import DeviceTree from './DeviceTree/DeviceTree';
import DeviceTreeTypeMap from './DeviceTreeTypeMap/DeviceTreeTypeMap';
import api from '../server/api.json';

class App extends Component {
  state = {};

  render() {
    const { deviceTree, deviceTreeTypeMap } = api;
    return (
      <>
        <p>Hello,</p>
        <DeviceTree deviceTree={deviceTree} />
        <DeviceTreeTypeMap deviceTreeTypeMap={deviceTreeTypeMap} />
      </>
    );
  }
}

export default App;
