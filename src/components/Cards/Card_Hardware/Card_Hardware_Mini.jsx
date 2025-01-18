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
const Card_Hardware_Mini = ({value,data,keyValue, name,SvgName,SvgColor}) => {
  const {width} = Dimensions.get('window');
  const navigation = useNavigation();
  const heightRatio = 280 / 280;
  cardWidth = width / 3;
  cardHeight = cardWidth * heightRatio;
  const {theme} = useThemeContext();
  return (
    <View style={[styles.container, {backgroundColor: Colors[theme].white}]}>
      <View style={{alignItems: 'center', justifyContent: 'center'}}>
        <Text style={[styles.textName, {color: Colors[theme].black}]}>
          {name}
        </Text>
        <Text style={[styles.textValue, {color: Colors[theme].black}]}>
          {data || "0"} {value}
        </Text>
      </View>
      <View style={[styles.svgBlue,{backgroundColor:SvgColor[(data<keyValue.min || data>keyValue.max)?0:(data>keyValue.min && data<keyValue.normal)?2:1]}]}>
        <SvgName width={35} height={35} />
      </View>
    </View>
  );
};

export default Card_Hardware_Mini;

export const styles = StyleSheet.create({
  container: {
    height:"27.5%",
    width: '45%',
    borderRadius: 20,
    flexDirection: 'column-reverse',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 30,
  },
  textName: {
    fontFamily: Fonts.bold,
    fontSize: 25,
  },
  textValue: {
    fontFamily: Fonts.normal,
    fontSize: 15,
  },
  svgBlue: {
    backgroundColor: '#0496C7',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    padding: 10,
  },
});
