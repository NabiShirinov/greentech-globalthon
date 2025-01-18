import {StyleSheet} from 'react-native';
import {Colors, Fonts} from '../../../assets/default_styles';
export const styles = StyleSheet.create({
    container:{
        alignItems:"center",
        justifyContent:"center",
        flex:1,
        gap:20,
        //backgroundColor:Colors.backgroundColor
    },
    taptofind:{
        //backgroundColor:Colors.secondary,
        width:300,
        height:300,
        borderRadius:150,
        alignItems:"center",
        justifyContent:"center",
        boxShadow: 'rgba(0, 0, 0, 0.4) 0 3px 7px inset',
        transform: [{ translateY: 2 }],
    },
    taptofindText:{
        fontFamily:Fonts.normal,
        fontSize:30,
    },
    search:{
        position:"absolute",
        left:10,
        top:10,
        padding:20
    }
})