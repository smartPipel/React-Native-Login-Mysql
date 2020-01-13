import React, {Component} from 'react';
import { View, Text, StyleSheet, Dimensions, ImageBackground, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import  styles from '../../styles/style';
import { BottomNavigation } from 'react-native-paper';

export default class UserActivities extends Component{
    state = {
        index: 0,
        routes: [
          { key: 'world',icon: 'map', color: '#222831' },
          { key: 'explore', icon: 'clock', color: '#222831'  },
          { key: 'bookmark', icon: 'book', color: '#222831'  },
          { key: 'chat', icon: 'chat', color: '#222831'  },
        ],
      };
    
      _handleIndexChange = index => this.setState({ index });
      
    
      _renderScene = ({ route }) => {
        switch (route.key) {
          case 'world':
            return <World />;
          case 'explore':
            return <Explore  foo={this.props.foo} />;
          case 'bookmark':
            return <Bookmark />;
          case 'chat':
            return <Chat />;
          default:
            return null;
        }
    };
      
    render() {
        
        return(
            <BottomNavigation
                navigationState={this.state}
                onIndexChange={this._handleIndexChange}
                renderScene={this._renderScene}
                activeColor="#ff7bb0"
                inactiveColor="#fff"
            />
        )
    }
}

class World extends Component{
    render() {
        return (
            <View style={{backgroundColor:"#1b262c", height: Dimensions.get('screen').height}}>
                <Text style={{color:'#fff', alignSelf:'center', marginTop:150}}>World</Text>
            </View>
        )
    }
}

class Explore extends Component {
    render(){
        return(
            <View style={{backgroundColor: "#1b262c", height: Dimensions.get('screen').height}}>
                <View style={styles.containerTOP}>
                    <Image source={require('../../../assets/Image/nature.jpg')} style={styles.cardContainer} />
                    <View style={styles.overlay}>
                        <Ionicons name="md-leaf" color="white" style={{fontSize: 35}} />
                        <View>
                            <Text style={styles.titleText}>Nature's Light</Text>
                            <Text style={styles.subtitleText}>450 SPOTS</Text>
                        </View>
                    </View>
                    
                </View>
                <View style={{flexDirection:"row"}}>
                    <View style={{flexDirection:"column", marginLeft: 15, marginTop:10, marginRight:10}}>
                        <View style={styles.container3}>
                            <Image source={require('../../../assets/Image/budaya.jpg')} style={styles.cardContainer2} />
                            <View style={styles.overlay}>
                                <Ionicons name="md-umbrella" color="white" style={{fontSize: 35}} />
                                <View>
                                    <Text style={styles.titleText}>Cultural</Text>
                                    <Text style={styles.subtitleText}>257 SPOTS</Text>
                                </View>
                            </View>
                            
                        </View>
                        <View style={styles.container2}>
                            <Image source={require('../../../assets/Image/popular.jpg')} style={styles.cardContainer} />
                            <View style={styles.overlay}>
                                <Ionicons name="md-heart" color="white" style={{fontSize: 35}} />
                                <View>
                                    <Text style={styles.titleText}>Popularity</Text>
                                    <Text style={styles.subtitleText}>357 SPOTS</Text>
                                </View>
                            </View>
                            
                        </View>
                    </View>
                    <View style={{flexDirection:"column", marginRight:10, marginTop:10}}>
                        <View style={styles.container2}>
                            <Image source={require('../../../assets/Image/arsitektur.jpg')} style={styles.cardContainer} />
                            <View style={styles.overlay}>
                                <Ionicons name="logo-model-s" color="white" style={{fontSize: 35}} />
                                <View >
                                    <Text style={styles.titleText}>Modern Life</Text>
                                    <Text style={styles.subtitleText}>117 SPOTS</Text>
                                </View>
                            </View>
                            
                        </View>
                        <View style={styles.container3}>
                            <Image source={require('../../../assets/Image/beach.jpg')} style={styles.cardContainer2} />
                            <View style={styles.overlay}>
                                <Ionicons name="md-beer" color="white" style={{fontSize: 35}} />
                                <View>
                                    <Text style={styles.titleText}>Sun & Sand</Text>
                                    <Text style={styles.subtitleText}>147 SPOTS</Text>
                                </View>
                            </View>
                            
                        </View>
                    </View>
                </View>
            </View>
        )
    }
}
class Bookmark extends Component {
    render(){
        return(
            <View style={{backgroundColor:"#1b262c", height: Dimensions.get('screen').height}}>
                <Text style={{color:'#fff', alignSelf:'center', marginTop:150}}>Bookmark</Text>
            </View>
        )
    }
}
class Chat extends Component {
    render(){
        return(
            <View style={{backgroundColor:"#1b262c", height: Dimensions.get('screen').height}}>
                <Text style={{color:'#fff', alignSelf:'center', marginTop:150}}>Chat</Text>
            </View>
        )
    }
}
