import { StyleSheet } from 'react-native';
import { Colors, Fonts } from '../../../assets/default_styles';
export const styles = StyleSheet.create({
    forYouCard:{
        width:'90%',
        borderRadius: 10,
        flexDirection:'row',
        gap:30,
        position:"relative"
    },
    forYouCardImage:{
        width: "30%",
        height: 100,
        borderRadius: 20,
        overflow: 'hidden',
    },
    forYouCardImg:{
        width: '100%',
        height: '100%',
        objectFit: 'cover'
    },
    forYouCardFilmName:{
        justifyContent:"flex-start",
        flexDirection:"column",
        width:"60%",
        padding:10
    },
    text1:{
        fontFamily: Fonts.bold,
        fontSize: 23,
    },
    text2:{
        fontFamily: Fonts.thin,
        fontSize: 15,
    },

    
})