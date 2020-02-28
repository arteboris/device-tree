import React, { Component } from 'react';
import PropTypes from 'prop-types';
import shortid from 'shortid';
import './Values.module.css';

class CardReader extends Component {
  state = {};

  static propTypes = {
    cardReader: PropTypes.arrayOf(Object).isRequired,
  };

  render() {
    const { cardReader } = this.props;
    return (
      <>
        {cardReader.map(elem => (
          <tr key={shortid.generate()}>
            <th>CardReader</th>
            <td>{elem.driver}</td>
            <td>{elem.modName}</td>
            <td contentEditable="true">{elem.modVersion}</td>
            <td>{elem.port}</td>
            <td contentEditable="true">{elem.status}</td>
            <td>{elem.type}</td>
            <td>{elem.version}</td>
            <td>{elem.statusDescr}</td>
            <td>{elem.products}</td>
            <td>{elem.options}</td>
            <td>{elem.papperState}</td>
          </tr>
        ))}
      </>
    );
  }
}

export default CardReader;
