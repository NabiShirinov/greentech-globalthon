import {
  View,
  Text,
  Dimensions,
  StyleSheet,
  TouchableHighlight,
} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {useThemeContext} from '../../../contexts/ThemeContext';
import {Colors, Fonts} from '../../../assets/default_styles';

const Card_Colorful = ({data}) => {
  const {width} = Dimensions.get('window');
  const navigation = useNavigation();
  const heightRatio = 280 / 220;
  cardWidth = width / 3;
  cardHeight = cardWidth * heightRatio;
  const {theme} = useThemeContext();
  return (
    <View style={{flexDirection:"column",gap:15}}>
      <View
        style={[
          styles.container,
          {
            backgroundColor: data.color,
            width: cardWidth,
            height: cardHeight,
          },
        ]}>
        <Text style={[styles.text,{color:Colors['light'].black}]}>{data.name}</Text>
      </View>
      <View style={styles.buttonView}>
        <TouchableHighlight onPress={() => {}} underlayColor={'transparent'}>
          <Text
            style={[
              styles.button,
              {
                color: Colors[theme].black,
                backgroundColor: Colors[theme].white,
              },
            ]}>
            Done
          </Text>
        </TouchableHighlight>
      </View>
    </View>
  );
};

export default Card_Colorful;

export const styles = StyleSheet.create({
  container: {
    borderRadius: 20,
    padding:12.5,

  },
  text:{
    fontFamily:Fonts.normal,
    fontSize:15,
  },
  buttonView: {
    alignItems:"center",
    paddingBottom:40,

  },
  button: {
    padding: 20,
    borderRadius:10,
    fontFamily:Fonts.normal,
    fontSize:15,
    elevation:10,

  },
});
