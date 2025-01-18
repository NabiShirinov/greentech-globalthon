import {View, Text, Dimensions, ScrollView} from 'react-native';
import React from 'react';
import {styles} from './style';
import {Colors} from '../../../../assets/default_styles';
import Card_Colorful from '../../../Cards/Card_Colorful/Card_Colorful';
import {useThemeContext} from '../../../../contexts/ThemeContext';

const Recommendation = () => {
  const {width} = Dimensions.get('window');
  const heightRatio = 280 / 182;
  cardWidth = width / 2.5;
  cardHeight = cardWidth * heightRatio;
  const {theme} = useThemeContext();
  const cardGap = width / 15;
  const datas = [
    {
      name: 'Scout fields for early insect infestations and control potentially damaging insects',
      status: true,
      color: '#28b67e',
    },
    {
      name: 'Control soil health in every 2 week',
      status: true,
      color: '#bca424',
    },
    {
      name: 'Control soil health in every 2 week',
      status: true,
      color: '#d3dcde',
    },
    {
      name: 'Control soil health in every 2 week',
      status: true,
      color: '#b4ac82',
    },
  ];
  return (
    <View style={[styles.container, {backgroundColor: Colors[theme].white}]}>
      <View style={styles.header}>
        <Text style={[styles.headerName, {color: Colors[theme].black}]}>
          Recommendation
        </Text>
        <Text style={[styles.headerText, {color: Colors[theme].white}]}>
          History
        </Text>
      </View>
      <ScrollView
        horizontal
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}>
        <View
          style={[
            styles.recommendation,
            {marginHorizontal: cardGap, gap: cardGap},
          ]}>
          {datas.map((item, index) => (
            <Card_Colorful data={item} key={index} />
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

export default Recommendation;
