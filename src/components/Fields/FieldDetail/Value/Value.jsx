import {View, Text, Dimensions} from 'react-native';
import React from 'react';
import SVG_WHEAT from '../../../../assets/images/svgs/product_wheat.svg';
import {styles} from './style';
import {useThemeContext} from '../../../../contexts/ThemeContext';
import {Colors} from '../../../../assets/default_styles';
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart,
} from 'react-native-chart-kit';
const Value = props => {
  const {theme} = useThemeContext();
  const {width} = Dimensions.get('window');
  console.log(props.data.detail_datas.status.npk[0]);
  const data = [
    {
      name: props.data.detail_datas.labels[0],
      population: props.data.detail_datas.status.npk[0],
      color: "#0a417aa0",
      legendFontColor: "#0a417a",
      legendFontSize: 15
    },
    
    {
      name: props.data.detail_datas.labels[1],
      population: props.data.detail_datas.status.npk[1],
      color: "#323232",
      legendFontColor: "#323232",
      legendFontSize: 15
    },
    {
      name: props.data.detail_datas.labels[2],
      population: props.data.detail_datas.status.npk[2],
      color: "#8464a0",
      legendFontColor: "#8464a0",
      legendFontSize: 15
    }
  ];
  const chartConfig = {
    backgroundGradientFrom: '#1E292300',
    backgroundGradientFromOpacity: 0,
    backgroundGradientTo: '#08130D00',
    backgroundGradientToOpacity: 0.5,
    color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
    strokeWidth: 0,
    barPercentage: 0.5,
    useShadowColorFromDataset: false,
  };
  return (
    <View style={[styles.container, {backgroundColor: Colors[theme].gray}]}>
      {/* <View style={styles.internalData}>
        <SVG_WHEAT width={50} height={50} style={styles.svgProduct} />
        <Text style={[styles.textName, {color: Colors[theme].black}]}>
          {props.data && props.data.name}
        </Text>
        <Text style={[styles.textDesc, {color: Colors[theme].black}]}>
          {props.data && props.data.day + ' days'}
        </Text>
      </View> */}
      <PieChart
  data={data}
  width={width*0.9}
  height={220}
  chartConfig={chartConfig}
  accessor={"population"}
  backgroundColor={"transparent"}
  center={[5, 5]}
  absolute
/>
    </View>
  );
};

export default Value;
