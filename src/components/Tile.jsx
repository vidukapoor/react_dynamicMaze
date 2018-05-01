/**
 * @author vishwadeep
 */
import React from 'react';
import Toy from './Toy.jsx';

/**
 * 
 * @param {object} props 
 * @returns the box with [50*50]
 * @see Toy
 */
export const Tile = (props) => {
    return (
    <div style={{ 'width': '50px', 'height': '50px', 'border': '1px solid #ddd', 'marginRight': '1px', 'marginBottom': '1px', 'float': 'left' }}>
        <Toy {...props}/>
    </div>)
}

export default Tile;
