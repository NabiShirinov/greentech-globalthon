import { StyleSheet } from 'react-native';
import { Fonts } from '../../../../assets/default_styles';
export const styles = StyleSheet.create({
    container:{
        borderRadius:30,
        width:"90%",
        // alignItems:"center",
        position:"relative",
        flexDirection:"row",
        // backgroundColor:"blue"
    },
    svgProduct:{
        // position:"absolute",
        // left:"25%",
        // top:"30%",
        // zIndex:100,
    },
    chart:{
        borderRadius:30,
    },
    internalData:{
        position:"absolute",
        zIndex:100,
        alignItems:"center",
        justifyContent:"center",
        width:"100%",
        left:"25%",
        top:"25%"
    },
    textName:{
        fontFamily:Fonts.bold,
        fontSize:25
    },
    textDesc:{
        fontFamily:Fonts.normal,
        fontSize:17.5
    }
})