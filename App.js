import React, {
  Component
} from 'react';
import {
  createAppContainer
} from 'react-navigation';
import {
  createStackNavigator, HeaderTitle
} from 'react-navigation-stack';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Button,
  TouchableWithoutFeedback,
} from 'react-native';

import HomeScreen from './src/screen/HomeScreen';
import RegisterScreen from './src/screen/RegisterScreen';
import LoginScreen from './src/screen/LoginScreen';


const Navigasi = createStackNavigator({
  Home: {screen: HomeScreen},
  Login: {
    screen: LoginScreen,
  },
  Register: {screen: RegisterScreen}
},
  {
    initialRouteName: "Login",
    defaultNavigationOptions: ({navigation}) => {
      HeaderTitle: "Login"
    }
  }
);


export default createAppContainer(Navigasi);