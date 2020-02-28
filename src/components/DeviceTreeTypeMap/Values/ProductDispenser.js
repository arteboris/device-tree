import React, { Component } from 'react';
import PropTypes from 'prop-types';
import shortid from 'shortid';
import css from './Values.module.css';

class ProductDispenser extends Component {
  state = {};

  static propTypes = {
    productDispenser: PropTypes.arrayOf(Object).isRequired,
  };

  render() {
    const { productDispenser } = this.props;
    return (
      <>
        {productDispenser.map(elem => (
          <tr key={shortid.generate()}>
            <th>ProductDispenser</th>
            <td>
              {elem.products.map(el => (
                <table
                  key={shortid.generate()}
                  width="100%"
                  className={css.products_table}
                >
                  <tbody align="center">
                    <tr className={css.productsTr}>
                      <td className={css.firstTdProducts}>count</td>
                      <td>{el.count}</td>
                    </tr>
                  </tbody>
                </table>
              ))}
            </td>
            <td>{elem.options}</td>
          </tr>
        ))}
      </>
    );
  }
}

export default ProductDispenser;
