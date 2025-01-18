import { View, Text, TextInput, TouchableHighlight } from 'react-native'
import React from 'react'
import { styles } from './style'
import { Colors } from '../../assets/default_styles'
import { useThemeContext } from '../../contexts/ThemeContext'
import SVG_SEARCH from '../../assets/images/svgs/search.svg';
import History from '../History/History'


const Search = () => {
    const { theme } = useThemeContext();
    const array = ["Ağsu","Lənkəran", "Xırdalan"];
    return (
        <View style={[styles.searchMain, { backgroundColor: Colors[theme].backgroundColor }]}>
            <TextInput placeholder='Search' placeholderTextColor="#808080" style={[styles.input, { backgroundColor: Colors[theme].primary }]}></TextInput>
            <SVG_SEARCH style={{ position: 'absolute', top: 12, left: 15 }} />
            {
                array.map((item,index)=>(
                    <History key={index} data={item}/>
                ))
            }
            <TouchableHighlight style={[styles.button, { backgroundColor: Colors[theme].secondary }]}>
                <Text style={[styles.buttonText, { color: Colors[theme].white }]}>Clear</Text>
            </TouchableHighlight>
        </View>
    )
}

export default Search