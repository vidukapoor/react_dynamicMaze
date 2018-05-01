/**
 * @author vishwadeep
 */
import React from 'react';
import Tile from './Tile.jsx';

class Row extends React.Component {

    /**
     * @func renderTile
     * @returns {array} of Tile
     * @see Tile
     */
    renderTile() {
        const { width } = this.props;
        const tiles = [];
        for (let i = 0; i < width; i++) {
            tiles.push(<Tile key={i} {...this.props} curRow={i} />);
        }
        return tiles;
    }

    /**
     * @returns the UI
     */
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
