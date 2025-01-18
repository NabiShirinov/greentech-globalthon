import {StyleSheet} from 'react-native';
import {Colors, Fonts} from '../../../assets/default_styles';
export const styles = StyleSheet.create({
    container:{
        // backgroundColor:Colors.backgroundColor,
        flex:1,
        paddingBottom:100
    },
    item:{
        flexDirection:"row",
        justifyContent:"flex-start",
        alignItems:"center",
        paddingVertical:10,
        paddingHorizontal:25,
        gap:15,
        position:"relative"
    },
    itemSvg:{
        // backgroundColor:Colors.white,
        padding:10,
        borderRadius:10
    },
    itemName:{
        // color:Colors.black,
        fontFamily:Fonts.normal,
        fontSize:18
    },
    navSvg:{
        position:"absolute",
        right:25,
    }
})