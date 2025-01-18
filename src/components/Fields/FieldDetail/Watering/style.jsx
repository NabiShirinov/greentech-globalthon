import { StyleSheet } from 'react-native';
import { Fonts } from '../../../../assets/default_styles';
export const styles = StyleSheet.create({
    container:{
        width:"100%",
        position:"relative",
        flexDirection:"column",
        // minHeight:300,
        // paddingVertical:30,
        // elevation:2,
        // paddingBottom:30,
    },
    header:{
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
        width:"100%",
        height:"auto",
        paddingHorizontal:30,
        paddingVertical:10,
    },
    headerName:{
        fontSize:22.5,
        fontFamily:Fonts.bold,
        width:"100%",
        textAlign:"center"
    },
    headerText:{
        fontSize:17.5,
        fontFamily:Fonts.bold,
    },
    datas:{
        width:"100%",
        position:"relative",
        flexDirection:"column",
        alignItems:"center",
        justifyContent:"center",
    },
    data:{
        width:"90%",
        borderRadius:20,
        paddingHorizontal:15,
        paddingVertical:5,
        alignItems:"center",
        justifyContent:"space-between",
        flexDirection:"row",

    },
    dataName:{
        fontFamily:Fonts.bold,
        fontSize:22.5
    },
    data1:{
        fontFamily:Fonts.bold,
        fontSize:15
    },
    data2:{
        fontFamily:Fonts.thin,
        fontSize:15
    },
    svg:{
        borderRadius:35,
        padding:10,
        // marginVertical:10
    }
})