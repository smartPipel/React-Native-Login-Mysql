import React, {Component} from 'react';

import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TextInput,
  Alert,
  TouchableNativeFeedback
} from 'react-native';

export default class RegisterScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nama: '',
      notelp: '',
      alamat: '',
      email: '',
      password: '',
      loading: false, 
      disabled: false
    };
  }
  userRegister = (props) => {
    this.setState({ loading:true, disabled: true }, () => {
      fetch('http://192.168.43.77/user_data/user_register.php', {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-type': 'application/json',
          },
          body: JSON.stringify({
            nama: this.state.nama,
            notelp: this.state.notelp,
            alamat: this.state.alamat,
            email: this.state.email,
            password: this.state.password,
          }),
        })
        .then(response => response.text())
        .then(responseJson => {
          Alert.alert(responseJson);
          this.setState({ loading: false, disabled: false });
          if(responseJson === "Berhasil Register" ){
            this.props.navigation.navigate("Home")
            
          }else{
            Alert.alert("Gagal Register")
          }
        })
        .catch(error => {
          console.error(error);
          this.setState({ loading: false, disabled: false });
        });
      });
    }
  render() {
    return (
      <View style={styles.MainContainer}>
        <ScrollView>
          <Text style={styles.title}>Register</Text>
          <TextInput
            placeholder="Nama"
            onChangeText={text => this.setState({nama: text})}
            underlineColorAndroid="transparent"
            style={styles.TextInputStyleClass}
          />
          <TextInput
            keyboardType="number-pad"
            placeholder="083947"
            onChangeText={text => this.setState({notelp: text})}
            underlineColorAndroid="transparent"
            style={styles.TextInputStyleClass}
          />
          <TextInput
            placeholder="jl.jalan"
            onChangeText={text => this.setState({alamat: text})}
            underlineColorAndroid="transparent"
            style={styles.TextInputStyleClass}
          />
          <TextInput
            placeholder="example@mail.com"
            onChangeText={text => this.setState({email: text})}
            underlineColorAndroid="transparent"
            style={styles.TextInputStyleClass}
          />
          <TextInput
            placeholder="password"
            onChangeText={text => this.setState({password: text})}
            underlineColorAndroid="transparent"
            style={styles.TextInputStyleClass}
            secureTextEntry={true}
          />

          <TouchableNativeFeedback
            disabled = { this.state.disabled }
            onPress={ () => {
              this.userRegister(props);
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
    padding: 20,
    justifyContent: 'center',
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
    color: '#009688',
    textAlign: 'center',
    marginBottom: 15,
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



