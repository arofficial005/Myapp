import React from 'react';
import {  StyleSheet, Text, View, Image, TextInput, TouchableHighlight, Pressable } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
const SuperAdmin=(props)=>{
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
           {<Image source={{ uri: 'https://st2.depositphotos.com/1004061/10573/i/600/depositphotos_105732032-stock-photo-paper-people-standing-together.jpg' }} style={styles.imgstyle} />}
         </TouchableHighlight>
         <Pressable style={styles.button} onPress={() => { props.navigation.navigate('Socities-Management'); } }>
           <Text style={styles.text}>Socities</Text>
         </Pressable>
       </View>
     </View>
     {/************************************************************************************************** */}
       <View style={styles.container}>
         <View style={styles.column}>
           <TouchableHighlight>
             {<Image source={{ uri: 'https://us.123rf.com/450wm/iqoncept/iqoncept1801/iqoncept180100012/92709245-complaints-comments-bad-negative-feedback-box-3d-illustration.jpg?ver=6' }} style={styles.imgstyle} />}
           </TouchableHighlight>
           <Pressable style={styles.butonlast}>
             <Text style={styles.text} onPress={() => { props.navigation.navigate('Complaints'); }}>Complaint  Box</Text>
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