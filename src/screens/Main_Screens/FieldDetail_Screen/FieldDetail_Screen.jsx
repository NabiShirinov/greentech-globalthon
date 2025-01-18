import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import FieldDetail from '../../../components/Fields/FieldDetail/FieldDetail'
import FieldControl from '../../../components/Fields/FieldControl/FieldControl'

const FieldDetail_Screen = () => {
  return (
    <ScrollView>
      <FieldDetail/>
      {/* <FieldControl/> */}
    </ScrollView>
  )
}

export default FieldDetail_Screen