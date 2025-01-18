import {StyleSheet} from 'react-native';
import {Colors, Fonts} from '../../assets/default_styles';
export const styles = StyleSheet.create({
    main_left:{
        width:"100%",
        flexDirection:"row",
        justifyContent:"center",
        alignItems:"center",
        paddingTop:25,
        paddingBottom:15,
        position:"relative",
    },
    main_next:{
        width:"100%",
        flexDirection:"row",
        justifyContent:"start",
        alignItems:"center",
        paddingTop:25,
        paddingBottom:15,
        position:"relative",
    },
    goBack:{
        position:"absolute",
        left:10,
        padding:20,
        paddingBottom:25,
        
    },
    goNext:{
        right:10,
        padding:20,
        paddingBottom:25,
        
    },
    main:{
        width:"100%",
        justifyContent:"center",
        alignItems:"center",
        paddingTop:25,
        paddingBottom:15,
    },
    text:{
        fontFamily:Fonts.bold,
        // color:Colors.black,
        fontSize:32
    }
})