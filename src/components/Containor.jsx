import React from 'react';
import Row from './Row.jsx';

class Containor extends React.Component {
    renderRows() {
        const { width, height } = this.props;
        const rows = [];
        for (let i = 0; i < height; i++) {
            rows.push(<Row width={width} key={i}/>);
        }
        return rows;
    }
    render() {
        console.log('maze', this.props);
        return (
            <div>{this.renderRows()}</div>
        )
    }
}

export default Containor;
// className="maze"