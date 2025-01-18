import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Linking, Platform } from 'react-native';
import { Colors, Fonts } from '../../assets/default_styles';
import { useThemeContext } from '../../contexts/ThemeContext';
import { faRedoAlt } from '@fortawesome/free-solid-svg-icons'; // Import the faRedoAlt icon
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'; // Import the FontAwesomeIcon component

const NoInternet = () => {
  const { theme } = useThemeContext();

  const openWifiSettings = () => {
    if (Platform.OS === 'android') {
      Linking.openSettings();
    } else if (Platform.OS === 'ios') {
      Linking.openURL('App-Prefs:root=WIFI');
    } else {
      Linking.openSettings();
    }
  };

  return (
    <View style={[styles.container, { backgroundColor: Colors[theme].secondary }]}>
      <Text style={[styles.taptofindText, { color: Colors[theme].white }]}>No Internet</Text>
      <TouchableOpacity onPress={openWifiSettings} style={styles.reloadButton}>
        {/* <Text style={styles.reloadButtonText}>Reload</Text> */}
        <FontAwesomeIcon icon={faRedoAlt} size={30} color={Colors[theme].white} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.secondary,
  },
  taptofindText: {
    fontFamily: Fonts.normal,
    fontSize: 40,
    color: Colors.white,
    marginBottom: 20,
  },
  reloadButton: {
    flexDirection: 'row', // Align icon and text horizontally
    alignItems: 'center', // Center items vertically
    backgroundColor: Colors.primary,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  reloadButtonText: {
    color: Colors.white,
    fontSize: 16,
    fontFamily: Fonts.normal,
    marginRight: 10, // Add spacing between text and icon
  },
});

export default NoInternet;
