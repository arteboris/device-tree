import React, { Component } from 'react';
import PropTypes from 'prop-types';
import shortid from 'shortid';
import css from './Values.module.css';

class Pos extends Component {
  state = {};

  static propTypes = {
    pos: PropTypes.arrayOf(Object).isRequired,
  };

  render() {
    const { pos } = this.props;
    return (
      <>
        {pos.map(elem => (
          <tr key={shortid.generate()}>
            <th>POS</th>
            <td>{elem.products}</td>
            <td>
              {elem.options.map(
                el =>
                  el.merchantIdx && (
                    <table className={css.options} key={shortid.generate()}>
                      <tbody align="center">
                        <tr>
                          <td className={css.optionsName}>merchantIdx</td>
                        </tr>
                        <tr>
                          <td>{el.merchantIdx}</td>
                        </tr>
                      </tbody>
                    </table>
                  ),
              )}
            </td>
          </tr>
        ))}
      </>
    );
  }
}

export default Pos;
