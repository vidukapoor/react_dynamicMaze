/**
 * @author vishwadeep
 */
import React from 'react';

/**
 * 
 * @param {*curColoum} param0 
 * @param {*curRow} param0 
 * @return TOY svg
 * rendering UI at condition 0,0 only
 * @todo curColoum && curRow need to be dynamic to show hide from each box
 */
const Toy = ({ curColoum, curRow }) => {
    return (!curColoum && !curRow && <img className="logo" src='../../public/assests/toyRobot.svg' />)
}
export default Toy;