import React from 'react'
import {
    RadarChart,
    PolarGrid,
    PolarAngleAxis,
    Radar,
} from "recharts"
import '../../styles/dashboard/performances.scss';

/**
 * A radar chart that display the performances of the user
 * @param {Object} userPerformance 
 * @returns {JSX}
 */
export default function Performance( {userPerformance} ) {

    return (
        <section id="performances">
            <RadarChart
                width={190}
                height={195}
                outerRadius={75}
                data={userPerformance}
            >
                <PolarGrid radialLines = {false} />
                <PolarAngleAxis
                    dataKey="kind" 
                    axisLine = {false}
                    tickLine = {false}
                    dy={4}
                    tick = {{fontSize: 12, fontWeight: 500}}
                />
                <Radar
                    dataKey="value"
                    fill="#FF0101"
                    fillOpacity={0.6}
                    domain={[0, 'dataMax']}
                    stroke = "transparent"
                />
            </RadarChart>
        </section>
    )
}
