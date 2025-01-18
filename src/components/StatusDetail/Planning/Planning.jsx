import {View, Text, Dimensions, ScrollView} from 'react-native';
import React from 'react';
import {LineChart, StackedBarChart} from 'react-native-chart-kit';
import {styles} from './style';
import SVG_CALENDAR from "../../../assets/images/trial/calendar"
import { Colors } from '../../../assets/default_styles';
const Planning = ({data}) => {
  const DATA = data;
  const {width} = Dimensions.get('window');
  const data_lineChart1 = {
    labels: [
      "4 May",
      "5 May",
      "6 May",
      "7 May",
      "8 May",
    ],
    datasets: [
      {
        data: [
          DATA.detail_datas.history[0].n,
          DATA.detail_datas.history[1].n,
          DATA.detail_datas.history[2].n,
          DATA.detail_datas.history[3].n,
          DATA.detail_datas.history[4].n,
          DATA.detail_datas.history[2].n,
        ],
      },
    ],
  };
  const data_lineChart2 = {
    labels: [
      DATA.detail_datas.history[0].name,
      DATA.detail_datas.history[1].name,
      DATA.detail_datas.history[2].name,
      DATA.detail_datas.history[3].name,
      DATA.detail_datas.history[4].name,
    ],
    datasets: [
      {
        data: [
          DATA.detail_datas.history[0].p,
          DATA.detail_datas.history[1].p,
          DATA.detail_datas.history[2].p,
          DATA.detail_datas.history[3].p,
          DATA.detail_datas.history[4].p,
          DATA.detail_datas.history[2].p,
        ],
      },
    ],
  };
  const data_lineChart3 = {
    labels: [
      "2020",
      "2021",
      "2022",
      "2023",
      "2024",
    ],
    datasets: [
      {
        data: [
          DATA.detail_datas.history[0].k,
          DATA.detail_datas.history[1].k,
          DATA.detail_datas.history[2].k,
          DATA.detail_datas.history[3].k,
          DATA.detail_datas.history[4].k,
          DATA.detail_datas.history[2].k,
        ],
      },
    ],
  };
  const chartConfig = {
    backgroundGradientFrom: '#0486b7',
    backgroundGradientFromOpacity: 0,
    backgroundGradientTo: '#0486b7',
    backgroundGradientToOpacity: 0,
    color: (opacity = 1) => `rgba(4,150,199, ${opacity})`,
    strokeWidth: 0,
    barPercentage: 0.5,
    useShadowColorFromDataset: false,
  };
  return (
    // <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
      <SVG_CALENDAR width={width*0.9}/>
      <Text style={[styles.text,{color:"#0486b7"}]}>Daily</Text>
      <LineChart
        style={styles.chart}
        data={data_lineChart1}
        width={width * 0.9}
        height={256}
        verticalLabelRotation={30}
        chartConfig={chartConfig}
        bezier
      />
      <Text style={[styles.text,{color:"#0486b7"}]}>Monthly</Text>
      <LineChart
        style={styles.chart}
        data={data_lineChart2}
        width={width * 0.9}
        height={256}
        verticalLabelRotation={30}
        chartConfig={chartConfig}
        bezier
      />
      <Text style={[styles.text,{color:"#0486b7"}]}>Yearly</Text>
      <LineChart
        style={styles.chart}
        data={data_lineChart3}
        width={width * 0.9}
        height={256}
        verticalLabelRotation={30}
        chartConfig={chartConfig}
        bezier
      />
    </View>
    // </ScrollView>
  );
};

export default Planning;
