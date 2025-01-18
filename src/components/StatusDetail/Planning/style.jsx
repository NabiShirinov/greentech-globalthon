import {StyleSheet} from 'react-native';
import {Fonts} from '../../../assets/default_styles';
export const styles = StyleSheet.create({
  container: {
    position: 'relative',
    flexDirection: 'column',
    flex:1,
    overflow:"hidden",
    gap:40,
    
  },
  chart: {
    borderRadius: 30,
    paddingLeft:0,
  },
  text:{
    fontFamily:Fonts.bold,
    fontSize:25,
    width:"100%",
    textAlign:"center",
    marginTop:10
  }
 
});
