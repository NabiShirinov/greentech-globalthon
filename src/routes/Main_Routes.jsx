import {View, Text, ToastAndroid, TouchableHighlight} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home_Screen from '../screens/Main_Screens/Home_Screen/Home_Screen';
import Control_Screen from '../screens/Main_Screens/Control_Screen/Control_Screen';
import FieldAll_Screen from '../screens/Main_Screens/FieldAll_Screen/FieldAll_Screen';
import Setting_Screen from '../screens/Main_Screens/Setting_Screen/Setting_Screen';
import HomeIcon from '../assets/images/svgs/tab_home.svg';
import HomeIconFocus from '../assets/images/svgs/tab_home_focus.svg';
import ForyouIcon from '../assets/images/svgs/tab_foryou.svg';
import ForyouIconFocus from '../assets/images/svgs/tab_foryou_focus.svg';
import LibraryIcon from '../assets/images/svgs/tab_library.svg';
import LibraryIconFocus from '../assets/images/svgs/tab_library_focus.svg';
import LeafIcon from '../assets/images/svgs/tab_leaf.svg';
import LeafIconFocus from '../assets/images/svgs/tab_leaf_focus.svg';
import SettingIcon from '../assets/images/svgs/tab_setting.svg';
import SettingIconFocus from '../assets/images/svgs/tab_setting_focus.svg';
import {Main_Routes_Styles} from './styles';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Theme from '../components/Settings/Theme/Theme';
import Language from '../components/Settings/Language/Language';
import Camera_Screen from '../screens/Main_Screens/Camera_Screen/Camera_Screen';
import { useThemeContext } from '../contexts/ThemeContext';
import { Colors } from '../assets/default_styles';
import Search_Screen from '../screens/Main_Screens/Search_Screen/Search_Screen';
import FieldDetail_Screen from '../screens/Main_Screens/FieldDetail_Screen/FieldDetail_Screen';
import StatusDetail_Screen from '../screens/Main_Screens/StatusDetail_Screen/StatusDetail_Screen';
import FieldAdd_Screen from '../screens/Main_Screens/FieldAdd_Screen/FieldAdd_Screen';
import FieldControl_Screen from '../screens/Main_Screens/FieldControl_Screen/FieldControl_Screen';
const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();
const Main_Routes = () => {
  const MyCustomTransition = {
    gestureDirection: 'horizontal',
    cardStyleInterpolator: ({current, next, layouts}) => {
      return {
        cardStyle: {
          transform: [
            {
              translateX: current.progress.interpolate({
                inputRange: [0, 1],
                outputRange: [layouts.screen.width, 0],
              }),
            },
            {
              translateX: next
                ? next.progress.interpolate({
                    inputRange: [0, 1],
                    outputRange: [0, -layouts.screen.width],
                  })
                : 1,
            },
          ],
        },
        headerShown: false,
      };
    },
  };
  const screens = [
    {
      name: 'Tab',
      component: TabNavigation,
      options: {...MyCustomTransition, headerShown: false},
    },
    {
      name: 'Theme',
      component: Theme,
      options: {...MyCustomTransition, headerShown: false},
    },
    {
      name: 'Language',
      component: Language,
      options: {...MyCustomTransition, headerShown: false},
    },
    {
      name: 'Camera',
      component: Camera_Screen,
      options: {...MyCustomTransition, headerShown: false},
    },
    {
      name: 'Search',
      component: Search_Screen,
      options: {...MyCustomTransition, headerShown: false},
    },
    {
      name: 'FieldDetail',
      component: FieldDetail_Screen,
      options: {...MyCustomTransition, headerShown: false},
    },
    {
      name: 'FieldControl',
      component: FieldControl_Screen,
      options: {...MyCustomTransition, headerShown: false},
    },
    {
      name: 'FieldAdd',
      component: FieldAdd_Screen,
      options: {...MyCustomTransition, headerShown: false},
    },
    {
      name: 'StatusDetail',
      component: StatusDetail_Screen,
      options: {...MyCustomTransition, headerShown: false},
    },
  ];
  return (
    <Stack.Navigator initialRouteName="Tab" style={{zIndex:100}}>
      {screens.map(screen => (
        <Stack.Screen
          key={screen.name}
          name={screen.name}
          component={screen.component}
          options={screen.options}
        />
      ))}
    </Stack.Navigator>
  );
};

const TabNavigation = () => {
  const {theme} = useThemeContext()
  const screens = [
    {
      name: 'Home',
      screenName:"Home",
      component: Home_Screen,
      icon: HomeIcon,
      iconfocus: HomeIconFocus,
    },

    // { // AQUATIC UCUN
    //   name: 'Leaf',
    //   component: Control_Screen,
    //   icon: LeafIcon,
    //   iconfocus: LeafIconFocus,
    // },
    {
      name: 'FieldAll',
      screenName: 'All Fields',
      component: FieldAll_Screen,
      icon: LibraryIcon,
      iconfocus: LibraryIconFocus,
    },
    {
      name: 'Settings',
      screenName:"Settings",
      component: Setting_Screen,
      icon: SettingIcon,
      iconfocus: SettingIconFocus,
    },
   
  ];
  const TabBarOverlay = () => (
    <View style={{
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0,
      height: 25, // Tab çubuğunun altındaki alanın yüksekliği
      backgroundColor: 'transparent', // Overlay'in arka plan rengi
    }} />
  );
  const transitionSpec = {
    open: {animation: 'timing', config: {duration: 300}},
    close: {animation: 'timing', config: {duration: 300}},
  };


  const showToast = screenName => {
    ToastAndroid.show(`You are on ${screenName}`, ToastAndroid.LONG);
  };
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: [Main_Routes_Styles.tab,{backgroundColor:Colors[theme].white,shadowColor:Colors[theme].secondary}],
        transitionSpec,
      }}
      tabBarComponent={20}>
      {screens.map(screen => (
        <Tab.Screen
          key={screen.name}
          name={screen.name}
          component={screen.component}
          options={{
            tabBarShowLabel: false,
            headerShown: false,
            tabBarIcon: ({focused}) => (
              <View
                onLongPress={() => showToast(screen.name)}
                style={
                  focused
                    ? Main_Routes_Styles.tabBarFocus
                    : Main_Routes_Styles.tabBar
                }>
                {focused ? <screen.iconfocus /> : <screen.icon fill={"#fff"}/>}
                <Text
                  style={
                    focused
                      ? [Main_Routes_Styles.tabTextFocus,{color:Colors[theme].secondary}]
                      : [Main_Routes_Styles.tabText,{color:Colors[theme].black}]
                  }>
                  {screen.screenName}
                </Text>
              </View>
            ),
          }}
        />
      ))}
    </Tab.Navigator>
  );
};
export default Main_Routes;
