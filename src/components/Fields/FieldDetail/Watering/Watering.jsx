import {View, Text, Dimensions, TouchableHighlight} from 'react-native';
import React from 'react';
import {useThemeContext} from '../../../../contexts/ThemeContext';
import {styles} from './style';
import {Colors} from '../../../../assets/default_styles';
import SVG_TEMPERATURE from "../../../../assets/images/svgs/status/status_temperature.svg"
import SVG_PLANT from "../../../../assets/images/svgs/status/status_plant.svg"
import SVG_POT from "../../../../assets/images/svgs/status/status_pot.svg"
import SVG_WATERING from "../../../../assets/images/svgs/status/status_watering.svg"
import { useNavigation } from '@react-navigation/native';
const Watering = props => {
  const {theme} = useThemeContext();
  const navigation = useNavigation()
  const {width} = Dimensions.get('window');
  const values = [
    {
      id:1,
      svg: SVG_WATERING,
      svg_bgc:"#fff",
      name: 'Watering triggers',
      data1: props.data.sow_date,
      data2: `in ${props.data.day} days`,
    },
  ];
  return (
      <View style={styles.datas}>
        {values.map((item, index) => (
          <TouchableHighlight key={index} onPress={()=>{navigation.navigate('FieldControl',{id:item.id,fieldId:props.fieldId,name:item.name})}} underlayColor={'transparent'}>
            <View
            style={[styles.data, {backgroundColor: Colors[theme].white}]}>
            <View style={[styles.svg,{backgroundColor:item.svg_bgc}]}><item.svg width={35} height={35}/></View>
            <Text style={[styles.dataName, {color: Colors[theme].black}]}>
              {item.name}
            </Text>
            {/* <View style={{flexDirection:"column",
          justifyContent:"center", alignItems:"center"}}>
              <Text style={[styles.data1, {color: Colors[theme].black}]}>
                {item.data1}
              </Text>
              <Text style={[styles.data2, {color: Colors[theme].black}]}>
                {item.data2}
              </Text>
            </View> */}
          </View>
          </TouchableHighlight>
        ))}
      </View>
  );
};

export default Watering;
