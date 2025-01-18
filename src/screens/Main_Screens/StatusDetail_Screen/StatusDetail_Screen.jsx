import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import MainHeader from '../../../layouts/header/MainHeader'
import { styles } from './styles'
import { useThemeContext } from '../../../contexts/ThemeContext'
import { Colors } from '../../../assets/default_styles'
import { useRoute } from '@react-navigation/native'
import StatusDetail from '../../../components/StatusDetail/StatusDetail'

const StatusDetail_Screen = () => {
  const route = useRoute();
  const {theme} = useThemeContext()
  const id = route.params?.id;
  const fieldId = route.params?.fieldId;
  const statusName = route.params?.name;
  return (
  <ScrollView>
      <View style={[styles.container,{backgroundColor:Colors[theme].backgroundColor}]}>
      <MainHeader name={statusName} back={'FieldDetail'} backParams={{fieldId:fieldId}}/>
      <StatusDetail id={id} fieldId={fieldId}/>
    </View>
  </ScrollView>
  )
}

export default StatusDetail_Screen