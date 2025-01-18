import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import MainHeader from '../../../layouts/header/MainHeader'
import { Colors } from '../../../assets/default_styles'

const Language = () => {
  return (
    <View style={styles.container}>
      <MainHeader name={''} back={"Settings"} />
    </View>
  )
}

export default Language

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:Colors.backgroundColor
  },

})