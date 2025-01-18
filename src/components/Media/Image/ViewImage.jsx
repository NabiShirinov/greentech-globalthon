import { View, Text, Image, TouchableHighlight } from 'react-native'
import React from 'react'
import { styles } from './styles'

const ViewImage = (props) => {
    const imageData = props.image
  return (
    <View style={styles.imgView}>
      <Image style={styles.handledImg} source={{uri: 'file://' + imageData}} />
      <TouchableHighlight
        style={{width: '100%', bottom: 150, alignItems: 'center'}}
        onPress={() => {
          navigation.navigate('Result', {path: imageData});
        }}>
        <Text style={{color: '#000000'}}>Send to analysis</Text>
      </TouchableHighlight>
    </View>
  )
}

export default ViewImage