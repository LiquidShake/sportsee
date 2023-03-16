import React from 'react'
import {
    RadialBarChart,
    RadialBar
} from 'recharts'
import '../../styles/dashboard/score.scss';

/**
 * A radial line chart that display the score of the user for the day
 * @param {Number} score - percentage
 * @param {String} color - HEX color
 * @returns {JSX}
 */
export default function Score( {score, color} ) {

    /**
     * format the data for chart uses, the second object is the total score to scale the chart
     * @returns {Object} dataToUse
     */
    const formatedData = () =>{
        return [
            {
                value : score,
                fill : color
            },
            {
                value : 100,
            }
        ]
    }

    return (
        <section id="score">
            <h2>Score</h2>
            <p className="score-sentence">
                <span className="percentage">{score + "%"}</span>
                de votre objectif
            </p>

            <RadialBarChart
                width={190}
                height={195}
                innerRadius={100}
                outerRadius={0}
                barSize={10}
                data={formatedData()}
            >
				<RadialBar
                    minAngle={1}
                    dataKey="value"
                    cornerRadius={50}
                />
			</RadialBarChart>
        </section>
    )
}
