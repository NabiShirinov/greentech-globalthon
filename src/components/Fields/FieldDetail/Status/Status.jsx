import {View, Text, Dimensions, TouchableHighlight} from 'react-native';
import React from 'react';
import {useThemeContext} from '../../../../contexts/ThemeContext';
import {styles} from './style';
import {Colors} from '../../../../assets/default_styles';
import SVG_TEMPERATURE from "../../../../assets/images/svgs/status/status_temperature.svg"
import SVG_PLANT from "../../../../assets/images/svgs/status/status_plant.svg"
import SVG_POT from "../../../../assets/images/svgs/status/status_pot.svg"
import { useNavigation } from '@react-navigation/native';
const Status = props => {
  const {theme} = useThemeContext();
  const navigation = useNavigation()
  const {width} = Dimensions.get('window');
  const values = [
    {
      id:1,
      svg: SVG_POT,
      svg_bgc:"#9dd854",
      name: 'Planning date',
      data1: props.data.sow_date,
      data2: `in ${props.data.day} days`,
    },
    {
      id:2,
      svg: SVG_TEMPERATURE,
      svg_bgc:"#f15c6e",
      name: 'Accumulated GDD',
      data1: '4413.4',
      data2: 'dogF',
    },
    {
      id:3,
      svg: SVG_PLANT,
      svg_bgc:"#88bbff",
      name: 'Soil Health',
      data1: props.data.detail_datas.status.percent + "%",
      data2: props.data.detail_datas.status.name,
    },
  ];
  return (
    <View style={[styles.container, {backgroundColor: Colors[theme].white}]}>
      <View style={styles.header}>
        <Text style={[styles.headerName, {color: Colors[theme].black}]}>
          Crop Status
        </Text>
        <Text style={[styles.headerText, {color: Colors[theme].white}]}>
          Setup
        </Text>
      </View>
      <View style={styles.datas}>
        {values.map((item, index) => (
          <TouchableHighlight key={index} onPress={()=>{navigation.navigate('StatusDetail',{id:item.id,fieldId:props.fieldId,name:item.name})}} underlayColor={'transparent'}>
            <View
            style={[styles.data, {backgroundColor: item.svg_bgc}]}>
            <View style={[styles.svg,{backgroundColor:item.svg_bgc}]}><item.svg width={35} height={35}/></View>
            <Text style={[styles.dataName, {color: Colors[theme].black}]}>
              {item.name}
            </Text>
            <View style={{flexDirection:"column",
          justifyContent:"center", alignItems:"center"}}>
              <Text style={[styles.data1, {color: Colors[theme].black}]}>
                {item.data1}
              </Text>
              <Text style={[styles.data2, {color: Colors[theme].black}]}>
                {item.data2}
              </Text>
            </View>
          </View>
          </TouchableHighlight>
        ))}
      </View>
    </View>
  );
};

export default Status;
