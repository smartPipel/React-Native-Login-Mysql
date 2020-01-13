
import { AsyncStorage } from 'react-native';

export async function getUser (){
    const user = await AsyncStorage.getItem('user');
    JSON.parse(user)
}

export async function userStore(user){
    if(typeof user == 'object'){
        user = JSON.stringify(user)
    }

    await AsyncStorage.setItem('user', user)

}

export async function removeUser(){
    await AsyncStorage.removeItem('user');
}