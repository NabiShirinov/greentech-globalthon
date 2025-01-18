import {StyleSheet} from 'react-native';
import {Colors, Fonts} from '../../../assets/default_styles';
export const styles = StyleSheet.create({
    imgView:{
        flex: 1,
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
      },
      handledImg:{
        width: '100%',
        height: '100%',
        transform: [{rotate: '-90deg'}],
      },
})