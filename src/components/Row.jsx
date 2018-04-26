import React from 'react';
import Tile from './Tile.jsx';

class Row extends React.Component {
    renderTile() {
        const { width } = this.props;
        const tiles = [];
        for (let i = 0; i < width; i++) {
            tiles.push(<Tile key={i} id={i} />);
        }
        return tiles;
    }
    render() {
        return (
            <div>
                <div>{this.renderTile()}</div>
                <br style={{ 'clear': 'both' }} />
            </div>
        )
    }
}
export default Row;
// className="maze-row"