import {View, Text, Dimensions, ScrollView} from 'react-native';
import React from 'react';
import {LineChart, StackedBarChart} from 'react-native-chart-kit';
import {styles} from './style';
import { Colors } from '../../../assets/default_styles';
import { useThemeContext } from '../../../contexts/ThemeContext';
import { DATA_fields } from '../../../../api/fields';
import General from './General/General';

const Soil = ({data}) => {
  const DATA = data;
  const ALLDATA = DATA_fields
  const {width,height} = Dimensions.get('window');
  const {theme} = useThemeContext()
  const data_stackedBarChart = {
    labels: [
      DATA.detail_datas.history[0].name,
      DATA.detail_datas.history[1].name,
      DATA.detail_datas.history[2].name,
      DATA.detail_datas.history[3].name,
      DATA.detail_datas.history[4].name,
    ],
    legend: [
      DATA.detail_datas.labels[0],
      DATA.detail_datas.labels[1],
      DATA.detail_datas.labels[2],
    ],
    data: [
      [
        DATA.detail_datas.history[0].n,
        DATA.detail_datas.history[0].p,
        DATA.detail_datas.history[0].k,
      ],
      [
        DATA.detail_datas.history[1].n,
        DATA.detail_datas.history[1].p,
        DATA.detail_datas.history[1].k,
      ],
      [
        DATA.detail_datas.history[2].n,
        DATA.detail_datas.history[2].p,
        DATA.detail_datas.history[2].k,
      ],
      [
        DATA.detail_datas.history[3].n,
        DATA.detail_datas.history[3].p,
        DATA.detail_datas.history[3].k,
      ],
      [
        DATA.detail_datas.history[4].n,
        DATA.detail_datas.history[4].p,
        DATA.detail_datas.history[4].k,
      ],
    ],
    barColors: [
      DATA.detail_datas.color[0],
      DATA.detail_datas.color[1],
      DATA.detail_datas.color[2],
    ],
  };
  const data_lineChart1 = {
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
      DATA.detail_datas.history[0].name,
      DATA.detail_datas.history[1].name,
      DATA.detail_datas.history[2].name,
      DATA.detail_datas.history[3].name,
      DATA.detail_datas.history[4].name,
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
    backgroundGradientFrom: '#ffffff',
    backgroundGradientFromOpacity: 0.1,
    backgroundGradientTo: '#ffffff',
    backgroundGradientToOpacity: 0.3,
    color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
    strokeWidth: 0,
    barPercentage: 0.5,
    useShadowColorFromDataset: false,
  };
  return (
    // <ScrollView showsVerticalScrollIndicator={false}>
      <View style={[styles.container,{height:height}]}>
        <General data={DATA} fieldId={DATA.id} />
      <StackedBarChart
        style={styles.chart}
        data={data_stackedBarChart}
        width={width * 0.9}
        height={230}
        strokeWidth={10}
        radius={85}
        chartConfig={chartConfig}
        hideLegend={true}
      />
      {/* <View style={styles.chartView}>
        <Text style={[styles.chartText,{color:Colors[theme].black}]}>{DATA.detail_datas.labels[0]}</Text>
      <LineChart
        style={styles.chart}
        data={data_lineChart1}
        width={width * 0.9}
        height={256}
        verticalLabelRotation={30}
        chartConfig={chartConfig}
        bezier
      />
      </View>
      <View style={styles.chartView}>
        <Text style={[styles.chartText,{color:Colors[theme].black}]}>{DATA.detail_datas.labels[1]}</Text>
      <LineChart
        style={styles.chart}
        data={data_lineChart2}
        width={width * 0.9}
        height={256}
        verticalLabelRotation={30}
        chartConfig={chartConfig}
        bezier
      />
      </View>
      <View style={styles.chartView}>
        <Text style={[styles.chartText,{color:Colors[theme].black}]}>{DATA.detail_datas.labels[2]}</Text>
      <LineChart
        style={styles.chart}
        data={data_lineChart3}
        width={width * 0.9}
        height={256}
        verticalLabelRotation={30}
        chartConfig={chartConfig}
        bezier
      />
    </View> */}
    </View>
    // </ScrollView>
  );
};

export default Soil;
