import React from 'react'
import Card from './Card'

export default function KeyData( {userInfos} ) {
    return (
        <section id="keydata">
            <Card
                quantity={userInfos.calorieCount}
                unit="kCal"
                text="Calories"
                iconName="fire"
                iconColor="red-light"
            />
            <Card
                quantity={userInfos.proteinCount}
                unit="g"
                text="Proteines"
                iconName="chicken"
                iconColor="blue-light"
            />
            <Card
                quantity={userInfos.carbohydrateCount}
                unit="g"
                text="Glucides"
                iconName="apple"
                iconColor="yellow-light"
            />
            <Card
                quantity={userInfos.lipidCount}
                unit="g"
                text="Lipides"
                iconName="burger"
                iconColor="pink-light"
            />
        </section>
    )
}
