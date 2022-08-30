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
            
            {<Image source={{ uri: 'https://scontent.flhe2-2.fna.fbcdn.net/v/t39.30808-6/276323441_277087557939576_6784977914137874849_n.png?_nc_cat=101&ccb=1-5&_nc_sid=730e14&_nc_eui2=AeHoDdMPPXv6XD5bUZJ-V9ls_Ccc67suiCj8Jxzruy6IKHsh2N4RC8WXePtOTDDgRljZLazoZDG7DMmH8a4ObPWI&_nc_ohc=JABzPPqiYtUAX9sCfWq&_nc_zt=23&_nc_ht=scontent.flhe2-2.fna&oh=00_AT-l2swSq5odBuUkOCNXHM4Ab5nld_NLy8xVnlWzgEzxmw&oe=623BA967' }} style={styles.imgstyle} />} 
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
    backgroundColor:'#FFFFFF',
  },
mainn:{
  backgroundColor:'#FFFFFF',
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
    height: 450,
      marginBottom: 125,
  },

});
export default Mainlogin;
