import React, {
    Component
} from 'react';
import {
    View,
    Text,
    StyleSheet,
} from 'react-native';

export default class HomeScreen extends React.Component {
    
    render() {
        return (
        <View style = {styles.homeContainer} >
            <Text> Hai </Text>
        </View>
        )
    }
}

const styles = StyleSheet.create({
    homeContainer: {
        justifyContent: 'center',
        flex: 1,
        margin: 10,
        backgroundColor: "c06c84"
    },
});