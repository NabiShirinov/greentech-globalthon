import { View, Text, Dimensions, StyleSheet } from 'react-native'
import React from 'react'
import SVG_PP_MAN from "../../../assets/images/svgs/gardener_man"
import { Colors, Fonts } from '../../../assets/default_styles';
import { useThemeContext } from '../../../contexts/ThemeContext';
const Profile = ({gender}) => {
    const {width} = Dimensions.get('window');
    const {theme} = useThemeContext()
  return (
    <View style={styles.container}>
        <SVG_PP_MAN width={width-100} height={width-100}/>
      <Text style={[styles.text1,{color:Colors[theme].black}]}>Nihad Maharramov</Text>
      {/* <Text style={[styles.text2,{color:Colors[theme].black}]}>nihadishi@gmail.com</Text> */}
    </View>
  )
}

export default Profile

const styles = StyleSheet.create({
    container:{
        width:"100%",
        alignItems:"center",
        justifyContent:"center",
        flexDirection:"column",
        gap:20,
        paddingBottom:20,
        paddingTop:10,
    },
    text1:{
        fontFamily:Fonts.bold,
        fontSize:40
    },
    text2:{
        fontFamily:Fonts.thin,
        fontSize:10
    },
})