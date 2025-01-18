import { StyleSheet } from 'react-native';
import { Fonts } from '../../../assets/default_styles';
export const styles = StyleSheet.create({
    libraryCard: {
        borderRadius: 10,
        alignItems: 'center',
        position: 'relative',
        gap:15,
    },
    cardImage: {
        borderRadius: 10,
        overflow: 'hidden',
        marginTop: 14
    },
    cardImg: {
        width: '100%',
        height: '100%',
        objectFit: 'cover'
    },
    filmName: {
        width: '80%',
        justifyContent: 'flex-end'
    },
    filmNameText: {
        fontFamily: Fonts.bold,
        fontSize: 17,
    },
    more: {
        width: '80%',
        height: 32,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end',
        position: 'absolute',
        bottom: 8

    },
    moreText: {
        fontFamily: Fonts.normal,
        fontSize: 13,
        marginTop:1,
    }
})