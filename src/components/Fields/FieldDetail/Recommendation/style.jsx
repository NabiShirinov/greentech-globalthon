import { StyleSheet } from 'react-native';
import { Fonts } from '../../../../assets/default_styles';
export const styles = StyleSheet.create({
    container:{
        borderRadius:30,
        width:"90%",
        position:"relative",
        flexDirection:"column",
        // minHeight:300,
        paddingVertical:10,
        paddingBottom:30,
    },
    header:{
        flexDirection:"row",
        justifyContent:"space-between",
        width:"100%",
        height:"auto",
        paddingHorizontal:30,
        paddingVertical:10,
    },
    headerName:{
        fontSize:22.5,
        fontFamily:Fonts.bold,
    },
    headerText:{
        fontSize:17.5,
        fontFamily:Fonts.bold,
    },
    recommendation:{
            flexDirection:"row",
            // flexWrap:"wrap",
    }
})