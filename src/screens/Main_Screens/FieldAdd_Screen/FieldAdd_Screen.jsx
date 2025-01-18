import {View, Text, ScrollView} from 'react-native';
import React from 'react';
import FieldAll from '../../../components/Fields/FieldAll/FieldAll';
import MainHeader from '../../../layouts/header/MainHeader';
import {styles} from './styles';
import {useThemeContext} from '../../../contexts/ThemeContext';
import {Colors} from '../../../assets/default_styles';
import {DATA_gardens} from '../../../../api/gardens';
import Zone from '../../../components/Zone/Zone';
import FieldAdd from '../../../components/Fields/FieldAdd/FieldAdd';

const FieldAdd_Screen = () => {
  const {theme} = useThemeContext();
  const datas = DATA_gardens;
  return (
      <View style={[styles.container,{backgroundColor: Colors[theme].backgroundColor}]}>
        <MainHeader name={'Add field'} back={"Home"} />
        <FieldAdd/>
      </View>
  );
};

export default FieldAdd_Screen;

{/* <View style={{paddingHorizontal:20,position:"relative", flexDirection:"column", gap:20,paddingBottom:140,}}>
  {datas.map((item, index) => (
    <Zone data={item} key={index} />
  ))}
</View> */}