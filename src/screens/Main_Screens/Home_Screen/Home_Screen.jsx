import {
  View,
  Text,
  TouchableHighlight,
  ScrollView,
  Modal,
  TouchableOpacity,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {styles} from './styles';
import {useThemeContext} from '../../../contexts/ThemeContext';
import {Colors} from '../../../assets/default_styles';
import SVG_SEARCH from '../../../assets/images/svgs/search.svg';
import Weather from '../../../components/Weather/Weather';
import CardMini from '../../../components/Cards/CardMini/CardMini';
import CardNormal from '../../../components/Cards/CardNormal/CardNormal';
import HomeNotifications from '../../../components/Home/Notifications/Notifications';
import MainHeader from '../../../layouts/header/MainHeader';
import Field from '../../../components/Fields/Field/Field';
import Notifications from '../../../layouts/Notifications/Notifications';
import {useNotificationContext} from '../../../contexts/NotificationContext';
const Home_Screen = ({navigation}) => {
  const {theme} = useThemeContext();
  const {isNotificationOpen, setIsNotificationOpen} = useNotificationContext();
  return (
    <>
      <Modal
        animationType="fade"
        transparent={true}
        visible={isNotificationOpen}
        onRequestClose={() => {
          setIsNotificationOpen(false);
        }}>
        <Notifications />
      </Modal>
      <ScrollView scrollEnabled={!isNotificationOpen}>
        <View
          style={[
            styles.container,
            {backgroundColor: Colors[theme].backgroundColor},
          ]}>
          <MainHeader name={'Home'} />
          <TouchableHighlight
            style={styles.search}
            onPress={() => {
              navigation.navigate('Search');
            }}
            underlayColor={'transparent'}>
            <SVG_SEARCH />
          </TouchableHighlight>
          <Weather />
          <HomeNotifications />
          <Field />
        </View>
      </ScrollView>
    </>
  );
};

export default Home_Screen;
