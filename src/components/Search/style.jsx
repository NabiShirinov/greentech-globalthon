import { StyleSheet } from 'react-native';
import { Colors, Fonts } from '../../assets/default_styles';
export const styles = StyleSheet.create({
    searchMain: {
        position:'relative',
        alignItems:'center',
        width:"80%"
    },
    input: {
        // position:'relative',
        width: 382,
        height: 48,
        borderRadius: 10,
        borderWidth: 0,
        // padding: 10,
        paddingHorizontal: 50,
        fontSize: 16,
        width:"100%"
    },
    button: {
        width: 160,
        height: 48,
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop:40,
        
    },
    buttonText: {
        fontFamily: Fonts.normal,
        fontSize:18
    }
})