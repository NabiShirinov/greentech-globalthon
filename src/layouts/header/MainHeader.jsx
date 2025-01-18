import {View, Text, TouchableHighlight} from 'react-native';
import React from 'react';
import {styles} from './styles';
import SVG_LEFT from '../../assets/images/svgs/SIDE_LEFT';
import SVG_RIGHT from '../../assets/images/svgs/SIDE_RIGHT';
import {Colors} from '../../assets/default_styles';
import {useThemeContext} from '../../contexts/ThemeContext';
import {useNavigation} from '@react-navigation/native';
const MainHeader = props => {
  const {theme} = useThemeContext();
  const navigation = useNavigation();
  return props.back ? (
    <View style={styles.main_left}>
      <TouchableHighlight
        style={styles.goBack}
        underlayColor={'transparent'}
        onPress={() => {
          navigation.navigate(props.back,props.backParams);
        }}>
        <SVG_LEFT />
      </TouchableHighlight>
      <Text style={[styles.text, {color: Colors[theme].black}]}>
        {props.name}
      </Text>
    </View>
  ) : props.next ? (
    <View style={styles.main_next}>
      <Text style={[styles.text, {color: Colors[theme].black}]}>
        {props.name}
      </Text>
      <TouchableHighlight
        style={styles.goNext}
        underlayColor={'transparent'}
        onPress={() => {
          navigation.navigate(props.next);
        }}>
        <SVG_RIGHT />
      </TouchableHighlight>
    </View>
  ) : (
    <View style={styles.main}>
      <Text style={[styles.text, {color: Colors[theme].black}]}>
        {props.name}
      </Text>
    </View>
  );
};

export default MainHeader;
