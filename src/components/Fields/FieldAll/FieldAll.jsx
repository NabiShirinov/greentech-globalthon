import {
  View,
  Text,
  ScrollView,
  Dimensions,
  TouchableHighlight,
  FlatList,
} from 'react-native';
import React from 'react';
import { styles } from './style';
import SVG_ALLFILMS from '../../../assets/images/svgs/library_allfilms.svg';
import SIDE_RIGHT from '../../../assets/images/svgs/SIDE_RIGHT.svg';
import { Colors } from '../../../assets/default_styles';
import { useThemeContext } from '../../../contexts/ThemeContext';
import { useNavigation } from '@react-navigation/native';
import { DATA_fields } from '../../../../api/fields';
import CardBig from '../../Cards/CardBig/CardBig';
const FieldAll = () => {
  
  const { theme } = useThemeContext();
  const { width } = Dimensions.get('window');
  const datas = DATA_fields;
  return (
    <FlatList
    horizontal
    pagingEnabled
    data={datas}
    style={styles.items}
    keyExtractor={(item, index) => index}
    renderItem={({ item }) => (
      <View style={{ width: width, alignItems:"center"}}>
        <CardBig data={item} />
      </View>
    )}
    contentContainerStyle={styles.libraryCards}
  />
  );
};

export default FieldAll;
