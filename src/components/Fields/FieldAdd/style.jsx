import {StyleSheet} from 'react-native';
import {Colors, Fonts} from '../../../assets/default_styles';
export const styles = StyleSheet.create({
  container: {
    width: '85%',
    flexDirection: 'column',
    height: '100%',
    gap: 20,
    position:"relative",
    flex: 1,
  },
  inputArea: {
    alignItems: 'center',
  },
  inputAreaText: {
    fontSize: 17.5,
    width: '100%',
    fontFamily: Fonts.bold,
    textAlign: 'left',
  },
  input: {
    flexDirection: 'row',
    borderRadius: 10,
    alignItems: 'center',
    gap: 20,
  },
  inputText: {
    width: '80%',
    fontFamily: Fonts.normal,
    fontSize: 15,
  },
  submit: {
    position:"absolute",
    width:"100%",
    alignItems:"center",
    justifyContent:"center",
    bottom:75,
  },
  submitButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
    borderRadius: 10,
    padding: 10,
    margin:"auto",
    backgroundColor:"red",
    width:200,

  },
  submitText: {
    fontSize: 17.5,
    fontFamily: Fonts.bold,
  },
  indicator:{
    position:"absolute",
    height:"100%",
    width:"100%",
    // backgroundColor:"#00000055"
  }
});
