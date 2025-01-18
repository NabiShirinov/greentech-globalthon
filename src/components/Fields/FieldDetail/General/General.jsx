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
const General = props => {
  const {theme} = useThemeContext();
  const {width} = Dimensions.get('window');
  const data = {
    labels: [props.data.day],
    data: [props.data.day / 120,],
  };
  const chartConfig = {
    backgroundGradientFrom: '#ffffff',
    backgroundGradientFromOpacity: 0,
    backgroundGradientTo: '#ffffff',
    backgroundGradientToOpacity: 1,
    color: (opacity = 1) => `rgba(26, 155, 6, ${opacity})`,
    strokeWidth: 0,
    barPercentage: 0.5,
    useShadowColorFromDataset: false,
  };
  return (
    <View style={[styles.container, {backgroundColor: Colors[theme].white}]}>
      <View style={[styles.internalData,{left:-width/6,}]}>
        <SVG_WHEAT width={50} height={50} style={styles.svgProduct} />
        <Text style={[styles.textName, {color: Colors[theme].black}]}>
          {props.data && props.data.name}
        </Text>
        <Text style={[styles.textDesc, {color: Colors[theme].black}]}>
          {props.data && props.data.day + ' days'}
        </Text>
      </View>
      <View style={[styles.exData]}>
        <View style={[styles.exTexts,{borderBottomWidth:0,paddingBottom:10,}]}><Text style={[styles.exTextName,{color:Colors[theme].gray,borderWidth:0}]}>{props.data.day} / 120 day</Text><Text style={[styles.exTextValue,{color:Colors[theme].secondary}]}>{props.data.day && (props.data.day/120*100).toFixed(1)}%</Text></View>
        <View style={[styles.exTexts,{}]}><Text style={[styles.exTextName,{color:Colors[theme].black}]}>Crop</Text><Text style={[styles.exTextValue,{color:Colors[theme].secondary}]}>{props.data.name}</Text></View>
        <View style={[styles.exTexts,{}]}><Text style={[styles.exTextName,{color:Colors[theme].black}]}>Phase</Text><Text style={[styles.exTextValue,{color:Colors[theme].secondary}]}>{props.data.phase}</Text></View>
        <View style={[styles.exTexts,{}]}><Text style={[styles.exTextName,{color:Colors[theme].black}]}>Size</Text><Text style={[styles.exTextValue,{color:Colors[theme].secondary}]}>{props.data.size}</Text></View>
        <View style={[styles.exTexts,{}]}><Text style={[styles.exTextName,{color:Colors[theme].black}]}>Sow date</Text><Text style={[styles.exTextValue,{color:Colors[theme].secondary}]}>{props.data.sow_date}</Text></View>
      </View>
      <ProgressChart
      style={styles.chart}
        data={data}
        width={width*0.83}
        height={230}
        strokeWidth={10}
        radius={85}
        chartConfig={chartConfig}
        hideLegend={true}
      />
    </View>
  );
};

export default General;
