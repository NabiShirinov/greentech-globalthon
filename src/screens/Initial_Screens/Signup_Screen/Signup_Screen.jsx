import {View, Text, TextInput, TouchableHighlight, ScrollView} from 'react-native';
import React, {useState} from 'react';
import {styles} from './styles';
import CheckBox from '@react-native-community/checkbox';
import GoogleSvg from '../../../assets/images/svgs/google.svg';
import AppleSvg from '../../../assets/images/svgs/apple.svg';
import EyeOpen from '../../../assets/images/svgs/eye_open.svg';
import CloseEye from '../../../assets/images/svgs/eye_close.svg';
import { Colors } from '../../../assets/default_styles';
import { useThemeContext } from '../../../contexts/ThemeContext';
const Signup_Screen = ({navigation}) => {
  const [showPassword, setshowPassword] = useState(true);
  const {theme}= useThemeContext()
  const [inputDatas, setinputDatas] = useState({
    email: '',
    password: '',
  });
  const handleEmailChange = text => {
    setinputDatas(prevData => ({
      ...prevData,
      email: text.toLowerCase(),
    }));
  };
  const handlePaswdChange = text => {
    setinputDatas(prevData => ({
      ...prevData,
      password: text,
    }));
  };
  const handleCheckboxChange = value => {
    setinputDatas(prevData => ({
      ...prevData,
      remember: value,
    }));
  };
  const HideShowPassword = value => {
    // setshowPassword(!showPassword);
    return showPassword ? (
      <TouchableHighlight
        style={styles.hideshowPassword}
        underlayColor="transparent"
        onPress={() => {
          setshowPassword(false);
        }}>
        <EyeOpen />
      </TouchableHighlight>
    ) : (
      <TouchableHighlight
        style={styles.hideshowPassword}
        underlayColor="transparent"
        onPress={() => {
          setshowPassword(true);
        }}>
        <CloseEye />
      </TouchableHighlight>
    );
  };
  return (
    <ScrollView style={[styles.main,{backgroundColor:Colors[theme].white}]}>
      <Text style={[styles.mainText,{color:Colors[theme].black}]}>Sign up</Text>

      <View style={styles.inputArea}>
        <View style={styles.input}>
          <Text style={[styles.inputText,{color:Colors[theme].black}]}>Email</Text>
          <TextInput
            style={[styles.inputTextInput,{color:Colors[theme].black,backgroundColor:Colors[theme].tertiary}]}
            value={inputDatas.email}
            cursorColor={"#732BAC"}
            onChangeText={handleEmailChange}
            keyboardType="email-address"
            inputMode="email"
          />
        </View>
        <View style={styles.input}>
          <Text style={[styles.inputText,{color:Colors[theme].black}]}>Password</Text>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <TextInput
              style={[styles.inputTextInput,{color:Colors[theme].black,backgroundColor:Colors[theme].tertiary}]}
              value={inputDatas.password}
              cursorColor={"#732BAC"}
              onChangeText={handlePaswdChange}
              secureTextEntry={showPassword}
            />
            {HideShowPassword()}
          </View>
        </View>
      </View>
      <View style={styles.inputArea}>
        <Text style={[styles.or,{color:Colors[theme].black}]}>or</Text>
        <TouchableHighlight style={[styles.inputTextInput,{color:Colors[theme].black,backgroundColor:Colors[theme].tertiary}]}>
          <View style={{flexDirection: 'row', alignItems: 'center', gap: 12}}>
            <GoogleSvg width={30} height={30} />
            <Text style={[styles.continueWith,{color:Colors[theme].black}]}>Continue with Google</Text>
          </View>
        </TouchableHighlight>
        <TouchableHighlight style={[styles.inputTextInput,{color:Colors[theme].black,backgroundColor:Colors[theme].tertiary}]}>
          <View style={{flexDirection: 'row', alignItems: 'center', gap: 12}}>
            <AppleSvg width={30} height={30} />
            <Text style={[styles.continueWith,{color:Colors[theme].black}]}>Continue with Apple</Text>
          </View>
        </TouchableHighlight>
      </View>

      <View style={styles.inputArea}>
        <TouchableHighlight>
          <Text style={[styles.confirm,{color:Colors[theme].white,backgroundColor:Colors[theme].secondary}]}>Continue</Text>
        </TouchableHighlight>

        <View style={styles.goTo}>
          <Text style={[styles.goToText,{color:Colors[theme].black}]}>Already have an account?</Text>
          <TouchableHighlight onPress={()=>navigation.goBack()} underlayColor={"transparent"}>
            <Text style={[styles.goToText, styles.goToLogin,{color:Colors[theme].secondary}]}>Log in</Text>
          </TouchableHighlight>
        </View>
      </View>
    </ScrollView>
  );
};

export default Signup_Screen;
