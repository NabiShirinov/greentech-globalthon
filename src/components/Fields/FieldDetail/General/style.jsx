import {StyleSheet} from 'react-native';
import {Fonts} from '../../../../assets/default_styles';
export const styles = StyleSheet.create({
  container: {
    borderRadius: 30,
    width: '90%',
    // alignItems:"center",
    position: 'relative',
    flexDirection: 'row',
    // backgroundColor:"blue",
    overflow:"hidden"
  },
  svgProduct: {
    // position:"absolute",
    // left:"25%",
    // top:"30%",
    // zIndex:100,
  },
  chart: {
    borderRadius: 30,
    paddingLeft:0,
    right:50,
  },
  internalData: {
    position: 'absolute',
    zIndex: 100,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    top: '25%',
  },
  textName: {
    fontFamily: Fonts.bold,
    fontSize: 25,
  },
  textDesc: {
    fontFamily: Fonts.normal,
    fontSize: 17.5,
  },
  exData:{
    position:"absolute",
    flexDirection:"column",
    gap:10,
    right:"3%",
    top:'10%',
    zIndex:105
  },
  exTexts: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent:"space-between",
    gap:10,
    borderBottomWidth:1
  },
  exTextName: {
    fontSize: 16.5,
    fontFamily: Fonts.bold,
  },
  exTextValue: {
    fontSize: 15.5,
    fontFamily: Fonts.normal,
  },
});
