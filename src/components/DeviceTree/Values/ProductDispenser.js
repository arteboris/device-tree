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
            <td>{elem.driver}</td>
            <td>{elem.modName}</td>
            <td contentEditable="true">{elem.modVersion}</td>
            <td>{elem.port}</td>
            <td contentEditable="true">{elem.status}</td>
            <td>{elem.type}</td>
            <td>{elem.version}</td>
            <td>{elem.statusDescr}</td>
            <td>
              {elem.products.map(el => (
                <table
                  key={shortid.generate()}
                  width="100%"
                  className={css.products_table}
                >
                  <tbody align="center">
                    <tr>
                      <td width="30%" className={css.firstTdProducts}>
                        class
                      </td>
                      <td>{el.class}</td>
                    </tr>
                    <tr className={css.productsTr}>
                      <td className={css.firstTdProducts}>count</td>
                      <td contentEditable="true">{el.count}</td>
                    </tr>
                    <tr className={css.productsTr}>
                      <td className={css.firstTdProducts}>name</td>
                      <td>{el.name}</td>
                    </tr>
                  </tbody>
                </table>
              ))}
            </td>
            <td>{elem.options}</td>
            <td>{elem.papperState}</td>
          </tr>
        ))}
      </>
    );
  }
}

export default ProductDispenser;
