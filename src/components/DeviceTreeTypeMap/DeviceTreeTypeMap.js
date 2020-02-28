import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CashDispenser from './Values/CashDispenser';
import Pos from './Values/Pos';
import ProductDispenser from './Values/ProductDispenser';
import css from './DeviceTreeTypeMap.module.css';

class DeviceTreeTypeMap extends Component {
  state = {};

  static propTypes = {
    deviceTreeTypeMap: PropTypes.objectOf(Object).isRequired,
  };

  render() {
    const { deviceTreeTypeMap } = this.props;
    console.log(deviceTreeTypeMap);
    return (
      <>
        <table
          className={css.demo_table}
          border="1"
          align="left"
          cellPadding="4"
          cellSpacing="0"
        >
          <caption>Device Tree Type Map</caption>
          <thead>
            <tr>
              <th width="20%" />
              <th width="30%">products</th>
              <th width="30%">options</th>
            </tr>
          </thead>
          <tbody align="center">
            <CashDispenser cashDispenser={deviceTreeTypeMap.CashDispenser} />
            <Pos pos={deviceTreeTypeMap.POS} />
            <ProductDispenser
              productDispenser={deviceTreeTypeMap.ProductDispenser}
            />
          </tbody>
        </table>
      </>
    );
  }
}

export default DeviceTreeTypeMap;
