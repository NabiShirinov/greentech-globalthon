import {StyleSheet} from 'react-native';
import { Fonts } from '../../assets/default_styles';
export const styles = StyleSheet.create({
    container:{
        position:"absolute",
        width:"100%",
        height:"100%",
        zIndex:1000,
        alignItems:"flex-end",
        flexDirection:"row",
        backgroundColor:"#00000050",
        zIndex:1000,
    },
    notifications:{
        paddingVertical:10,
        flexDirection:"column",
        alignItems:"center",
        gap:25,
        zIndex:1000,
    }
})