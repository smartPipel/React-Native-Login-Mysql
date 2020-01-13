import React, {Component} from 'react';
import { View, StyleSheet, Dimensions, Text, Image } from 'react-native';



export default class UserProfile extends Component{
    render() {
        const { navigation } = this.props;
        
        return(
            <View style={styles.homeContainer}>
                <View>
                    <Image source={require('../../../assets/Image/profile.jpg')} style={styles.cardContainer} />
                     <View style={styles.overlay}>
                        <Image source={require('../../../assets/Image/tejina.jpg')} style={styles.avatar} />
                        <View>
                            <Text style={styles.usernameText}>Alvin Ferdian AKbar</Text>
                            <Text style={styles.emailText}>alvinakbar095@gmail.com</Text>
                        </View>
                    </View>
                </View>
                <View style={{ flexDirection: "row" }} >
                    <View style={{marginTop:15, marginRight: 15}}>
                        <Image source={require('../../../assets/Image/profile.jpg')} style={styles.cardContainerView} />
                        <View style={styles.overlayView}>
                            <View>
                                <Text style={styles.viewMenuText}>Followers</Text>
                                <Text style={styles.viewNumber}>1897</Text>
                            </View>
                        </View>
                    </View>
                    <View style={{marginTop:15}}>
                        <Image source={require('../../../assets/Image/profile.jpg')} style={styles.cardContainerView} />
                        <View style={styles.overlayView}>
                            <View>
                                <Text style={styles.viewMenuText}>Following</Text>
                                <Text style={styles.viewNumber}>50</Text>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    homeContainer: {
        flexDirection: "column",
        padding: 15,
        backgroundColor:"#1b262c",
        height: Dimensions.get('screen').height
    },
    textUsername:{
        width:200,
        top:0,
        alignSelf:"flex-start",
        marginTop:20
    },
    cardContainer: {
        padding:0,
        width: Dimensions.get('screen').width/1.1,
        height: Dimensions.get('screen').height/5,
        borderRadius: 10,
    },
    cardContainerView: {
        padding:0,
        width: Dimensions.get('screen').width/2.3,
        height: Dimensions.get('screen').height/5,
        borderRadius: 10,
    },
    overlay: {
        width: Dimensions.get('screen').width/1.1,
        height: Dimensions.get('screen').height/5,
        position: 'absolute',
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        backgroundColor: '#400082',
        opacity: 0.7,
        borderRadius: 10,
        padding:20,
        justifyContent:'flex-start',
        flexDirection:"row"
      },
      overlayView: {
        width: Dimensions.get('screen').width/2.3,
        height: Dimensions.get('screen').height/5,
        position: 'absolute',
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        backgroundColor: '#400082',
        opacity: 0.7,
        borderRadius: 10,
        padding:20,
        justifyContent:'space-around',
        flexDirection:"row"
      },
      avatar:{
        width:55,
        height:55,
        borderRadius: 50,
        margin:15,
      },
      usernameText:{
        margin:15,
        fontSize: 16,
        color: "#fff"
      },
      emailText:{
        marginLeft:15,
        fontSize: 10,
        color:"#f0f0f0"
      },
    viewMenuText:{
        color: "#fff",
        fontSize: 20,
        alignSelf:'center'
    },
    viewNumber:{
        color: "#ff7bb0",
        fontSize: 40,
        alignSelf:'center'
    }
   
    
});