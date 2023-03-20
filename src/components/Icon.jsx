import React from 'react'
import cycle from '../img/cycle.svg'
import dumbbells from '../img/dumbbells.svg'
import swim from '../img/swim.svg'
import zen from '../img/zen.svg'
import fire from '../img/fire.svg'
import chicken from '../img/chicken.svg'
import apple from '../img/apple.svg'
import burger from '../img/burger.svg'
import PropTypes from 'prop-types';
import '../styles/icon.scss';

/**
 * 
 * @param {string} name - the name of the icon 
 * @param {string} bgcolor - the background color of the icon
 * @returns {HTMLElement}
 */
export default function Icon({name, bgcolor}) {
    /* List of allowed backgrounds */
    const bgs = [
        'white',
        'red-light',
        'blue-light',
        'yellow-light',
        'pink-light'
    ];

    /* List of allowed images */
    const images = {
        'cycle': cycle,
        'dumbbells': dumbbells,
        'swim': swim,
        'zen': zen,
        'fire': fire,
        'chicken': chicken,
        'apple': apple,
        'burger': burger
    };
    
    /* Default background is white */
    if(!bgcolor || !bgs.includes(bgcolor)){
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

Icon.propTypes = {
    name: PropTypes.string,
    bgcolor: PropTypes.string
}