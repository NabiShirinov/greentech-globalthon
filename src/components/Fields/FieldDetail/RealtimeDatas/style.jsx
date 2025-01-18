import { StyleSheet } from 'react-native';
import { Fonts } from '../../../../assets/default_styles';
export const styles = StyleSheet.create({
    container:{
        borderRadius:30,
        width:"90%",
        position:"relative",
        flexDirection:"column",
        // minHeight:300,
        // paddingVertical:10,
        paddingBottom:30,
        gap:20,
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
    datas:{
        width:"100%",
        position:"relative",
        flexDirection:"row",
        gap:0,
        alignItems:"center",
        justifyContent:"space-between",
    },
    data:{
        borderRadius:10,
        // paddingHorizontal:15,
        paddingVertical:5,
        alignItems:"center",
        justifyContent:"space-between",
        flexDirection:"column",
        elevation:8
    },
    dataName:{
        fontFamily:Fonts.bold,
        fontSize:12.5
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