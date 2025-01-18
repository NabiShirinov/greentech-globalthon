import {View, Text, ImageBackground, TouchableHighlight} from 'react-native';
import React from 'react';
import {styles} from './style';
import {Colors} from '../../assets/default_styles';
import {useThemeContext} from '../../contexts/ThemeContext';
import SVG_NOTF from "../../assets/images/svgs/notification.svg"
import SVG_SETS from "../../assets/images/svgs/settings.svg"
import { useNavigation } from '@react-navigation/native';
const Zone = ({data}) => {
    const navigation = useNavigation()
  const {theme} = useThemeContext();
  return (
    <TouchableHighlight onPress={()=>{navigation.navigate('FieldDetail', {fieldId: data.id})}} underlayColor={"transparent"}>
      <ImageBackground
        source={data.img}
        style={[styles.main, {backgroundColor: Colors[theme].black}]}>
        <View style={styles.buttons}>
            <TouchableHighlight style={{backgroundColor:"red",padding:11, borderRadius:11,}} onPress={()=>{}}><SVG_NOTF width={40} height={40}/></TouchableHighlight>
            <TouchableHighlight style={{backgroundColor:"#0496C7",padding:11, borderRadius:11,}} onPress={()=>{}}><SVG_SETS width={40} height={40}/></TouchableHighlight>
        </View>
        <View style={[styles.about, {backgroundColor: Colors[theme].white}]}>
          <Text style={[styles.name, {color: Colors[theme].black}]}>{data.name}</Text>
          <View style={{flexDirection:"row", gap:40,}}>
            <View style={styles.details}>
              <Text style={[styles.textName,{color:Colors[theme].black}]}>Watering</Text>
              <Text style={[styles.textName,{color:Colors[theme].black}]}>Cycle & Soak</Text>
              <Text style={[styles.textName,{color:Colors[theme].black}]}>Zone</Text>
            </View>
            <View style={styles.details}>
              <Text style={[styles.textDesc,{color:Colors[theme].gray}]}>{data.note}</Text>
              <Text style={[styles.textDesc,{color:Colors[theme].gray}]}>{data.note2}</Text>
              <Text style={[styles.textDesc,{color:Colors[theme].gray}]}>{data.id}</Text>
            </View>
          </View>
        </View>
      </ImageBackground>
    </TouchableHighlight>
  );
};

export default Zone;
