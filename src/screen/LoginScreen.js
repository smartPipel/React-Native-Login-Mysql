import React, {Component} from 'react';

import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TextInput,
  TouchableNativeFeedback,
} from 'react-native';

export default class LoginScreen extends Component {
  render() {
    return (
      <View style={styles.MainContainer}>
        <ScrollView>
          <Text style={styles.title}>Login</Text>
          <TextInput
            placeholder="example@mail.com"
            onChangeText={email => this.setState({email: email})}
            underlineColorAndroid="transparent"
            style={styles.TextInputStyleClass}
          />
          <TextInput
            placeholder="password"
            onChangeText={password => this.setState({password: password})}
            underlineColorAndroid="transparent"
            style={styles.TextInputStyleClass}
            secureTextEntry={true}
          />
          <TouchableNativeFeedback
            onPress={ () => {
              this.props.navigation.navigate('Register');
          }}
          >
            <View style={styles.myButtonLogin}>
              <Text>Login</Text>
            </View>
          </TouchableNativeFeedback> 
          <TouchableNativeFeedback
            onPress={ () => {
              this.props.navigation.navigate('Register');
          }}>
            <View style={styles.myButtonRegister}>
              <Text>Register</Text>
            </View>
          </TouchableNativeFeedback> 
        </ScrollView>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  MainContainer: {
    justifyContent: 'center',
    padding: 20,
    flex: 1,
    margin: 10,
  },
  TextInputStyleClass: {
    paddingStart: 20,
    marginBottom: 15,
    marginTop: 20,
    height: 40,
    borderWidth: 1,
    borderColor: '#2196F3',
    borderRadius: 5,
  },
  title: {
    fontSize: 22,
    color: '#12cad6',
    textAlign: 'center',
    marginBottom: 15,
  },
  myButtonLogin: {
    width: 300,
    height: 20, 
    backgroundColor: '#12cad6',
    justifyContent: "center",
    paddingTop:20,
    paddingBottom:20,
    paddingStart:130,
    paddingEnd:0,
    borderColor:"#fff",
    borderRadius:10,
    marginBottom:15,
    marginTop:15,
  },
  myButtonRegister: {
    width: 300,
    height: 20, 
    backgroundColor: '#d89cf6',
    justifyContent: "center",
    paddingTop:20,
    paddingBottom:20,
    paddingStart:130,
    paddingEnd:0,
    borderColor:"#fff",
    borderRadius:10,
    marginBottom:15,
    marginTop:15,
  }
});
