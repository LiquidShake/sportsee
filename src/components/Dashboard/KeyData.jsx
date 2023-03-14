import React from 'react'
import Card from './Card'

/**
 * Display the cards from key data
 * @param {Object} keyData 
 * @returns {JSX}
 */
export default function KeyData( {keyData} ) {
    return (
        <section id="keydata">
            <Card
                quantity={keyData.calorieCount}
                unit="kCal"
                text="Calories"
                iconName="fire"
                iconColor="red-light"
            />
            <Card
                quantity={keyData.proteinCount}
                unit="g"
                text="Proteines"
                iconName="chicken"
                iconColor="blue-light"
            />
            <Card
                quantity={keyData.carbohydrateCount}
                unit="g"
                text="Glucides"
                iconName="apple"
                iconColor="yellow-light"
            />
            <Card
                quantity={keyData.lipidCount}
                unit="g"
                text="Lipides"
                iconName="burger"
                iconColor="pink-light"
            />
        </section>
    )
}
