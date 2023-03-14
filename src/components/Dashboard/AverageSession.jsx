import React from 'react'
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
} from "recharts";
import '../../styles/dashboard/averagesession.scss';

export default function AverageSession( {userInfos} ) {

    function formatedData() {
        const dataToUse = userInfos.sessions.map((data) => {
            if (data.day === 1) {
                return {
                    day: "L",
                    sessionLength: data.sessionLength,
                };
            }
            else if (data.day === 2) {
                return {
                    day: "M",
                    sessionLength: data.sessionLength,
                };
            }
            else if (data.day === 3) {
                return {
                    day: "M",
                    sessionLength: data.sessionLength,
                };
            }
            else if (data.day === 4) {
                return {
                    day: "J",
                    sessionLength: data.sessionLength,
                };
            }
            else if (data.day === 5) {
                return {
                    day: "V",
                    sessionLength: data.sessionLength,
                };
            }
            else if (data.day === 6) {
                return {
                    day: "S",
                    sessionLength: data.sessionLength,
                };
            }
            else if (data.day === 7) {
                return {
                    day: "D",
                    sessionLength: data.sessionLength,
                };
            }
            else {
                return undefined;
            }
        });
        return dataToUse;
    }

    const CustomTooltip = ({ active, payload}) => {
        if (active && payload && payload.length) {
          return (
            <div className="custom-tooltip-duration">
              <p className="duration-label">{`${payload[0].value} min`}</p>
            </div>
          );
        }
      
        return null;
      };

    return (
        <section id="average-session">
            <h2 className="duration_title">Durée moyenne des<br/> sessions</h2>
            <LineChart
                width={190}
                height={195}
                data={userInfos.sessions && formatedData()}
                >
                <CartesianGrid
                    strokeDasharray="4 4"
                    horizontal={false}
                    vertical={false}
                    fill = "#E60000"
                />
                <XAxis
                    dataKey="day"
                    interval="preserveStartEnd"
                    mirror={true}
                    tick={{
                        stroke: '#FFFFFF',
                        fontSize : "12px"
                    }}
                    tickLine={false}
                    axisLine={false}
                />
                <YAxis
                    dataKey="sessionLength"
                    hide={true}
                    padding={{
                        top : 80,
                        bottom : 50
                    }}
                />
                <Tooltip
                    content={<CustomTooltip />}
                    cursor={{
                        stroke : "rgba(0, 0, 0, 0.1)",
                        strokeWidth : 79
                    }}
                />
                <Line
                    type="natural"
                    dataKey="sessionLength"
                    stroke="white"
                    strokeWidth={2}
                    dot={false}
                    activeDot = {{
                        stroke : "rgba(255, 255, 255, 0.198345)",
                        strokeWidth : "10px",
                        r: 5
                    }}
                />
            </LineChart>
        </section>
    )
}