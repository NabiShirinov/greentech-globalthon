import { StyleSheet } from 'react-native';
import { Colors, Fonts } from '../../assets/default_styles';
export const styles = StyleSheet.create({
    container:{
        alignItems:"center",
        flexDirection:"column",
        paddingHorizontal:20,
        // borderRadius:80,
        overflow:"hidden",
    },
    main:{
        height:400,
        width:250,
        borderRadius:20,
        // backgroundColor:"black",
        flexDirection:"column",
        alignItems:"center",
        justifyContent:"space-between",
        paddingVertical:20,
        overflow:"hidden"
    },
    textNote:{
        backgroundColor:"#969696cc",
        width:"auto",
        paddingHorizontal:20,
        paddingVertical:10,
        borderRadius:50
    },
    textName:{
        fontFamily:Fonts.bold,
        fontSize:20,
    },
    switch:{
    }
})