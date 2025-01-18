import {View, Text, Dimensions} from 'react-native';
import React from 'react';
import SVG_WHEAT from '../../../../assets/images/svgs/product_wheat.svg';
import SVG_GREAT from '../../../../assets/images/svgs/status/status_detail_soil_great.svg'
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
const General = props => {
  const {theme} = useThemeContext();
  const {width} = Dimensions.get('window');
  const data = {
    labels: [props.data.detail_datas.status.percent],
    data: [props.data.detail_datas.status.percent/100],
  };
  const chartConfig = {
    backgroundGradientFrom: '#ffffff',
    backgroundGradientFromOpacity: 0,
    backgroundGradientTo: '#ffffff',
    backgroundGradientToOpacity: 0.3,
    color: (opacity = 1) => `rgba(0, 155, 6, ${opacity})`,
    strokeWidth: 0,
    barPercentage: 0.5,
    
    useShadowColorFromDataset: false,
  };
  return (
    <View style={[styles.container, {backgroundColor: Colors[theme].white}]}>
      <View style={[styles.internalData,{left:-width/6,}]}>
        <SVG_GREAT width={50} height={50} style={styles.svgProduct} />
        <Text style={[styles.textName, {color: Colors[theme].black}]}>
          {props.data && props.data.detail_datas.status.percent}%
        </Text>
        <Text style={[styles.textDesc, {color: Colors[theme].black}]}>
          {props.data && props.data.detail_datas.status.name}
        </Text>
      </View>
      <View style={[styles.exData]}>
        <View style={[styles.exTexts,{}]}><View style={[styles.exTextName,{backgroundColor:props.data.detail_datas.color[2]}]}></View><Text style={[styles.exTextValue,{color:Colors[theme].black}]}>{props.data.detail_datas.labels[2]}</Text></View>
        <View style={[styles.exTexts,{}]}><View style={[styles.exTextName,{backgroundColor:props.data.detail_datas.color[1]}]}></View><Text style={[styles.exTextValue,{color:Colors[theme].black}]}>{props.data.detail_datas.labels[1]}</Text></View>
        <View style={[styles.exTexts,{}]}><View style={[styles.exTextName,{backgroundColor:props.data.detail_datas.color[0]}]}></View><Text style={[styles.exTextValue,{color:Colors[theme].black}]}>{props.data.detail_datas.labels[0]}</Text></View>
      </View>
      <ProgressChart
      style={styles.chart}
        data={data}
        width={width*0.9+50}
        height={230}
        strokeWidth={10}
        radius={85}
        chartConfig={chartConfig}
        hideLegend={false}
      />
    </View>
  );
};

export default General;
