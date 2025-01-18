import {View, Text, Dimensions, ScrollView} from 'react-native';
import React from 'react';
import {LineChart, StackedBarChart} from 'react-native-chart-kit';
import {styles} from './style';
import {useHardwareDatasContext} from '../../../contexts/HardwareDatas';
import Card_Hardware_Mini from '../../Cards/Card_Hardware/Card_Hardware_Mini';
import ApiFetch from '../../HardwareManager/ApiFetch';
import {useThemeContext} from '../../../contexts/ThemeContext';
import {Colors} from '../../../assets/default_styles';
import SVG_HUM from '../../../assets/images/svgs/status/hardware_humidity';
import SVG_PRES from '../../../assets/images/svgs/status/hardware_pressure';
import SVG_PRES_ATM from '../../../assets/images/svgs/status/hardware_pressure_atm';
import SVG_SOIL from '../../../assets/images/svgs/status/hardware_soil';
import SVG_TEMP from '../../../assets/images/svgs/status/hardware_temp';
import SVG_TEMP_FEELS from '../../../assets/images/svgs/status/hardware_temp_feels';
const Accumulated = ({data}) => {
  const DATA = data;
  const {width} = Dimensions.get('window');
  const {initialDatas} = useHardwareDatasContext();
  const SVG_COLORS = ['#ff2400','#49A010','#0496C7']
  const VALUE_NORMALS = {
    pres:{
      min:95,
      normal:100,
      max:110
    },
    pres_atm:{
      min:0.97,
      normal:1,
      max:1.03
    },
    temp:{
      min:22,
      normal:26,
      max:30
    },
    temp_feels:{
      min:22,
      normal:26,
      max:33
    },
    humidity:{
      min:5,
      normal:25,
      max:35
    },
    soil:{
      min:25,
      normal:60,
      max:80
    },
  }
  const {theme} = useThemeContext();
  console.log(initialDatas);
  return (
    <View
      style={[
        styles.container,
        {backgroundColor: Colors[theme].backgroundColor},
      ]}>
      <View style={[styles.components]}>
        <Card_Hardware_Mini
          data={(initialDatas.bmp_pressure)/1000}
          value={'kPa'}
          name={'Pressure'}
          keyValue={VALUE_NORMALS.pres}
          SvgName={SVG_PRES}
          SvgColor={SVG_COLORS}
        />
        <Card_Hardware_Mini
          data={(initialDatas.bmp_pressure_atm)?.toFixed(2)}
          value={'atm'}
          name={'Pressure'}
          keyValue={VALUE_NORMALS.pres_atm}
          SvgName={SVG_PRES_ATM}
          SvgColor={SVG_COLORS}
        />
        <Card_Hardware_Mini
          data={initialDatas.bmp_temperature}
          value={'°C'}
          name={'Temperature'}
          keyValue={VALUE_NORMALS.temp}
          SvgName={SVG_TEMP}
          SvgColor={SVG_COLORS}
        />
        <Card_Hardware_Mini
          data={initialDatas.fork_percentage}
          value={'%'}
          name={'Soil'}
          keyValue={VALUE_NORMALS.soil}
          SvgName={SVG_SOIL}
          SvgColor={SVG_COLORS}
        />
        <Card_Hardware_Mini
          data={initialDatas.humidity}
          value={'%'}
          name={'Humidity'}
          keyValue={VALUE_NORMALS.humidity}
          SvgName={SVG_HUM}
          SvgColor={SVG_COLORS}
        />
        <Card_Hardware_Mini
          data={initialDatas.temperature}
          value={'°C'}
          name={'Feels'}
          keyValue={VALUE_NORMALS.temp_feels}
          SvgName={SVG_TEMP_FEELS}
          SvgColor={SVG_COLORS}
        />
      </View>
    </View>
  );
};

export default Accumulated;
