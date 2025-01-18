import {
  View,
  Text,
  ScrollView,
  Dimensions,
  Image,
  TouchableHighlight,
} from 'react-native';
import React from 'react';
import {styles} from './style';
import {Colors} from '../../../assets/default_styles';
import {useThemeContext} from '../../../contexts/ThemeContext';

const CardNormal = (props) => {
  const {theme} = useThemeContext();

  const {width} = Dimensions.get('window');
  const heightRatio = 317 / 150;
  cardWidth = width / 2.5;
  cardHeight = cardWidth * heightRatio;
  const cardGap = width / 15;
  return (
    <TouchableHighlight
      onPress={() => {}}
      underlayColor={Colors[theme].backgroundColor}>
      <View
        style={[
          styles.forYouCard,
          {backgroundColor: Colors[theme].backgroundColor},
        ]}>
        <View style={styles.forYouCardImage}>
          <Image
            style={styles.forYouCardImg}
            source={props?.data?.img}
          />
        </View>
        <View style={styles.forYouCardFilmName}>
          <Text
            style={[
              styles.text1,
              {color: Colors[theme].black},
            ]}>
            {props && props.data.name}
          </Text>
          <Text
            style={[
              styles.text2,
              {color: Colors[theme].black},
            ]}>
            {props && props.data.desc}
          </Text>
        </View>
      </View>
    </TouchableHighlight>
  );
};

export default CardNormal;
