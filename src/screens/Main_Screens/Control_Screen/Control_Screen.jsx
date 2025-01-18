import {
  View,
  Text,
  ActivityIndicator,
  FlatList,
  Dimensions,
  ScrollView,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import MainHeader from '../../../layouts/header/MainHeader';
import {styles} from './styles';
import {useThemeContext} from '../../../contexts/ThemeContext';
import {Colors} from '../../../assets/default_styles';
import axios from 'axios';
import {Image, Svg} from 'react-native-svg';
import Garden from '../../../components/Garden/Garden';
import {DATA_gardens} from '../../../../api/gardens';
import SVG_MARK from '../../../assets/images/svgs/zone/status_mark_ok_white.svg';
import SVG_RAIN from '../../../assets/images/svgs/zone/status_rain_white';
import SVG_WIND from '../../../assets/images/svgs/zone/status_wind_white';
import SVG_FLOW from '../../../assets/images/svgs/zone/status_timer_white';
import SVG_DROP from '../../../assets/images/svgs/zone/status_waterdrop';
import Weather from '../../../components/Weather/Weather';
const Control_Screen = () => {
  const {theme} = useThemeContext();
  const {width} = Dimensions.get('window');
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);
  const datas = DATA_gardens;
  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const apiKey = '5c7233f6c40a900741497be9e9200152';
        const lat = '40.409264';
        const lon = '49.867092';
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`,
        );
        setWeather(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching weather data:', error);
        setLoading(false);
      }
    };

    fetchWeather();
  }, []);
  if (loading) {
    return (
      <View
        style={[
          styles.container,
          {backgroundColor: Colors[theme].backgroundColor},
        ]}>
        <ActivityIndicator size="large" color={Colors[theme].secondary} />
      </View>
    );
  }
  return (
    <ScrollView>
      <View style={{backgroundColor: Colors[theme].backgroundColor,paddingBottom:140,}}>
        <View style={styles.header}>
          <View style={styles.headerText}>
            <Text style={[styles.text, {color: Colors[theme].black}]}>
              Good morning!
            </Text>
            <Text style={[styles.text2, {color: Colors[theme].black}]}>
              {weather.name}, Azerbaijan
            </Text>
          </View>
          <View
            style={[styles.weather, {backgroundColor: Colors[theme].white}]}>
            <Svg width="100" height="100">
              <Text
                style={[
                  styles.hl,
                  {
                    color: Colors[theme].black,
                    fontSize: 20,
                    textAlign: 'center',
                  },
                ]}>
                {(weather.main.temp - 273.15).toFixed(0)} °C
              </Text>
              <Image
                // style={styles.image}
                width="100"
                height="100"
                href={{
                  uri: `http://openweathermap.org/img/w/${weather.weather[0].icon}.png`,
                }}
              />
            </Svg>
          </View>
        </View>
        <View style={{flexDirection: 'column', gap: 25}}>
          {/* <Garden/> */}
          <FlatList
            horizontal
            // pagingEnabled
            data={datas}
            keyExtractor={(item, index) => index}
            renderItem={({item}) => <Garden data={item} />}
          />
          <View style={[styles.status, {backgroundColor: Colors[theme].white}]}>
            <View style={{alignItems: 'center', justifyContent: 'center'}}>
              <Text style={[styles.text1, {color: Colors[theme].black}]}>
                {' '}
                Controller status
              </Text>
              <Text style={[styles.text2, {color: Colors[theme].black}]}>
                All zones are ready
              </Text>
            </View>
            <View style={styles.svg}>
              <SVG_MARK width={35} height={35} />
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              position: 'relative',
              justifyContent: 'space-between',
              paddingHorizontal: 30,
            }}>
            <View
              style={[
                styles.statusHalf,
                {backgroundColor: Colors[theme].white},
              ]}>
              <View style={{alignItems: 'center', justifyContent: 'center'}}>
                <Text style={[styles.text1Half, {color: Colors[theme].black}]}>
                  Rain sensor
                </Text>
              </View>
              <View style={styles.svgRed}>
                <SVG_RAIN width={35} height={35} />
              </View>
            </View>
            <View
              style={[
                styles.statusHalf,
                {backgroundColor: Colors[theme].white},
              ]}>
              <View style={{alignItems: 'center', justifyContent: 'center'}}>
                <Text style={[styles.text1Half, {color: Colors[theme].black}]}>
                  Flow meter
                </Text>
              </View>
              <View style={styles.svg}>
                <SVG_FLOW width={35} height={35} />
              </View>
            </View>
          </View>
          <View style={{width:"100%", alignItems:"center"}}>
          <Weather info={false}/>
          </View>

          <View
            style={{
              flexDirection: 'row',
              position: 'relative',
              justifyContent: 'space-between',
              paddingHorizontal: 30,
            }}>
            <View
              style={[
                styles.statusTri,
                {backgroundColor: Colors[theme].white},
              ]}>
              <View style={{alignItems: 'center', justifyContent: 'center'}}>
                <Text style={[styles.text1Half, {color: Colors[theme].black}]}>
                  Wind speed
                </Text>
                <Text style={[styles.text1Half, {color: Colors[theme].black}]}>
                  {weather.wind.speed} m/s
                </Text>
              </View>
              <View style={styles.svgBlue}>
                <SVG_WIND width={35} height={35} />
              </View>
            </View>
            <View
              style={[
                styles.statusTri,
                {backgroundColor: Colors[theme].white},
              ]}>
              <View style={{alignItems: 'center', justifyContent: 'center'}}>
                <Text style={[styles.text1Half, {color: Colors[theme].black}]}>
                  Precpitation
                </Text>
                <Text style={[styles.text1Half, {color: Colors[theme].black}]}>
                  {weather.wind.speed} %
                </Text>
              </View>
              <View style={styles.svgBlue}>
                <SVG_RAIN width={35} height={35} />
              </View>
            </View>
            <View
              style={[
                styles.statusTri,
                {backgroundColor: Colors[theme].white},
              ]}>
              <View style={{alignItems: 'center', justifyContent: 'center'}}>
                <Text style={[styles.text1Half, {color: Colors[theme].black}]}>
                  Humidity
                </Text>
                <Text style={[styles.text1Half, {color: Colors[theme].black}]}>
                  {weather.main.humidity}%
                </Text>
              </View>
              <View style={styles.svgBlue}>
                <SVG_DROP width={35} height={35} />
              </View>
            </View>
          
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default Control_Screen;
