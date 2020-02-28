import React, { Component } from 'react';
import PropTypes from 'prop-types';
import shortid from 'shortid';

class CashDispenser extends Component {
  state = {};

  static propTypes = {
    cashDispenser: PropTypes.arrayOf(Object).isRequired,
  };

  render() {
    const { cashDispenser } = this.props;
    return (
      <>
        {cashDispenser.map(elem => (
          <tr key={shortid.generate()}>
            <th>CashDispenser</th>
            <td>{elem.products}</td>
            <td>{elem.options}</td>
          </tr>
        ))}
      </>
    );
  }
}

export default CashDispenser;
