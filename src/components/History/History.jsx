import { View, Text, TouchableHighlight } from 'react-native'
import React from 'react'
import { useThemeContext } from '../../contexts/ThemeContext';
import { Colors } from '../../assets/default_styles';
import SVG_HISTORY from "../../assets/images/svgs/history"
import SVG_DELETE from "../../assets/images/svgs/delete"
import { styles } from './styles';
const History = ({data}) => {
  const { theme } = useThemeContext();
  return (
    <View style={styles.container}>
      <SVG_HISTORY width={25} height={25}/>
      <Text style={[styles.text,{color:Colors[theme].black}]}>{data}</Text>
      <TouchableHighlight onPress={()=>{}} underlayColor={'transparent'}><SVG_DELETE width={25} height={25}/></TouchableHighlight>
    </View>
  )
}

export default History