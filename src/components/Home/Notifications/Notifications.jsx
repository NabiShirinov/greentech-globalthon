import { View, Text, TouchableHighlight } from 'react-native'
import React from 'react'
import CardNormal from '../../Cards/CardNormal/CardNormal'
import MainHeader from '../../../layouts/header/MainHeader'
import { styles } from './styles'
import { Colors } from '../../../assets/default_styles'
import { useThemeContext } from '../../../contexts/ThemeContext'
import { useNotificationContext } from '../../../contexts/NotificationContext'

const Notifications = () => {
  const {isNotificationOpen, setIsNotificationOpen} = useNotificationContext();
  const {theme} = useThemeContext();
    datas = [
        {
            id:1,
            img:require('../../../assets/images/trial/t1.jpg'),
            name:"May 6   14:08 pm",
            desc:"Humidity level is low, you should water the field",
        },
        {
            id:1,
            img:require('../../../assets/images/trial/t2.jpg'),
            name:"May 2   09:43 pm",
            desc:"There is probablity of rain, you should water the field",
        },
    ]
  return (
    <View style={styles.container}>
        <MainHeader name={"Notifications"} next={"notification"}/>
      <View style={styles.notifications}>
      {
        datas.map((item,index)=>(
            <CardNormal data={item} key={index}/>
        ))
      }
      </View>
      <View style={styles.more}>
      <TouchableHighlight onPress={()=>{setIsNotificationOpen(!isNotificationOpen)}} style={[styles.moreButton,{backgroundColor:Colors[theme].black}]}>
        <Text style={[styles.moreText,{color:Colors[theme].white}]}>More</Text>
      </TouchableHighlight>
      </View>
    </View>
  )
}

export default Notifications