/**
 * @author vishwadeep
 */
import React from 'react';
import Row from './Row.jsx';

class Containor extends React.Component {

    /**
     * @func renderRows()
     * @returns {array} of Rows
     * @see Row
     */
    renderRows() {
        const { width, height } = this.props;
        const rows = [];
        for (let i = 0; i < height; i++) {
            rows.push(<Row {...this.props} key={i} curColoum={i}/>);
        }
        return rows;
    }

    /**
     * @return UI
     */
    render() {
        return (
            <div>{this.renderRows()}</div>
        )
    }
}

export default Containor;