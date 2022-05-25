import React from 'react';
import { firebase } from '@react-native-firebase/auth';
import {  StyleSheet, Text, View, Image, TextInput, TouchableHighlight,TouchableOpacity, Pressable ,Alert} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

const Home=(props)=>{
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
     <>
     <ScrollView style={styles.mainn}>
        <><View style={styles.container}>
       <View style={styles.column}>
         <Pressable >
            
           {<Image source={{ uri: 'https://st2.depositphotos.com/1004061/10573/i/600/depositphotos_105732032-stock-photo-paper-people-standing-together.jpg' }} style={styles.imgstyle} />} 
         </Pressable>
         <Pressable style={styles.button}>
           {/* <Text style={styles.text} onPress={()=>{props.navigation.navigate('Socities')}}>Socities</Text> */}
           <Text style={styles.text} onPress={()=>{props.navigation.navigate('Socities')}}>Socities</Text>
         </Pressable>
       </View>
       <View style={styles.column}>
           <TouchableHighlight>
             {<Image source={{ uri: 'https://media.istockphoto.com/vectors/bue-apply-now-simple-button-flat-style-arrow-or-cursor-graphic-on-vector-id1141391105?k=20&m=1141391105&s=612x612&w=0&h=Dj2Gk-78tVaGX3qfFQ-YKRBoIhmkDtM9uykVKmjhPcQ=' }} style={styles.imgstyle} />}
           </TouchableHighlight>
           <Pressable style={styles.button}>
             <Text style={styles.text} onPress={() => { props.navigation.navigate('ApplyforCand');}}>Apply Candidate</Text>
           </Pressable>
         </View>
     </View>
    
     {/************************************************************************************************** */}
       <View style={styles.container}>
         
         <View style={styles.column}>
           <TouchableHighlight>
             {<Image source={{ uri: 'https://media.istockphoto.com/vectors/voting-box-vector-id480760966?k=20&m=480760966&s=612x612&w=0&h=sanAUwoQKAYmNai-YhRmfFxVCJrbrl-RDA-llTARe84=' }} style={styles.imgstyle}/>}
           </TouchableHighlight>
           <Pressable style={styles.button} onPress={() => { props.navigation.navigate('Vote'); } }>
             <Text style={styles.text}>Vote Now</Text>
           </Pressable>
         </View>
         <View style={styles.column}>
           <TouchableHighlight>
             {<Image source={{ uri: 'https://media.istockphoto.com/photos/results-picture-id481104485?k=20&m=481104485&s=612x612&w=0&h=dwrHjuosLBAsuI_l8zmgYV-2ZoxAtmr0KKBgplsmeoI=' }} style={styles.imgstyle}/>}
           </TouchableHighlight>
           <Pressable style={styles.button}>
             <Text style={styles.text} onPress={() => { props.navigation.navigate('Results'); } }>Check Result</Text>
           </Pressable>
         </View>
       </View>
        {/************************************************************************************************** */}
        <View style={styles.container}>
        
         <View style={styles.column}>
         <TouchableHighlight>
             {<Image source={{ uri: 'https://thumbs.dreamstime.com/b/hand-putting-ballot-box-close-up-glass-149392701.jpg' }} style={styles.imgstyle}/>}
           </TouchableHighlight>
           <Pressable style={styles.button} onPress={() => { props.navigation.navigate('Complaint-Us'); } }>
             <Text style={styles.text}>Complaint Us</Text>
           </Pressable>
         </View>
         <View style={styles.column}>
         <TouchableHighlight>
             {<Image source={{ uri: 'https://icons.iconarchive.com/icons/graphicloads/100-flat-2/128/inside-logout-icon.png' }} style={styles.imgstyle}/>}
           </TouchableHighlight>
           <Pressable style={styles.button} onPress={signOutUser} >
             <Text style={styles.text}>Logout</Text>
           </Pressable>
         </View>
       </View>
       {/* ********************************************************************* */}
       {/* <View style={styles.loginBtn}>

      <TouchableOpacity onPress={()=>{props.navigation.navigate('Register')}}  >
        <Text style={[styles.bigBlue, styles.red]}>Register Screen</Text>
      </TouchableOpacity>
     
   </View> */}
   
             </>
      </ScrollView>
      </>
    );
  }
 
const styles = StyleSheet.create({
  container: {
    flex: 1, 
    flexDirection: 'row',
    backgroundColor:'#f5f3e6'
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
    paddingHorizontal: 5,
    borderRadius: 10,
    elevation: 5,
    backgroundColor: '#f5ac58',
    width: "90%",
    
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
      marginTop:20,
      marginLeft:10,
  },
  loginBtn:{
    width: "50%",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 300,
  },
  bigBlue: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 25,
  },
  red: {
    color: 'red',
  },
  butonlast: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderRadius: 10,
    elevation: 5,
    backgroundColor: '#f5ac58', 
    marginBottom: 10,
  },
});
export default Home;
