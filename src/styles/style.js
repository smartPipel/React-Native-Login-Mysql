import { StyleSheet, Dimensions } from 'react-native';

export default StyleSheet.create({
    cardContainer: {
        padding:0,
        width: Dimensions.get('screen').width/1,
        height: Dimensions.get('screen').height/5,
        flex: 1,
        borderRadius: 10,
    },
    cardContainer2: {
        padding:0,
        width: Dimensions.get('screen').width/1,
        height: Dimensions.get('screen').height/3.9,
        flex: 1,
        borderRadius: 10,
    },
    
    containerTOP: {
        width: Dimensions.get('screen').width/1.1,
        flexDirection: "row",
        borderRadius: 20,
        marginLeft: 15,
        marginRight:15,
        marginTop:10
    },
    container2: {
        width: Dimensions.get('screen').width/2.28,
        flexDirection: "row",
        borderRadius: 20,
        marginBottom:10
    },
    container3: {
        width: Dimensions.get('screen').width/2.28,
        height: Dimensions.get('screen').height/3.9,
        flexDirection: "row",
        borderRadius: 20,
        marginBottom:10
    },
    cardContainerCol1:{
        borderRadius: 10,
        width: Dimensions.get('screen').width/2.3,
        height: Dimensions.get('screen').height,
        flex:1,
    },
    cardContainerCol2:{
        borderRadius: 10,
        width: Dimensions.get('screen').width/1,
        height: Dimensions.get('screen').height/1,
        flex:2,
    },
    containerMenu: {
        flexDirection:"row",
        height: Dimensions.get('window').height/2,
    },

    overlay: {
      position: 'absolute',
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
      backgroundColor: '#ff7bb0',
      opacity: 0.7,
      borderRadius: 10,
      padding:20,
      justifyContent:'space-between'
    },
    titleText:{
        fontSize:20,
        color: "#ffffff",
        
    },
    subtitleText:{
        fontSize:12,
        color: "#e3f6f5",
        
    },
})