import React from 'react';
import {  StyleSheet, Text, View, Image, TextInput, TouchableHighlight,TouchableOpacity, Pressable } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { LogBox } from 'react-native'; // gesture handler warning
const Mainlogin=(props)=>{
    LogBox.ignoreLogs([
        "[react-native-gesture-handler] Seems like you\'re using an old API with gesture components, check out new Gestures system!",
      ]); 
   return (
         
     <ScrollView style={styles.mainn}>
        <>
        <Pressable >
            
            {<Image source={{ uri: 'https://st2.depositphotos.com/1004061/10573/i/600/depositphotos_105732032-stock-photo-paper-people-standing-together.jpg' }} style={styles.imgstyle} />} 
          </Pressable>
        <View style={styles.container}>
       <View style={styles.column}>
         <Pressable style={styles.button}>
           <Text style={styles.text} onPress={()=>{props.navigation.navigate('Login')}}>Students</Text>
         </Pressable>
       </View>
       <View style={styles.column}>
         <Pressable style={styles.button} >
           <Text style={styles.text}onPress={()=>{props.navigation.navigate('CoordinatorLogin')}}>Coordinator</Text>
         </Pressable>
       </View>
       <View style={styles.column}>
         <Pressable style={styles.button} >
           <Text style={styles.text}onPress={()=>{props.navigation.navigate('AdminLogin')}}>Admin</Text>
         </Pressable>
       </View>
     </View>
     </>   
      </ScrollView>
      
    );
  }
 
const styles = StyleSheet.create({
  container: {
    flex: 1, 
    flexDirection: 'row',
    backgroundColor:'#f5f3e6',
  },
mainn:{
  marginTop:100,
},
  column:{
    flex: 1,
    flexDirection: 'column',
    alignItems: 'flex-start',
    paddingLeft: 0,
    marginLeft:5,

  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
    paddingHorizontal: 0,
    borderRadius: 10,
    elevation: 5,
    backgroundColor: '#f5ac58',
    width: "95%",
    
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 1,
    color: 'white',
  },
  imgstyle:{ 
    height: 300,
    borderRadius:20,
      marginBottom: 174,
  },

});
export default Mainlogin;
