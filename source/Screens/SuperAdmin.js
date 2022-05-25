import React from 'react';
import {  StyleSheet, Text, View, Image, TextInput, TouchableHighlight, Pressable,Alert } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
const SuperAdmin=(props)=>{

  const signOutUser = () => {
    return Alert.alert(
      "Logout ?",
      "Do you want to Logout?",
      [
        {
          text: "Yes",
          onPress: ()=>props.navigation.navigate('MainLogin')
        },
        // Does nothing but dismiss the dialog when tapped
        {
          text: "No",
        },
      ]
    );
  };

   return (
     <ScrollView style={styles.mainn}>
        <><View style={styles.container}>
       <View style={styles.column}>
         <TouchableHighlight>
           {<Image source={{ uri: 'https://i1.wp.com/growmetachem.com/wp-content/uploads/2020/09/Business-Male-Icon-Vector-User-Icon-Avatar-PNG-and-Vector-with-Transparent-Background-for-Free-Download.jpg?ssl=1' }} style={styles.imgstyle} />}
         </TouchableHighlight>
         <Pressable style={styles.button}>
           <Text style={styles.text} onPress={() => { props.navigation.navigate('Coordinators'); }}>Coordinators</Text>
         </Pressable>
       </View>
       <View style={styles.column}>
           <TouchableHighlight>
             {<Image source={{ uri: 'https://us.123rf.com/450wm/iqoncept/iqoncept1801/iqoncept180100012/92709245-complaints-comments-bad-negative-feedback-box-3d-illustration.jpg?ver=6' }} style={styles.imgstyle} />}
           </TouchableHighlight>
           <Pressable style={styles.button}>
             <Text style={styles.text} onPress={() => { props.navigation.navigate('Complaints'); }}>Complaint 's</Text>
           </Pressable>
         </View>
     </View>
     {/************************************************************************************************** */}
       <View style={styles.container}>
        
         <View style={styles.column}>
         <TouchableHighlight>
             {<Image source={{ uri: 'https://icons.iconarchive.com/icons/graphicloads/100-flat-2/128/inside-logout-icon.png' }} style={styles.imgstyle}/>}
           </TouchableHighlight>
           <Pressable style={styles.butonlast} onPress={signOutUser} >
             <Text style={styles.text}>Logout</Text>
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
    flexDirection: 'row'
  },
  mainn:{
    backgroundColor:'#f5f3e6',
  },
  column:{
    flex: 1,
    flexDirection: 'column',
    alignItems: 'flex-start',
    paddingLeft: 30,

  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderRadius: 10,
    elevation: 5,
    backgroundColor: '#f5ac58',
    width: "90%",
  },
  butonlast: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderRadius: 10,
    elevation: 5,
    backgroundColor: '#f5ac58',
    width: "40%",
    
    marginBottom: 10,
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
  imgstyle:{
    width: 100, 
    height: 100,
     borderRadius: 50,
      marginBottom: 15,
      marginTop:15,
      marginLeft:10,
  }
});
export default SuperAdmin;