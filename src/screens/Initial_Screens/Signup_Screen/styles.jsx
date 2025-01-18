import {StyleSheet} from 'react-native';
import {Colors, Fonts} from '../../../assets/default_styles';
export const styles = StyleSheet.create({
  main: {
    flex: 1,
    // backgroundColor: Colors.white,
    paddingTop: 29,
    width: '100%',
    minHeight: 400,
    height: '100%',
    flexDirection: 'column',
  },
  mainText: {
    fontSize: 30,
    marginTop:24,
    textAlign: 'center',
    fontFamily: Fonts.bold,
    // color: Colors.black,
  },
  inputArea: {
    marginHorizontal: 18,
    gap: 18,
    marginTop: 24,
  },
  input: {
    gap: 6,
  },
  inputText: {
    // color: Colors.black,
    fontFamily: Fonts.normal,
    fontSize: 18,
    paddingLeft: 5,
  },
  inputTextInput: {
    borderRadius: 12,
    // color: Colors.black,
    // backgroundColor: Colors.tertiary,
    paddingLeft: 10,
    width: '100%',
    height: 52,
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: Fonts.thin,
  },
  hideshowPassword: {
    left: -40,
  },
  or: {
    // color: Colors.black,
    textAlign: 'center',
    textAlignVertical: 'center',
    fontSize: 18,
    fontFamily: Fonts.normal,
  },
  continueWith: {
    // color: Colors.black,
    fontSize: 18,
    fontFamily: Fonts.normal,
    textAlignVertical: 'center',
    textAlign: 'center',
    paddingTop: 5,
  },
  confirm: {
    marginTop: 24,
    borderRadius: 12,
    // color: Colors.white,
    // backgroundColor: Colors.secondary,
    fontFamily: Fonts.bold,
    fontSize: 18,
    height: 52,
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    textAlignVertical: 'center',
  },
  goTo: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 9,
    marginTop: 18,
  },
  goToText: {
    // color: Colors.black,
    fontSize: 18,
    textAlign: 'center',
    fontFamily: Fonts.thin,
  },
  goToLogin: {
    // color: Colors.secondary,
    fontFamily: Fonts.bold,
  },
});
