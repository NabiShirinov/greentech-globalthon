import {View, Text, StatusBar} from 'react-native';
import React, {useEffect, useState} from 'react';
import SplashScreen from 'react-native-splash-screen';
import Init_Routes from './routes/Init_Routes';
import {useThemeContext} from './contexts/ThemeContext';
import {Colors} from './assets/default_styles';
import NetInfo from '@react-native-community/netinfo';
import NoInternet from './components/NoInternet/NoInternet';
import ApiFetch from './components/HardwareManager/ApiFetch';
const Main = () => {
  ApiFetch()
  useEffect(() => {
    setTimeout(() => {
      SplashScreen.hide();
    }, 2000);
  }, []);
  const [isConnected, setIsConnected] = useState(true);
  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener(state => {
      setIsConnected(state.isConnected);
    });

    return () => {
      unsubscribe();
    };
  }, [isConnected]);
  const {theme} = useThemeContext();

  return (
    <>
      {isConnected ? (
        <>
          <StatusBar
            barStyle="dark-content"
            hidden={false}
            backgroundColor={Colors[theme].backgroundColor}
            translucent={false}
          />
          <Init_Routes />
        </>
      ) : (
        <>
        <StatusBar
            barStyle="dark-content"
            hidden={false}
            backgroundColor={Colors[theme].secondary}
            translucent={true}
          />
        <NoInternet />
        </>
      )}
    </>
  );
};

export default Main;
