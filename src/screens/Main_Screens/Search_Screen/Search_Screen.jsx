import { View, Text } from 'react-native'
import React from 'react'
import MainHeader from '../../../layouts/header/MainHeader'
import Search from '../../../components/Search/Search'
import { styles } from './styles'
import { useThemeContext } from '../../../contexts/ThemeContext'
import { Colors } from '../../../assets/default_styles'
const Search_Screen = () => {
  const {theme} = useThemeContext()
  return (
    <View style={[styles.container,{backgroundColor:Colors[theme].backgroundColor}]}>
      <MainHeader name={"Search"} back={"Home"}/>
      <Search/>
    </View>
  )
}

export default Search_Screen