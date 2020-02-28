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
            <td>{elem.driver}</td>
            <td>{elem.modName}</td>
            <td contentEditable="true">{elem.modVersion}</td>
            <td>{elem.port}</td>
            <td contentEditable="true">{elem.status}</td>
            <td>{elem.type}</td>
            <td>{elem.version}</td>
            <td>{elem.statusDescr}</td>
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
            <td>{elem.papperState}</td>
          </tr>
        ))}
      </>
    );
  }
}

export default Pos;
