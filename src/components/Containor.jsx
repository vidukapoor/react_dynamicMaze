/**
 * @author vishwadeep
 */
import React from 'react';
import Tile from './Tile.jsx';

class Containor extends React.Component {
    /**
     * @func renderRows()
     * @returns {array} of Rows
     * @see Row
     */
    renderRows() {
        const { mazeArray } = this.props;
        const rows = [];
        for (let i = 0; i < mazeArray.length; i++) {
            rows.push(<Tile {...this.props} key={i} tileNumber={i} />);
        }
        return rows;
    }

    /**
     * @return UI
     */
    render() {
        return (
            <div>{this.renderRows()}</div>
        );
    }
}

export default Containor;
