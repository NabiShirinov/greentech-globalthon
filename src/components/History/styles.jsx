import { StyleSheet } from 'react-native';
import { Colors, Fonts } from '../../assets/default_styles';
export const styles = StyleSheet.create({
    container:{
        width:"100%",
        flexDirection:"row",
        justifyContent:"space-between",
        paddingVertical:12.5,
        paddingHorizontal:30,
    },
    text:{
        fontSize:20,
        fontFamily:Fonts.normal
    }
})