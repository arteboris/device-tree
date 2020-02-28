import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CardReader from './Values/CardReader';
import CashAcceptor from './Values/CashAcceptor';
import CashDispenser from './Values/CashDispenser';
import Pos from './Values/Pos';
import Printer from './Values/Printer';
import ProductDispenser from './Values/ProductDispenser';
import css from './DeviceTree.module.css';

class DeviceTree extends Component {
  state = {};

  static propTypes = {
    deviceTree: PropTypes.objectOf(Object).isRequired,
  };

  render() {
    const { deviceTree } = this.props;
    return (
      <>
        <table
          className={css.demo_table}
          border="1"
          align="center"
          cellPadding="4"
          cellSpacing="0"
        >
          <caption>Device Tree</caption>
          <thead>
            <tr>
              <th />
              <th width="6%">driver</th>
              <th>modName</th>
              <th>mod Version</th>
              <th width="20%">port</th>
              <th>status</th>
              <th>type</th>
              <th width="10%">version</th>
              <th>status Descr</th>
              <th width="14%">products</th>
              <th width="8%">options</th>
              <th>papper State</th>
            </tr>
          </thead>
          <tbody align="center">
            <CardReader cardReader={deviceTree.CardReader} />
            <CashAcceptor cashAcceptor={deviceTree.CashAcceptor} />
            <CashDispenser cashDispenser={deviceTree.CashDispenser} />
            <Pos pos={deviceTree.POS} />
            <Printer printer={deviceTree.Printer} />
            <ProductDispenser productDispenser={deviceTree.ProductDispenser} />
          </tbody>
        </table>
      </>
    );
  }
}

export default DeviceTree;
