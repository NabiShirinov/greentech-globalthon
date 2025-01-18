import {View, Text, ScrollView} from 'react-native';
import React from 'react';
import FieldAll from '../../../components/Fields/FieldAll/FieldAll';
import MainHeader from '../../../layouts/header/MainHeader';
import {styles} from './styles';
import {useThemeContext} from '../../../contexts/ThemeContext';
import {Colors} from '../../../assets/default_styles';
import {DATA_gardens} from '../../../../api/gardens';
import Zone from '../../../components/Zone/Zone';

const FieldAll_Screen = () => {
  const {theme} = useThemeContext();
  const datas = DATA_gardens;
  return (
    <ScrollView>
      <View style={[styles.container,{backgroundColor: Colors[theme].backgroundColor}]}>
        <MainHeader name={'All Fields'} />
        <FieldAll />

        {/* <View style={{paddingHorizontal:20,position:"relative", flexDirection:"column", gap:20,paddingBottom:140,}}>
          {datas.map((item, index) => (
            <Zone data={item} key={index} />
          ))}
        </View> */}
      </View>
    </ScrollView>
  );
};

export default FieldAll_Screen;
