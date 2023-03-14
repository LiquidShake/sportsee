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

    /**
     * format the data for chart uses
     * @returns {Object} dataToUse
     */
    function formatedData() {
        const dataToUSe = userPerformance.data.reverse().map((object) => {
            if (object.kind === 1) {
                return {
                    kind: 'Cardio',
                    value: object.value,
                };
            }
            else if (object.kind === 2) {
                return {
                    kind: 'Energy',
                    value: object.value,
                };
            }
            else if (object.kind === 3) {
                return {
                    kind: 'Endurance',
                    value: object.value,
                };
            }
            else if (object.kind === 4) {
                return {
                    kind: 'Force',
                    value: object.value,
                };
            }
            else if (object.kind === 5) {
                return {
                    kind: 'Vitesse',
                    value: object.value,
                };
            }
            else if (object.kind === 6) {
                return {
                    kind: 'Intensité',
                    value: object.value,
                };
            }
            else {
                return false;
            }
        });
        return dataToUSe;
      }
    

    return (
        <section id="performances">
            <RadarChart
                width={190}
                height={195}
                outerRadius={75}
                data={userPerformance.data && formatedData()}
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
