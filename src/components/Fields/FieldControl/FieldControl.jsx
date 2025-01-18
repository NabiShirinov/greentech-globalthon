import {View, Text, Switch, Dimensions, Button, TouchableHighlight} from 'react-native';
import React, { useState } from 'react';
import {useRoute} from '@react-navigation/native';
import { DATA_gardens } from '../../../../api/gardens';
import { styles } from './style';
import MainHeader from '../../../layouts/header/MainHeader';
import SVG_STA1 from "../../../assets/images/trial/statistic1.svg"
import SVG_CALE from "../../../assets/images/trial/calendar.svg"
import SVG_CH1 from "../../../assets/images/trial/detail_chart.svg"
import SVG_STS1 from "../../../assets/images/trial/chart_st1.svg"
import SVG_CH2 from "../../../assets/images/trial/chart2.svg"
const FieldControl = () => {
  const route = useRoute();
  const {width} = Dimensions.get('window');
  const fieldId = route.params?.fieldId;
  let datas = DATA_gardens;
  const filteredData = datas.filter(item => item.id === fieldId);
  datas = filteredData[0];
  const [switchValue, setSwitchValue] = useState(datas.state)
  const [switchValue2, setSwitchValue2] = useState(false)
  const [switchValue3, setSwitchValue3] = useState(false)
  const [start, setStart] = useState(false)
  const [TempValue, setTempValue] = useState(38)
  const [TempValue2, setTempValue2] = useState(29)
  const [TempValue3, setTempValue3] = useState(16)
  const [intervalId, setIntervalId] = useState(null);
const handleStart = () => {
    if (start) {
      clearInterval(intervalId); // interval'i durdur
      setStart(false); // start değerini false yap
    } else {
      const id = setInterval(() => {
        setTempValue2(prev => {
          if (prev < TempValue) {
            return prev + 1;
          } else {
            clearInterval(id); // interval'i durdur
            setStart(false); // start değerini false yap
            return prev;
          }
        });
      }, 1000);
      setIntervalId(id);
      setStart(true); // start değerini true yap
    }
  };
  return (
    <>
    <MainHeader name={"Watering triggers"} back={'FieldAll'}/>
    <View style={styles.container}>
      <View style={styles.fullView}>
        <View style={styles.fullViewItems}>
            <Text style={styles.text}>Don't use water when today's forecast temperature is lower than</Text>
            <Switch
          trackColor={{false: '#444444', true: '#444444'}}
          thumbColor={switchValue ? "#0496C7" : '#f4f3f4'}
          ios_backgroundColor="#3e3e3e"
          onValueChange={()=>{setSwitchValue(!switchValue)}}
          style={[styles.switch, { transform: [{ scaleX: 1.1 }, { scaleY: 1.1 }] }]}
          value={switchValue}
        />
        </View>
        <View style={styles.fullViewItems}>
            <Text style={styles.texth1}>{TempValue3}°C</Text>
            <View style={{flexDirection:"row", alignItems:"center",gap:8}}>
                <TouchableHighlight onPress={()=>{setTempValue3(TempValue3+1)}} underlayColor={"transparent"}><Text style={styles.plusminus}>+</Text></TouchableHighlight>
                <TouchableHighlight onPress={()=>{setTempValue3(TempValue3-1)}} underlayColor={"transparent"}><Text style={styles.plusminus}>-</Text></TouchableHighlight>
            </View>
        </View>
      </View>

      <View style={styles.fullView2}>
        <View style={[styles.fullViewItems2,{backgroundColor:"#E2A499"}]}>
          {/* <SVG_CALE/> */}
            <Text style={styles.text}>Use forecast temperature for to predict smart watering</Text>
            <Switch
          trackColor={{false: '#444444', true: '#444444'}}
          thumbColor={switchValue2 ? "#0496C7" : '#f4f3f4'}
          ios_backgroundColor="#3e3e3e"
          onValueChange={()=>{setSwitchValue2(!switchValue2)}}
          style={[styles.switch, { transform: [{ scaleX: 1.1 }, { scaleY: 1.1 }] }]}
          value={switchValue2}
        />
        </View>
        <View style={styles.fullViewItems2}>
          {/* <SVG_CALE/> */}
            <Text style={styles.text2}>Water 25% less when today's forecast temp is lower than 21</Text>
            <Switch
          trackColor={{false: '#444444', true: '#444444'}}
          thumbColor={switchValue3 ? "#0496C7" : '#f4f3f4'}
          ios_backgroundColor="#3e3e3e"
          onValueChange={()=>{setSwitchValue3(!switchValue3)}}
          style={[styles.switch, { transform: [{ scaleX: 1.1 }, { scaleY: 1.1 }] }]}
          value={switchValue3}
        />
        </View>
      </View>

      <View style={styles.fullView}>
        <View style={styles.fullViewItems}>
            <Text style={styles.text}>Soil moisture</Text>
           <Text style={styles.textBig}>{TempValue}%</Text>
        </View>
        <View style={styles.fullViewItems}>
            <Text style={styles.texth1}>{TempValue2}%</Text>
            <TouchableHighlight onPress={handleStart} underlayColor={"transparent"} style={{backgroundColor:start?"#E2A499":"#0496C7", borderRadius:30, height:40,width:90,alignItems:"center", justifyContent:"center"}}><Text>{start? "STOP":"START"}</Text></TouchableHighlight>
            <View style={{flexDirection:"row", alignItems:"center",gap:8}}>
                <TouchableHighlight underlayColor={"transparent"} onPress={()=>{setTempValue(TempValue+1)}}><Text style={styles.plusminus}>+</Text></TouchableHighlight>
                <TouchableHighlight underlayColor={"transparent"} onPress={()=>{setTempValue(TempValue-1)}}><Text style={styles.plusminus}>-</Text></TouchableHighlight>
            </View>
        </View>
      </View>
      {/* <View>
        <SVG_CH2/>
      </View> */}
      <View style={{width:"100%"}}>
        <SVG_STA1 width={'100%'}/>
      </View>
      <View style={{width:"100%"}}>
        <SVG_CALE width={'100%'}/>
      </View>
      <View style={{width:"100%"}}>
        <SVG_CH1 width={'100%'}/>
      </View >
        <SVG_STS1 width={'100%'}/>
    </View></>
  );
};

export default FieldControl;
