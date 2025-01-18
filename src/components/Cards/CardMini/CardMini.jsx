import {View, Text, Image, Dimensions, TouchableHighlight} from 'react-native';
import React from 'react';
import {styles} from './style';
import SIDE_RIGHT from '../../../assets/images/svgs/SIDE_RIGHT.svg';
import {Colors} from '../../../assets/default_styles';
import {useThemeContext} from '../../../contexts/ThemeContext';
import { useNavigation } from '@react-navigation/native';

const CardMini = (props) => {
  const {width} = Dimensions.get('window');
  const navigation = useNavigation();
  const heightRatio = 280 / 162;
  cardWidth = width / 2.5;
  cardHeight = cardWidth * heightRatio;
  const {theme} = useThemeContext();
  return (
    <TouchableHighlight
      onPress={() => {navigation.navigate('FieldDetail', {fieldId: props.data.id});}}
      underlayColor={Colors[theme].backgroundColor}>
      <View
        style={[
          styles.libraryCard,
          {
            backgroundColor: Colors[theme].primary,
            width: cardWidth,
            height: cardHeight,
          },
        ]}>
        <View style={styles.cardImage}>
          <Image
            style={styles.cardImg}
            source={props?.data?.img}
          />
        </View>
        <View style={styles.filmName}>
          <Text style={[styles.filmNameText, {color: Colors[theme].black}]}>
            {props.data && props.data.name }
          </Text>
          <Text style={[styles.moreText, {color: Colors[theme].black}]}>
            {props.data && props.data.region}
          </Text>
          <Text style={[styles.moreText, {color: Colors[theme].black}]}>
            {props.data && props.data.size}
          </Text>
          <Text style={[styles.moreText, {color: Colors[theme].black}]}>
            id - {props.data && props.data.id}
          </Text>
        </View>
      </View>
    </TouchableHighlight>
  );
};

export default CardMini;
