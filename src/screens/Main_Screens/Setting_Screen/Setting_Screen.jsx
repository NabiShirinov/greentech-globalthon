import {View, Text, TouchableHighlight, Alert, ScrollView} from 'react-native';
import React from 'react';
import MainHeader from '../../../layouts/header/MainHeader';
import SVG_LANGUAGE from '../../../assets/images/svgs/settings_language';
import SVG_THEME from '../../../assets/images/svgs/settings_theme';
import SVG_ACCOUNT from '../../../assets/images/svgs/settings_account';
import SVG_SECURITY from '../../../assets/images/svgs/settings_security';
import SVG_AUTOMOCH from '../../../assets/images/svgs/settings_automoch';
import SVG_VIBRATE from '../../../assets/images/svgs/settings_vibrate';
import SVG_HELP from '../../../assets/images/svgs/settings_help';
import SVG_LOGOUT from '../../../assets/images/svgs/settings_logout';
import SVG_RIGHT from '../../../assets/images/svgs/SIDE_RIGHT';
import {styles} from './styles';
import {Colors} from '../../../assets/default_styles';
import {useThemeContext} from '../../../contexts/ThemeContext';
import Profile from '../../../components/Settings/Profile/Profile';
const Setting_Screen = ({navigation}) => {
  const {theme} = useThemeContext();
  const datas = [
    {
      name: 'Theme',
      svg: SVG_THEME,
      navigate: 'Theme',
    },
    {
      name: 'Account',
      svg: SVG_ACCOUNT,
      navigate: 'Language',
    },
    {
      name: 'Privacy & Security',
      svg: SVG_SECURITY,
      navigate: 'Language',
    },
    {
      name: 'Language',
      svg: SVG_LANGUAGE,
      navigate: 'Language',
    },
    // {
    //   name: 'Auto Moch',
    //   svg: SVG_AUTOMOCH,
    //   navigate: 'Theme',
    // },
    // {
    //   name: 'Vibrate',
    //   svg: SVG_VIBRATE,
    //   navigate: 'Theme',
    // },
    {
      name: 'Help center',
      svg: SVG_HELP,
      navigate: 'Theme',
    },
    {
      name: 'Sign out',
      svg: SVG_LOGOUT,
      navigate: 'Theme',
    },
  ];
  const handleSignOut = () => {
    Alert.alert(
      'Sign Out',
      'Are you sure you want to sign out?',
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {
          text: 'Sign Out',
          onPress: () => {
            console.log('log outtt');
            navigation.navigate('Login');
          },
          style: 'destructive',
        },
      ],
      {cancelable: false},
    );
  };
  return (
    <ScrollView>
      <View
        style={[
          styles.container,
          {backgroundColor: Colors[theme].backgroundColor},
        ]}>
        <MainHeader name={'Settings'} />
        <Profile gender={'man'} />
        {datas.map((item, index) => {
          return (
            <React.Fragment key={item.name}>
              <TouchableHighlight
                onPress={() => {
                  if (item.name === 'Sign out') {
                    handleSignOut();
                  } else {
                    navigation.navigate(item.navigate);
                  }
                }}
                underlayColor={Colors[theme].white}>
                <View style={styles.item}>
                  <View
                    style={[
                      styles.itemSvg,
                      {backgroundColor: Colors[theme].white},
                    ]}>
                    <item.svg />
                  </View>
                  <Text style={[styles.itemName, {color: Colors[theme].black}]}>
                    {item.name}
                  </Text>
                  <View style={styles.navSvg}>
                    <SVG_RIGHT />
                  </View>
                </View>
              </TouchableHighlight>
              {index % 2 == 1 && <View style={{height: 36}} />}
            </React.Fragment>
          );
        })}
      </View>
    </ScrollView>
  );
};

export default Setting_Screen;
