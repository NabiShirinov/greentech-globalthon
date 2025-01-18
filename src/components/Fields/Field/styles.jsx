import {StyleSheet} from 'react-native';
import {Colors, Fonts} from '../../../assets/default_styles';
export const styles = StyleSheet.create({
    container:{
        alignItems:"start",
        justifyContent:"center",
        flexDirection:"column",
        borderRadius:20,
        padding:20,
        gap:10,
        width:"90%",
        
    },
    fields:{
        flexDirection:"row",
        flexWrap:"wrap",
        marginBottom:220,
    },
    addfield:{
        borderRadius: 10,
        alignItems: 'center',
        justifyContent:"center",
        position: 'relative',
        gap:15
    },
    addfieldText:{
        fontFamily:Fonts.normal,
        fontSize:18
    }
})