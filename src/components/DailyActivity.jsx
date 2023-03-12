import React from 'react'
import { useParams } from "react-router-dom";
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer
} from "recharts";
import { getActivity } from '../services/calls'

export default function DailyActivity() {

  const {id} = useParams()
  const userActivity = getActivity(id);

  return (
    <>
      <div className="bar-chart_container">
        <h2 className="title_barchart">Activité quotidienne</h2>
        <ResponsiveContainer width="70%" height="100%">
          <BarChart
            width={500}
            height={300}
            data={userActivity.sessions}
            barGap={8}
            maxBarSize={7}
            barCategoryGap = "35%"
          >
            <CartesianGrid strokeDasharray="3 3" vertical={false}/>
            <XAxis dataKey="day" />
            <YAxis
              yAxisId="kg"
              dataKey="kilogram"
              domain={["dataMin - 5", "dataMax + 5"]}
              orientation="right"
              tickCount="3" 
              axisLine={false} 
              tickLine={false} 
              tick={{ fontSize: 14, fontWeight: 500}}
              interval={0}
            />
            <YAxis 
              yAxisId="cal"
              dataKey="calories" 
              domain={[0, "dataMax"]}
              hide={true}
            />
            <Tooltip />
            <Bar
              yAxisId="kg"
              dataKey="kilogram"
              fill="#FF0000"
              maxBarSize={8}
              radius={[50, 50, 0, 0]}
            />
            <Bar
              yAxisId="cal"
              dataKey="calories"
              fill="#282D30"
              maxBarSize={8}
              radius={[50, 50, 0, 0]}
            />
            <Legend />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </>
  );
}
