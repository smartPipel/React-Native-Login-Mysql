import React, {Component} from 'react';

import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TextInput,
  TouchableNativeFeedback,
} from 'react-native';
import { userStore } from '../controller/databasesHelper';


export default class LoginScreen extends Component {
  constructor(props){
    super(props)
    this.state = {
      email: "",
      password: "",
      loading: false,
      disabled: false
    }
  }
  

  async userLogin () {
    let res, result;
    this.setState(()=>({loading: true, disabled: true}))
    try{
      res = await fetch('http://192.168.43.77/user_data/user_login.php', {
        headers: {
          Accept: "application/json",
          'Content-Type': "application/json",
        },
        method: 'POST',
        body: JSON.stringify(this.state),
      })
    }
    catch(e){
      alert(e.message)
      this.setState(()=>({loading: false, disabled: false}))
      return
    }

    try{
      result = await res.json(); 
    }catch(e){
      alert(JSON.stringify(e))
      this.setState(()=>({loading: false, disabled: false}))
      return
    }

    if(result.status === 'succes'){
      try{
        await userStore(JSON.stringify(result.user));

        // alert(JSON.stringify(result))
        this.props.navigation.replace('Home')
        // , NavigationActions.replace('UserProfile',{username: result.user.nama})
          // username: result.user.nama})
      }catch(e){
      alert(JSON.stringify(e))
      this.setState(()=>({loading: false, disabled: false}))
      return
      }
    }else{
      alert("Gagal login")
    }
    this.setState(()=>({loading: false, disabled: false}))
  }


  render() {
    
    if(this.state.loading){
      return <View style={styles.loadingContainer}><Text style={styles.textLoading}>Please Wait.....</Text></View>
    }
    return (
      <View style={styles.MainContainer}>
        <ScrollView>
          <Text style={styles.title}>Login</Text>
          <TextInput
            keyboardType="email-address"
            placeholder="example@mail.com"
            onChangeText={email => this.setState({email: email})}
            underlineColorAndroid="transparent"
            style={styles.TextInputStyleClass}
            value={this.state.email}
          />
          <TextInput
            placeholder="password"
            onChangeText={password => this.setState({password: password})}
            underlineColorAndroid="transparent"
            style={styles.TextInputStyleClass}
            secureTextEntry={true}
            value={this.state.password}
          />
          <TouchableNativeFeedback
            onPress={ () => {
              this.userLogin()
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
  loadingContainer:{
    backgroundColor: "#12cad6",
    justifyContent: "center",
    alignContent:"center",
    alignItems: "center",
  },
  textLoading:{
    color: "#916dd5",
    fontSize: 22
  },
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
