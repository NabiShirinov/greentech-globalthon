import {StyleSheet} from 'react-native';
import {Colors, Fonts} from '../assets/default_styles';
export const Init_Routes_Styles = StyleSheet.create({});
export const Main_Routes_Styles = StyleSheet.create({
  overlay: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 25, // Tab çubuğunun altındaki alanın yüksekliği
    backgroundColor: 'transparent',
    zIndex:50,
  },
  tab: {
    position: 'absolute',
    bottom: 25,
    left: 20,
    right: 20,
    borderRadius: 15,
    height: 90,
    elevation: 50,
    borderWidth:0,   
    backgroundColor: 'transparent',  
    zIndex:50,
    
  },
  tabBar: {
    alignItems: 'center',
    justifyContent: 'space-around',
    top: 5,
  },
  tabBarFocus: {
    bottom: 3,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  tabText: {
    // color: Colors.black,
    fontFamily: Fonts.normal,
  },
  tabTextFocus: {
    // color: Colors.secondary,
    fontFamily: Fonts.normal,
  },
});
