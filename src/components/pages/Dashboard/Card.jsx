import React from 'react'
import Icon from '../../Icon'
import PropTypes from 'prop-types';
import '../../../styles/dashboard/card.scss';

/**
 * Display a card with and icon, background color for this icon, and text
 * @param {number} quantity 
 * @param {string} unit 
 * @param {string} text 
 * @param {string} iconName 
 * @param {string} iconColor 
 * @returns {JSX}
 */
export default function Card( {quantity, unit, text, iconName, iconColor} ) {
    return (
        <article className='card'>
            <Icon name={iconName} bgcolor={iconColor}/>
            <div>
                <p className='quantity'>{quantity}{unit}</p>
                <p>{text}</p>
            </div>
        </article>
    )
}

Card.propTypes = {
    quantity: PropTypes.number,
    unit: PropTypes.string,
    text: PropTypes.string,
    iconName: PropTypes.string,
    iconColor: PropTypes.string,
}
