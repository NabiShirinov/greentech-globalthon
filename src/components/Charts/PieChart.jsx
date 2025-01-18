import { View, Text } from 'react-native'
import React from 'react'
import { ProgressChart } from 'react-native-chart-kit'

const PieChart = (props) => {
  return (
    <ProgressChart
  data={props.data.data}
  width={props.data.screenWidth}
  height={220}
  strokeWidth={16}
  radius={32}
  chartConfig={chartConfig}
  hideLegend={false}
/>
  )
}

export default PieChart