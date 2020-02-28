import React, { Component } from 'react';
import PropTypes from 'prop-types';
import shortid from 'shortid';

class Printer extends Component {
  state = {};

  static propTypes = {
    printer: PropTypes.arrayOf(Object).isRequired,
  };

  render() {
    const { printer } = this.props;
    return (
      <>
        {printer.map(elem => (
          <tr key={shortid.generate()}>
            <th>Printer</th>
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
            <td contentEditable="true">{elem.papperState}</td>
          </tr>
        ))}
      </>
    );
  }
}

export default Printer;
