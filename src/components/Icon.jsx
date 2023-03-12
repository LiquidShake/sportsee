import React from 'react'
import cycle from '../img/cycle.svg'
import dumbbells from '../img/dumbbells.svg'
import swim from '../img/swim.svg'
import zen from '../img/zen.svg'

/**
 * 
 * @param {name} string 
 * @param {bgcolor} string 
 * @returns {HTMLElement}
 */
export default function Icon({name, bgcolor}) {
    const bgs = ['white', 'red-light', 'blue-light', 'yellow-light', 'pink-light'];
    const images = {'cycle': cycle, 'dumbbells': dumbbells, 'swim': swim, 'zen': zen};
    
    if(!bgcolor || !bgs.contains(bgcolor)){
        bgcolor = 'white';
    }
    const classes = `icon bg-${bgcolor}`;

    let image = images[name];

    return (
        <span className={classes}>
            <img src={image} alt="icone" />
        </span>
    )
}
