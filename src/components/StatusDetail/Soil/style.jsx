import {StyleSheet} from 'react-native';
import {Fonts} from '../../../assets/default_styles';
export const styles = StyleSheet.create({
  container: {
    position: 'relative',
    gap:100,
    alignItems:"center",
    flex:1
    
  },
  chart: {
    borderRadius: 30,
    paddingLeft:0,
    // elevation:100
  },
  chartView:{
    flexDirection:"column",
    gap:10,
    alignItems:"center"
  },
  chartText:{
    fontFamily:Fonts.bold,
    fontSize:20,
  }
 
});
