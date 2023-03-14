import React from 'react'
import Icon from '../Icon'
import '../../styles/dashboard/card.scss';

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
