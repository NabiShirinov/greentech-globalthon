import {StyleSheet} from 'react-native';
import {Colors, Fonts} from '../../assets/default_styles';
export const styles = StyleSheet.create({
  container: {
    alignItems: 'start',
    justifyContent: 'center',
    flexDirection: 'column',
    borderRadius: 20,
    padding: 20,
    gap: 10,
    width: '90%',
  },
  main: {
    height: 500,
    width: '100%',
    borderRadius: 20,
    flexDirection: 'column',
    alignItems: 'center',
    overflow: 'hidden',
    position: 'relative',
  },
  about: {
    backgroundColor: 'white',
    height: 200,
    width: '95%',
    position: 'absolute',
    bottom: '2%',
    borderRadius: 20,
    padding: 20,
    gap: 20,
  },
  buttons:{
    flexDirection:"row",
    gap:10,
    width:"100%",
    justifyContent:"flex-end",
    padding:10,
  },
  name: {
    fontSize: 30,
    fontFamily: Fonts.bold,
  },
  textName: {
    fontSize: 20,
    fontFamily:Fonts.bold
  },
  textDesc: {
    fontSize: 19,
    fontFamily:Fonts.thin
  },
});
