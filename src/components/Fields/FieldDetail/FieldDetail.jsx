import {View, ScrollView} from 'react-native';
import React from 'react';
import {useRoute} from '@react-navigation/native';
import General from './General/General';
import Status from './Status/Status';
import Recommendation from './Recommendation/Recommendation';
import { styles } from './style';
import MainHeader from '../../../layouts/header/MainHeader';
import { DATA_fields } from '../../../../api/fields';
import { Colors } from '../../../assets/default_styles';
import { useThemeContext } from '../../../contexts/ThemeContext';
import Value from './Value/Value';
import Map from './Map/Map';
import Watering from './Watering/Watering';
import RealtimeDatas from './RealtimeDatas/RealtimeDatas';
const FieldDetail = props => {
  const route = useRoute();
  const {theme} = useThemeContext()
  const fieldId = route.params?.fieldId;
  let datas = DATA_fields;
  const filteredData = datas.filter(item => item.id === fieldId);
  datas = filteredData[0];
  return (
    <ScrollView>
      <View style={[styles.container,{backgroundColor:Colors[theme].backgroundColor}]}>
        <MainHeader name={'Detail'} back={'FieldAll'} />
        <General data={datas} fieldId={fieldId}/>
        {/* <Map data={datas} fieldId={fieldId}/> */}
        {/* <Value data={datas} fieldId={fieldId}/> */}
        <Watering data={datas} fieldId={fieldId}/>
        <RealtimeDatas data={datas} fieldId={fieldId}/>
        <Status data={datas} fieldId={fieldId}/>
        <Recommendation data={datas} fieldId={fieldId}/>
      </View>
    </ScrollView>
  );
};

export default FieldDetail;
