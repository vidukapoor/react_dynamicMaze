/**
 * @author vishwadeep
 */
import React from 'react';

/**
 * 
 * @param {object} props 
 * @returns the box with [50*50]
 * @see Toy
 */
export const Tile = ({ tileNumber }) => {
    return (
        <div style={{ 'width': '50px', 'height': '50px', 'border': '1px solid #ddd', 'marginRight': '1px', 'marginBottom': '1px', 'float': 'left' }} id={tileNumber}>
        </div>)
}

export default Tile;
