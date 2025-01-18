import {StyleSheet} from 'react-native';
import {Colors, Fonts} from '../../../assets/default_styles';
export const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 30,
    paddingVertical: 20,
  },
  headerText: {
    width: '70%',
  },
  text: {
    fontFamily: Fonts.bold,
    fontSize: 40,
  },
  text2: {
    fontFamily: Fonts.thin,
    fontSize: 20,
  },
  weather: {
    width: '25%',
    // minWidth:40,
    height: 120,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 20,
    borderRadius: 20,
  },
  hl: {
    fontFamily: Fonts.bold,
    fontSize: 40,
  },
  status: {
    height: 100,
    borderRadius: 20,
    flexDirection: 'row',
    justifyContent:"space-between",
    alignItems:"center",
    paddingHorizontal:20,
    marginHorizontal:30,
  },
  statusHalf: {
    height: 100,
    width:"47.5%",
    borderRadius: 20,
    flexDirection: 'row',
    justifyContent:"space-between",
    alignItems:"center",
    paddingHorizontal:10,
  },
  statusTri: {
    height: 150,
    width:"30%",
    borderRadius: 20,
    flexDirection: 'column-reverse',
    justifyContent:"space-between",
    alignItems:"center",
    paddingHorizontal:10,
    paddingVertical:30,
  },
  text1: {
    fontSize: 30,
    fontFamily: Fonts.bold,
    textAlign:"center"
  },
  text2: {
    fontSize: 20,
    fontFamily: Fonts.thin,
    textAlign:"center"
  },
  text1Half:{
    fontSize: 17.5,
    fontFamily: Fonts.bold,
    textAlign:"center"
  },
  svg: {
    backgroundColor: '#49A010',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius:10,
    padding:10,
  },
  svgRed:{
    backgroundColor: '#ff2400',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius:10,
    padding:10,
  },
  svgBlue:{
    backgroundColor: '#0496C7',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius:10,
    padding:10,
  }
});
