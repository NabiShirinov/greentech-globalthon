import {View, Text, TouchableHighlight, Dimensions, ScrollView} from 'react-native';
import React from 'react';
import {styles} from './styles';
import {Colors} from '../../assets/default_styles';
import {useThemeContext} from '../../contexts/ThemeContext';
import CardRegular from '../../components/Cards/CardRegular/CardRegular';
import MainHeader from '../header/MainHeader';
import { useNotificationContext } from '../../contexts/NotificationContext';

const Notifications = () => {
    const {isNotificationOpen, setIsNotificationOpen} = useNotificationContext();
  const {theme} = useThemeContext();
  const {width, height} = Dimensions.get('window');
  datas = [
    {
      id: 1,
      img: require('../../assets/images/trial/t1.jpg'),
      name: 'May 6   14:08 pm',
      desc: 'Humidity level is low, you should water the field',
    },
    {
      id: 1,
      img: require('../../assets/images/trial/t2.jpg'),
      name: 'May 2   09:43 pm',
      desc: 'There is probablity of rain, you should water the field',
    },
    {
      id: 1,
      img: require('../../assets/images/trial/t1.jpg'),
      name: 'May 6   14:08 pm',
      desc: 'Humidity level is low, you should water the field',
    },
    {
      id: 1,
      img: require('../../assets/images/trial/t2.jpg'),
      name: 'May 2   09:43 pm',
      desc: 'There is probablity of rain, you should water the field',
    },
    {
      id: 1,
      img: require('../../assets/images/trial/t1.jpg'),
      name: 'May 6   14:08 pm',
      desc: 'Humidity level is low, you should water the field',
    },
    {
      id: 1,
      img: require('../../assets/images/trial/t2.jpg'),
      name: 'May 2   09:43 pm',
      desc: 'There is probablity of rain, you should water the field',
    },
    {
      id: 1,
      img: require('../../assets/images/trial/t1.jpg'),
      name: 'May 6   14:08 pm',
      desc: 'Humidity level is low, you should water the field',
    },
    {
      id: 1,
      img: require('../../assets/images/trial/t2.jpg'),
      name: 'May 2   09:43 pm',
      desc: 'There is probablity of rain, you should water the field',
    },
    {
      id: 1,
      img: require('../../assets/images/trial/t1.jpg'),
      name: 'May 6   14:08 pm',
      desc: 'Humidity level is low, you should water the field',
    },
    {
      id: 1,
      img: require('../../assets/images/trial/t2.jpg'),
      name: 'May 2   09:43 pm',
      desc: 'There is probablity of rain, you should water the field',
    },
  ];
  return (
    isNotificationOpen && (
      <View style={[styles.container, {width: width, height: height}]}>
        <TouchableHighlight
          underlayColor={'transparent'}
          onPress={() => {
            setIsNotificationOpen(false);
          }}>
          <View style={{width: width / 3, height: height}} />
        </TouchableHighlight>
        <View
          style={[
            styles.notifications,
            {width: (width / 3) * 2, height: height, backgroundColor:Colors[theme].backgroundColor},
          ]}>
            <MainHeader name={"Notifications"}/>
         <View style={{paddingBottom:100,}}>
         <ScrollView>
         {datas.map((item, index) => (
            <CardRegular data={item} key={index} />
          ))}
         </ScrollView>
         </View>
        </View>
      </View>
    )
  );
};

export default Notifications;
