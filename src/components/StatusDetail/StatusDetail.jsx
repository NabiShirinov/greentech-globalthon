import { View, Text, ActivityIndicator } from 'react-native'
import React, { useEffect, useState } from 'react'
import Planning from './Planning/Planning'
import Accumulated from './Accumulated/Accumulated'
import Soil from './Soil/Soil'
import { DATA_fields } from '../../../api/fields'
import { Colors } from 'react-native/Libraries/NewAppScreen'
import { useThemeContext } from '../../contexts/ThemeContext'

const StatusDetail = ({id,fieldId}) => {
    let datas = DATA_fields;
    const {theme} = useThemeContext()
    const [loading, setLoading] = useState(false);
    const filteredData = datas.filter(item => item.id === fieldId);
    datas = filteredData[0];

    ////
    useEffect(() => {
      setLoading(true)
      setTimeout(() => {
        setLoading(false)
      }, 2000);
    }, []);
  
    ////
    let componentToRender;

    if (id === 1) {
      componentToRender = <Planning data={datas} />;
    } else if (id === 2) {
      componentToRender = <Accumulated data={datas} />;
    } else {
      componentToRender = <Soil data={datas} />;
    }
  
    return (
      <View style={{position:"relative",height:"100%"}}>
        {
          loading? <ActivityIndicator size="large" color={Colors[theme].secondary} style={{}}/>:componentToRender
        }
      </View>
    );
}

export default StatusDetail