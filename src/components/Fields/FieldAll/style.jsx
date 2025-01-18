import { StyleSheet } from 'react-native';
import { Colors, Fonts } from '../../../assets/default_styles';
export const styles = StyleSheet.create({
    library: {
        width: '100%',
        height: 70,
        // backgroundColor: 'red',
        alignItems: 'center',
        justifyContent: 'center'
    },
    libraryText: {
        fontFamily: Fonts.bold,
        fontSize: 20,
        // color: 'black'
    },
    allFilms: {
        width: '92%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems:'center',
        paddingVertical:30
    },
    allFilmsLeft: {
        flexDirection: 'row',
        gap: 20,
        alignItems: 'center'
    },
    allFilmsText: {
        fontFamily: Fonts.normal,
        // color:'black',
        marginTop:5
    },
    recents:{
        width:'92%',
        // backgroundColor:'pink',
        justifyContent:'flex-end',
        paddingBottom:10
    },
    recentsText:{
        // color:Colors.secondary,
        fontFamily:Fonts.normal
    },
    libraryCards:{
        flexDirection:"row",
        // paddingBottom:220,
    },
    items:{
        gap:20,
    }
})