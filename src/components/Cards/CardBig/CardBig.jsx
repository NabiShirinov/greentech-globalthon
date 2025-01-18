import {View, Text, Image, Dimensions, TouchableHighlight} from 'react-native';
import React from 'react';
import {styles} from './style';
import SIDE_RIGHT from '../../../assets/images/svgs/SIDE_RIGHT.svg';
import {Colors} from '../../../assets/default_styles';
import {useThemeContext} from '../../../contexts/ThemeContext';
import {useNavigation} from '@react-navigation/native';

const CardBig = props => {
  const navigation = useNavigation();
  const {width} = Dimensions.get('window');
  const heightRatio = 280 / 165;
  cardWidth = width - 40;
  cardHeight = cardWidth * heightRatio;
  const {theme} = useThemeContext();
  return (
    <TouchableHighlight
      onPress={() => {
        navigation.navigate('FieldDetail', {fieldId: props.data.id});
      }}
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
            style={[
              styles.cardImg,
              {width: cardWidth / 1.1, height: cardHeight / 1.5},
            ]}
            source={props?.data?.img}
          />
        </View>
        <View style={styles.filmName}>
          <Text style={[styles.filmNameText, {color: Colors[theme].black}]}>
            {props.data && props.data.name}
          </Text>
          <Text style={[styles.moreText, {color: Colors[theme].black}]}>
            {props.data && props.data.region + " ," + props.data.country }
          </Text>
          <Text style={[styles.moreText, {color: Colors[theme].black}]}>
            {props.data && props.data.size}
          </Text>
        </View>
      </View>
    </TouchableHighlight>
  );
};

export default CardBig;
