import * as React from 'react';
import {
    View,
    Text,
    StyleSheet,
    Dimensions,
    StatusBar,
} from 'react-native';
import UserActivities from './tabScreen/activities';
import UserProfile from './tabScreen/profile';
import { SceneMap, TabView, TabBar } from 'react-native-tab-view';


const initialLayout = { width: Dimensions.get('window').width };


export default class HomeScreen extends React.Component{
        
    state ={
        index : 0,
        routes : [
            {key: 'profile', title: 'profile'},
            {key: 'activities', title: 'activities'}
        ]
    }
    _handelIndexChange = index => this.setState({ index })

    _renderHeader = props => <TabBar {...props} indicatorStyle={{ backgroundColor:"#ff7bb0", height: 3, marginVertical: 4, width:150, marginStart:10, borderRadius:10 }} style={styles.tabBar}/>

    _renderScene = ({ route }) => {
        switch (route.key) {
          case 'profile':
            return <UserProfile foo={this.props.foo} />;
          case 'activities':
            return <UserActivities />;
          default:
            return null;
        }
    };
     render(){
        return (
            <TabView
                navigationState={this.state}
                renderScene={this._renderScene}
                renderTabBar= {this._renderHeader}
                onIndexChange={this._handelIndexChange}
                initialLayout={initialLayout}
                
            /> 
        );
     }
    }

    const styles = StyleSheet.create({
        tabBar: {
            backgroundColor: "#222831",
            color: "#393e46"
        }
    })