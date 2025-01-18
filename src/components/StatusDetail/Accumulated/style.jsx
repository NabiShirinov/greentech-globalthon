import {StyleSheet} from 'react-native';
import {Fonts} from '../../../assets/default_styles';
export const styles = StyleSheet.create({
  container: {
    position: 'relative',
    flexDirection: 'column',
    flex:1,
    overflow:"hidden",
    width:"100%",
    gap:40,
    
  },
  components:{
    flexDirection:"row",
    flexWrap:"wrap",
    alignItems:"center",
    justifyContent:"space-between",
    width:"90%",
    gap:20,
  }
 
});
