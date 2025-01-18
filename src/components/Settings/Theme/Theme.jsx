import React, {useContext} from 'react';
import {View, Switch, StyleSheet, Text} from 'react-native';
import {Colors, Fonts} from '../../../assets/default_styles';
import MainHeader from '../../../layouts/header/MainHeader';
import { useThemeContext } from '../../../contexts/ThemeContext';

const Theme = ({navigation}) => {
    const { theme, setTheme } = useThemeContext();
    const toggleSwitch = ()=>{
        setTheme(theme==='light'?'dark':'light')
    }
  return (
    <View style={[styles.container,{backgroundColor:Colors[theme].backgroundColor}]}>
      <MainHeader name={'Theme'} back={"Settings"} />
      <View style={styles.main}>
        <Text style={[styles.themeText,{color:Colors[theme].black}]}>Dark Mode: </Text>
        <Switch
          trackColor={{false: '#767577', true: '#767577'}}
          thumbColor={theme? Colors.secondary : '#f4f3f4'}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch}
          value={theme==='dark'}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  main: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 10,
    paddingHorizontal: 25,
    gap: 15,
    position: 'relative',
  },
  themeText: {
    fontFamily: Fonts.normal,
    fontSize: 25,
  },
});

export default Theme;
