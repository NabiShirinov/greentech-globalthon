import {View, Text, Dimensions, TouchableHighlight} from 'react-native';
import React, {useEffect} from 'react';
import CardMini from '../../Cards/CardMini/CardMini';
import {styles} from './styles';
import {Colors} from '../../../assets/default_styles';
import {useThemeContext} from '../../../contexts/ThemeContext';
import SVG_PLUS from '../../../assets/images/svgs/plus.svg';
import {DATA_fields} from '../../../../api/fields';
import {useNavigation} from '@react-navigation/native';
const Field = () => {
  const {width} = Dimensions.get('window');
  const navigation = useNavigation();
  const heightRatio = 280 / 162;
  cardWidth = width / 2.5;
  cardHeight = cardWidth * heightRatio;
  const {theme} = useThemeContext();
  const cardGap = width / 15;
  const datas = DATA_fields;
  return (
    <View style={[styles.fields, {marginHorizontal: cardGap, gap: cardGap}]}>
      {datas.map((item, index) => {
        console.log(index);
        return index === 0 && (<CardMini data={item} key={index} />)
      })}
      <TouchableHighlight
        onPress={() => {
          navigation.navigate('FieldAdd');
        }}
        underlayColor={'transparent'}>
        <View
          style={[
            styles.addfield,
            {
              backgroundColor: Colors[theme].primary,
              width: cardWidth,
              height: cardHeight,
            },
          ]}>
          <SVG_PLUS width={55} height={55} />
          <Text style={[styles.addfieldText, {color: Colors[theme].black}]}>
            Add Field
          </Text>
        </View>
      </TouchableHighlight>
    </View>
  );
};

export default Field;
