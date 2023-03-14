import React from 'react'
import {
    RadialBarChart,
    RadialBar
} from 'recharts'
import '../../styles/dashboard/score.scss';

export default function Score( {userInfos} ) {

    const formatedData = () =>{
        return [
            {
                name : "score",
                value : userInfos.todayScore * 100,
                fill : "#FF0000"
            },
            {
                name : "score 2",
                value : 100,
                fill : "#FBFBFB"
            }
        ]
    }

    return (
        <section id="score">
            <h2>Score</h2>
            <p className="score-sentence">
                <span className="percentage">{userInfos.todayScore*100 + "%"}</span>
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
                    background={{fill : "#FBFBFB"}}
                    dataKey="value"
                    cornerRadius={50}
                />
			</RadialBarChart>
        </section>
    )
}
