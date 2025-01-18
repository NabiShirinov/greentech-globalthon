import React, {useRef, useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableHighlight,
  Dimensions,
  ActivityIndicator,
} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import SVG_LOCATION from '../../../assets/images/svgs/fieldAdd/fieldadd_location';
import SVG_AREA from '../../../assets/images/svgs/fieldAdd/fieldadd_area';
import SVG_DEVICE from '../../../assets/images/svgs/fieldAdd/fieldadd_device';
import SVG_SUBMIT from '../../../assets/images/svgs/fieldAdd/fieldadd_submit';
import {styles} from './style';
import {Colors} from '../../../assets/default_styles';
import {useThemeContext} from '../../../contexts/ThemeContext';
import { useNavigation } from '@react-navigation/native';
import Toast from 'react-native-toast-message';
const FieldAdd = () => {
  const {theme} = useThemeContext();
  const {width, height} = Dimensions.get('window');
  const [isLoading, setIsLoading] = useState(false);
  const [inputData,setInputData] = useState({
    field:"",
    area:"",
    deviceID:""
  })
  const navigation = useNavigation()
  const [selectedOption, setSelectedOption] = useState('option1');
  const regions = [
    {label: 'Abşeron', value: 'Abşeron'},
    {label: 'Ağcabədi', value: 'Ağcabədi'},
    {label: 'Ağdam', value: 'Ağdam'},
    {label: 'Ağdaş', value: 'Ağdaş'},
    {label: 'Ağstafa', value: 'Ağstafa'},
    {label: 'Ağsu', value: 'Ağsu'},
    {label: 'Astara', value: 'Astara'},
    {label: 'Bakı', value: 'Bakı'},
    {label: 'Balakən', value: 'Balakən'},
    {label: 'Beyləqan', value: 'Beyləqan'},
    {label: 'Bərdə', value: 'Bərdə'},
    {label: 'Biləsuvar', value: 'Biləsuvar'},
    {label: 'Cəbrayıl', value: 'Cəbrayıl'},
    {label: 'Cəlilabad', value: 'Cəlilabad'},
    {label: 'Daşkəsən', value: 'Daşkəsən'},
    {label: 'Dəvəçi', value: 'Dəvəçi'},
    {label: 'Fizuli', value: 'Fizuli'},
    {label: 'Gəncə', value: 'Gəncə'},
    {label: 'Gədəbəy', value: 'Gədəbəy'},
    {label: 'Goranboy', value: 'Goranboy'},
    {label: 'Göyçay', value: 'Göyçay'},
    {label: 'Göygöl', value: 'Göygöl'},
    {label: 'Hacıqabul', value: 'Hacıqabul'},
    {label: 'İmişli', value: 'İmişli'},
    {label: 'İsmayıllı', value: 'İsmayıllı'},
    {label: 'Kəlbəcər', value: 'Kəlbəcər'},
    {label: 'Kürdəmir', value: 'Kürdəmir'},
    {label: 'Qax', value: 'Qax'},
    {label: 'Qazax', value: 'Qazax'},
    {label: 'Qəbələ', value: 'Qəbələ'},
    {label: 'Qobustan', value: 'Qobustan'},
    {label: 'Quba', value: 'Quba'},
    {label: 'Qubadlı', value: 'Qubadlı'},
    {label: 'Qusar', value: 'Qusar'},
    {label: 'Laçın', value: 'Laçın'},
    {label: 'Lerik', value: 'Lerik'},
    {label: 'Lənkəran', value: 'Lənkəran'},
    {label: 'Masallı', value: 'Masallı'},
    {label: 'Mingəçevir', value: 'Mingəçevir'},
    {label: 'Naftalan', value: 'Naftalan'},
    {label: 'Neftçala', value: 'Neftçala'},
    {label: 'Oğuz', value: 'Oğuz'},
    {label: 'Saatlı', value: 'Saatlı'},
    {label: 'Sabirabad', value: 'Sabirabad'},
    {label: 'Salyan', value: 'Salyan'},
    {label: 'Samux', value: 'Samux'},
    {label: 'Sumqayıt', value: 'Sumqayıt'},
    {label: 'Siyəzən', value: 'Siyəzən'},
    {label: 'Şamaxı', value: 'Şamaxı'},
    {label: 'Şəki', value: 'Şəki'},
    {label: 'Şəmkir', value: 'Şəmkir'},
    {label: 'Şirvan', value: 'Şirvan'},
    {label: 'Şuşa', value: 'Şuşa'},
    {label: 'Tərtər', value: 'Tərtər'},
    {label: 'Tovuz', value: 'Tovuz'},
    {label: 'Ucar', value: 'Ucar'},
    {label: 'Xaçmaz', value: 'Xaçmaz'},
    {label: 'Xırdalan', value: 'Xırdalan'},
    {label: 'Xızı', value: 'Xızı'},
    {label: 'Xocalı', value: 'Xocalı'},
    {label: 'Xocavənd', value: 'Xocavənd'},
    {label: 'Xankəndi', value: 'Xankəndi'},
    {label: 'Yardımlı', value: 'Yardımlı'},
    {label: 'Yevlax', value: 'Yevlax'},
    {label: 'Zaqatala', value: 'Zaqatala'},
    {label: 'Zəngilan', value: 'Zəngilan'},
    {label: 'Zərdab', value: 'Zərdab'},
  ];
  const submitPress = ()=>{
    if (!inputData.area.trim() || !inputData.deviceID.trim() || !inputData.deviceID.trim()) {
      Toast.show({
        type: 'error',
        text1: 'All fields are required',
        text2: 'Please try again'
      });
      return;
    }
setIsLoading(true)
setTimeout(() => {
  Toast.show({
    type: 'success',
    text1: 'Succecfully added',
    text2: 'null null'
  });
  setIsLoading(false);
  navigation.navigate('Home')
}, 3000);
  }
  return (
    <View style={[styles.container]}>
      {isLoading && <ActivityIndicator size="large" color={Colors[theme].secondary} style={styles.indicator}/>}
      <View style={[styles.inputArea]}>
        <Text style={[styles.inputAreaText, {color: Colors[theme].black}]}>
          Location of field
        </Text>
        <View style={[styles.input, {backgroundColor: Colors[theme].gray}]}>
          <SVG_LOCATION width={40} height={40} />
          <Picker
            style={styles.inputText}
            selectedValue={selectedOption}
            prompt="Region"
            onValueChange={(itemValue, itemIndex) =>{
              setSelectedOption(itemValue)
              setInputData({...inputData, field: itemValue})
            }
            }>
            {regions.map((item, index) => (
              <Picker.Item
                key={index}
                label={item.label}
                value={item.value}
                style={styles.inputText}
              />
            ))}
          </Picker>
        </View>
      </View>
      <View style={styles.inputArea}>
        <Text style={[styles.inputAreaText, {color: Colors[theme].black}]}>
          Area of field (with hectare){' '}
        </Text>
        <View style={[styles.input, {backgroundColor: Colors[theme].gray}]}>
          <SVG_AREA width={40} height={40} />
          <TextInput style={styles.inputText} placeholder="Area" onChangeText={(text) => setInputData({...inputData, area: text})}/>
        </View>
      </View>
      <View style={styles.inputArea}>
        <Text style={[styles.inputAreaText, {color: Colors[theme].black}]}>
          Device ID number
        </Text>
        <View style={[styles.input, {backgroundColor: Colors[theme].gray}]}>
          <SVG_DEVICE width={40} height={40} />
          <TextInput style={styles.inputText} placeholder="Device ID"onChangeText={(text) => setInputData({...inputData, deviceID: text})} />
        </View>
      </View>
      <View style={styles.submit}>
        <TouchableHighlight onPress={submitPress} underlayColor={'transparent'}>
          <View
            style={[
              styles.submitButton,
              {backgroundColor: Colors[theme].secondary},
            ]}>
            <SVG_SUBMIT width={35} height={35} />
            <Text style={[styles.submitText, {color: Colors[theme].white}]}>
              SUBMIT
            </Text>
          </View>
        </TouchableHighlight>
      </View>
    </View>
  );
};

export default FieldAdd;
