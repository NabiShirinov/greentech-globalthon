import {StyleSheet} from 'react-native';
import { Fonts } from '../../../assets/default_styles';
export const styles = StyleSheet.create({
    container:{
        position:"relative",
        width:"90%"
    },
    notifications:{
        gap:12.5,
    },
    more:{
        paddingTop:15,
        width:"100%",
        justifyContent:"center",
        alignItems:"center",
    },
    moreButton:{
        height:50,
        alignItems:"center",
        justifyContent:"center",
        borderRadius:25,
        width:200,
    },
    moreText:{
        fontFamily:Fonts.bold,
        fontSize:20
    }
})