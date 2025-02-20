import {StyleSheet} from 'react-native';
import {Fonts} from '../../../assets/default_styles';
export const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    gap: 20,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  fullView: {
    width: '100%',
    height: 200,
    backgroundColor: 'white',
    borderRadius: 30,
    flexDirection: 'column',
    position: 'relative',
    gap: 20,
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  fullView2: {
    width: '100%',
    height: 200,
    justifyContent: 'space-between',
    flexDirection: 'row',
    position: 'relative',
    gap: 20,
  },
  fullViewItems: {
    height: '45%',
    width:"100%",
    position:"relative",
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'white',
    gap: 10,
  },
  fullViewItems2: {
    width: '45%',
    flexDirection: 'column',
    justifyContent: 'space-between',
    gap: 10,
    backgroundColor: 'white',
    paddingHorizontal: 20,
    borderRadius: 30,
    paddingVertical: 20,
    overflow:"hidden"
  },
  texth1: {
    color: 'black',
    fontSize: 50,
    fontFamily: Fonts.bold,
  },
  text: {
    color: 'black',
    fontSize: 17,
    fontFamily: Fonts.bold,
    width: '70%',
  },
  textBig: {
    color: 'black',
    fontSize: 27,
    fontFamily: Fonts.bold,
    width: '70%',
  },
  text2: {
    color: 'black',
    fontSize: 17,
    fontFamily: Fonts.bold,
    width: '70%',
  },
  plusminus: {
    padding: 10,
    paddingHorizontal: 15,
    backgroundColor: 'gray',
    borderRadius: 10,
    fontFamily: Fonts.bold,
    fontSize: 20,
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
