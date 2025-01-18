import { StyleSheet } from 'react-native';
import { Colors, Fonts } from '../../../assets/default_styles';
export const styles = StyleSheet.create({
    forYouCard:{
        width:'90%',
        borderRadius: 10,
        flexDirection:'row',
        gap:10,
        position:"relative",
        marginBottom:12.5,
    },
    forYouCardImage:{
        width: "40%",
        height: 100,
        borderRadius: 10,
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
        fontSize: 15.5,
    },
    text2:{
        fontFamily: Fonts.thin,
        fontSize: 12.5,
    },

    
})