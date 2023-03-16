import React from 'react'
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import '../../styles/dashboard/dailyactivity.scss';

/**
 * A bar chart that display a bar for weight and a bar for burned calories for every day
 * @param {Array} userActivity - Array of objects representing the weight and calories burned each day
 * @returns {JSX} React Functionnal Component
 */
export default function DailyActivity( {userActivity} ) {

  /**
   * create a custom tooltip with custom content for the chart
   * @param {boolean} active - if the tootltip is active or not 
   * @param {Array} payload - The source data of the content to be displayed in the tooltip
   * @returns {HTML} the tooltip
   */
  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <div className="custom-tooltip">
          <p className="kilos">{`${payload[0].value}kg`}</p>
          <p className="calorie-number">{`${payload[1].value}Kcal`}</p>
        </div>
      );
    }
  
    return null;
  };

  /**
   * display custom legend for the chart
   * @returns {HTML} the legend
   */
  const renderLegend = () =>{
    return (
      <ul className="barchart_legend">
          <li className="weight"><span className='dot dot_weight'></span><span className="span_weight">Poids (kg)</span></li>
          <li className="calories"><span className='dot dot_calories'></span><span className="span_calories">Calories brûlées (kCal)</span></li>
      </ul>
    )
  }

  return (
    <section id="daily-activity">
      <h2>Activité quotidienne</h2>

      {userActivity && (

        <BarChart
          width={610}
          height={250}
          data={userActivity}
          barGap={8}
          maxBarSize={7}
          barCategoryGap = "35%"
        >
          <CartesianGrid strokeDasharray="3 3" vertical={false}/>
          <XAxis
            dataKey="day"
            tickLine={false}
          />
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
          <Tooltip
            itemStyle={{
              backgroundColor : "#E60000",
              color : "white"
            }}
            contentStyle={{
              backgroundColor : "#E60000"
            }}
            content={<CustomTooltip active />}
            allowEscapeViewBox = {{
              x : true,
              y :true
            }}
            cursor={{
              fill:"rgba(196, 196, 196, 0.5)"
            }}
          />
          <Bar
            yAxisId="kg"
            dataKey="kilogram"
            fill="#282D30"
            maxBarSize={8}
            radius={[50, 50, 0, 0]}
          />
          <Bar
            yAxisId="cal"
            dataKey="calories"
            fill="#FF0000"
            maxBarSize={8}
            radius={[50, 50, 0, 0]}
          />
          <Legend
            verticalAlign="top"
            align="right"
            iconType="circle"
            iconSize={8}
            content={renderLegend}/>
        </BarChart>
      )}
      
    </section>
  );
}
