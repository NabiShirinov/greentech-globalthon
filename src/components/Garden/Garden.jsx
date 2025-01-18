import {
  View,
  Text,
  Switch,
  ImageBackground,
  Image,
  TouchableHighlight,
} from 'react-native';
import React, {useState} from 'react';
import {useThemeContext} from '../../contexts/ThemeContext';
import {Colors} from '../../assets/default_styles';
import {styles} from './style';

const Garden = ({data}) => {
  console.log(data);
  const {theme} = useThemeContext();
  const [switchValue, setSwitchValue] = useState(data.state);
  const toggleSwitch = () => {
    setSwitchValue(!switchValue);
  };
  return (
    <TouchableHighlight onPress={()=>{}} underlayColor={"transparent"}>
      <View style={styles.container}>
        <ImageBackground
          source={data.img}
          style={[styles.main, {backgroundColor: Colors[theme].black}]}>
          <Text style={[styles.textNote, {color: Colors[theme].white}]}>
            {data.note}
          </Text>
          <Switch
            trackColor={{false: '#444444', true: '#444444'}}
            thumbColor={switchValue ? "#0496C7" : '#f4f3f4'}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch}
            value={switchValue}
            style={[styles.switch, { transform: [{ scaleX: 1.5 }, { scaleY: 1.5 }] }]}
          />
        </ImageBackground>
        <Text style={[styles.textName, {color: Colors[theme].black}]}>
          {data.name}
        </Text>
      </View>
    </TouchableHighlight>
  );
};

export default Garden;
