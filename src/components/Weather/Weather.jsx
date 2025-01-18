import React, {useEffect, useState} from 'react';
import {View, Text, ActivityIndicator} from 'react-native';
import axios from 'axios';
import {useThemeContext} from '../../contexts/ThemeContext';
import {Colors} from '../../assets/default_styles';
import {styles} from './styles';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Image, Svg} from 'react-native-svg';
const Weather = ({info=true}) => {
  const {theme} = useThemeContext();
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);

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
  const weatherInfo = [
    {
      name: 'Humidity',
      value: weather?.main?.humidity + ' %',
    },
    {
      name: 'Pressure',
      value: weather?.main?.pressure + ' hPa',
    },
    {
      name: 'Feels Like',
      value: (weather?.main.feels_like - 273.15).toFixed(1) + ' °C',
    },
    {
      name: 'Wind',
      value: weather?.wind.speed + ' m/s',
    },
  ];
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
    weather && (
      <View
        style={[styles.container, {backgroundColor: info?Colors[theme].primary:Colors[theme].white}]}>
        <View style={styles.main}>
          <Text style={[styles.taptofindText, {color: Colors[theme].black}]}>
            {weather.name}, Azerbaijan
          </Text>
        </View>
        <View style={styles.main}>
          <Text
            style={[
              styles.temperature,
              {color: Colors[theme].black, fontSize: 60},
            ]}>
            + {(weather.main.temp - 273.15).toFixed(0)}
          </Text>
          <View style={styles.hl}>
            <Text
              style={[
                styles.taptofindText,
                {color: Colors[theme].black, fontSize: 20},
              ]}>
              H: {(weather.main.temp_max - 271.12).toFixed(1)} °C
            </Text>
            <Text
              style={[
                styles.taptofindText,
                {color: Colors[theme].black, fontSize: 20},
              ]}>
              L: {(weather.main.temp_min - 275.54).toFixed(1)} °C
            </Text>
          </View>
          <Svg width="100" height="100">
            <Image
              // style={styles.image}
              width="110"
              height="110"
              href={{
                uri: `http://openweathermap.org/img/w/${weather.weather[0].icon}.png`,
              }}
            />
            <Text
              style={[
                styles.hl,
                {color: Colors[theme].black, fontSize: 20, textAlign: 'center'},
              ]}>
              {weather.weather[0].description}
            </Text>
          </Svg>
        </View>
    {info && (
          <View style={styles.main}>
          {weatherInfo.map((item, index) => (
            <View key={index}>
              <Text style={[styles.infoName, {color: Colors[theme].black}]}>
                {item.name}
              </Text>
              <Text style={[styles.infoValue, {color: Colors[theme].black}]}>
                {item.value}
              </Text>
            </View>
          ))}
        </View>
    )}
      </View>
    )
  );
};

export default Weather;
