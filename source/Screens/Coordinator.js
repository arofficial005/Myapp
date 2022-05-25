import React from 'react';
import {  StyleSheet, Text, View, Image, TextInput, TouchableHighlight, Pressable,Alert } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
const Coordinator=(props)=>{
  const email=props.route.params.email
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
           {<Image source={{ uri: 'https://st2.depositphotos.com/1004061/10573/i/600/depositphotos_105732032-stock-photo-paper-people-standing-together.jpg' }} style={styles.imgstyle} />}
         </TouchableHighlight>
         <Pressable style={styles.button}>
           <Text style={styles.text}  onPress={() => { props.navigation.navigate('My-Socities',{email:email}); } }>My Socities</Text>
         </Pressable>
       </View>
       <View style={styles.column}>
         <TouchableHighlight>
           {<Image source={{ uri: 'https://c8.alamy.com/comp/2AK0WE9/company-structure-icon-isolated-white-background-corporate-hierarchy-and-employee-organization-2AK0WE9.jpg' }} style={styles.imgstyle} />}
         </TouchableHighlight>
         <Pressable style={styles.button} onPress={() => { props.navigation.navigate('Manage-Hierarchy'); } }>
           <Text style={styles.text}>Mange hierarchy</Text>
         </Pressable>
       </View>
     </View>
     {/************************************************************************************************** */}
       <View style={styles.container}>
         <View style={styles.column}>
           <TouchableHighlight>
             {<Image source={{ uri: 'https://caltechsites-prod.s3.amazonaws.com/scienceexchange/images/Voting-Elections-Topics-Image.2e16d0ba.fill-650x400-c100_layt0GB.jpg' }} style={styles.imgstyle} />}
           </TouchableHighlight>
           <Pressable style={styles.button}>
             <Text style={styles.text}onPress={() => { props.navigation.navigate('Voter-Management');}}>Manage Voter's</Text>
           </Pressable>
         </View>
       <View style={styles.column}>
           <TouchableHighlight>
             {<Image source={{ uri: 'https://media.istockphoto.com/photos/results-picture-id481104485?k=20&m=481104485&s=612x612&w=0&h=dwrHjuosLBAsuI_l8zmgYV-2ZoxAtmr0KKBgplsmeoI=' }} style={styles.imgstyle}/>}
           </TouchableHighlight>
           <Pressable style={styles.button} onPress={() => { props.navigation.navigate('Check-Results'); } }>
             <Text style={styles.text}>Check Results</Text>
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
export default Coordinator;