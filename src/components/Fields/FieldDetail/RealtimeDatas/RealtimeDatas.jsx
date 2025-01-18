import {View, Text, Dimensions, TouchableHighlight} from 'react-native';
import React from 'react';
import {useThemeContext} from '../../../../contexts/ThemeContext';
import {styles} from './style';
import {Colors} from '../../../../assets/default_styles';
import SVG_TEMPERATURE from '../../../../assets/images/svgs/status/status_realtime_temp.svg';
import SVG_HUMIDITY from '../../../../assets/images/svgs/status/status_realtime_humidity.svg';
import SVG_SOIL from '../../../../assets/images/svgs/status/status_realtime_soil.svg';
import SVG_WIFI_ON from '../../../../assets/images/svgs/status/status_realtime_wifi_on.svg';
import SVG_WIFI_OFF from '../../../../assets/images/svgs/status/status_realtime_wifi_off.svg';
import {useNavigation} from '@react-navigation/native';
import {useHardwareDatasContext} from '../../../../contexts/HardwareDatas';
const RealtimeDatas = props => {
  const {theme} = useThemeContext();
  const {initialDatas, isConnected} = useHardwareDatasContext();
  const navigation = useNavigation();
  const {width} = Dimensions.get('window');
  const values = [
    {
      id: 1,
      svg: SVG_SOIL,
      svg_bgc: '#fff',
      name: 'Soil Measture',
      data1: `${initialDatas.fork_percentage||0} %`,
    },
    {
      id: 2,
      svg: SVG_TEMPERATURE,
      svg_bgc: '#fff',
      name: 'Temperature',
      data1: `${initialDatas.bmp_temperature||0} °C`,
    },
    {
      id: 3,
      svg: SVG_HUMIDITY,
      svg_bgc: '#fff',
      name: 'Humidity',
      data1: `${initialDatas.humidity||0} %`,
    },
  ];
  return (
    <View
      style={[
        styles.container,
        {backgroundColor: Colors[theme].backgroundColor},
      ]}>
      <View style={styles.datas}>
        {values.map((item, index) => (
          <TouchableHighlight
            key={index}
            onPress={() => {
              navigation.navigate('StatusDetail', {
                id: 2,
                fieldId: props.fieldId,
                name: 'Status Detail',
              });
            }}
            underlayColor={'transparent'}>
            <View
              style={[
                styles.data,
                {backgroundColor: item.svg_bgc, width: width / 3.75},
              ]}>
              <View style={[styles.svg, {backgroundColor: item.svg_bgc}]}>
                <item.svg width={35} height={35} />
              </View>
              <Text style={[styles.dataName, {color: Colors[theme].black}]}>
                {item.name}
              </Text>
              <Text style={[styles.data1, {color: Colors[theme].black}]}>
                {item.data1}
              </Text>
            </View>
          </TouchableHighlight>
        ))}
      </View>
      <View style={styles.datas}>
        {isConnected ? (
          <View
            style={[
              styles.data,
              {
                backgroundColor: Colors[theme].white,
                width: width / 1.11,
                gap: 12.5,
                paddingVertical: 12.5,
                
              },
            ]}>
            <SVG_WIFI_ON width={35} height={35} />
            <Text style={[styles.data1, {color: Colors[theme].black}]}>
              CONNECTED TO DEVICE
            </Text>
          </View>
        ) : (
          <View
            style={[
              styles.data,
              {
                backgroundColor: Colors[theme].white,
                width: width / 1.11,
                gap: 12.5,
                paddingVertical: 12.5,
                elevation:0
              },
            ]}>
            <SVG_WIFI_OFF width={35} height={35}/>
            <Text style={[styles.data1, {color: Colors[theme].black}]}>
              DEVICE DISCONNECTED
            </Text>
          </View>
        )}
      </View>
    </View>
  );
};

export default RealtimeDatas;
