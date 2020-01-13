import React, {
  Component
} from 'react';
import {
  createAppContainer, StackActions, NavigationAction
} from 'react-navigation';
import {
  createStackNavigator, HeaderTitle
} from 'react-navigation-stack';
import { Ionicons } from '@expo/vector-icons';
import {
  View,
  Text,
  
  StyleSheet,
  Button,
  TouchableWithoutFeedback,
} from 'react-native';

import HomeScreen from './src/view/HomeScreen';
import RegisterScreen from './src/view/RegisterScreen';
import LoginScreen from './src/view/LoginScreen';
import UserActivities from './src/view/tabScreen/activities';
import UserProfile from './src/view/tabScreen/profile';
import { removeUser } from './src/controller/databasesHelper';


const Navigasi = createStackNavigator({
  Home: {
    screen: HomeScreen, 
    navigationOptions: {
      title: 'Explore',
      headerStyle:{
        backgroundColor: "#222831",
        elevation: 0,
      },
      headerTintColor:"#fff",
      headerLeft:()=>{
        return <Ionicons name="md-list" color="white" style={{fontSize: 20 , marginLeft:20, marginRight: 50}} 
        onPress={
          async () => {
              await removeUser();

              const reset = StackActions.reset({
                  index: 0,
                  actions: [NavigationActions.navigate({routeName:'Login'})]
              })
              this.props.navigation.dispatch(reset)
          }
      }
        />
      },
      headerRight:()=>{
        return <View style={{marginRight: 20, flexDirection:"row"}}>
          <Ionicons name="md-notifications-outline" color="white" style={{fontSize: 20 }} />
          <Ionicons name="md-search" color="white" style={{fontSize: 20 , marginLeft:20}} />
          </View>
      },
      headerTitleStyle:{
        marginLeft: 70
      }
    }
  },
  Login: {
    screen: LoginScreen,
  },
  Register: {screen: RegisterScreen},
  UserAct: {screen: UserActivities},
  UserProfile: {screen: UserProfile},
},
  {
    initialRouteName: "Login",
  }
);


export default createAppContainer(Navigasi);