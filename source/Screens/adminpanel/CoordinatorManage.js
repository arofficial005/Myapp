import { StyleSheet, Text, View ,TextInput,TouchableOpacity,Image} from 'react-native'
import React,{Component, useState} from 'react';

const CoordinatorManage = (props) => {
  const [name,setname] =useState("");
  const [email,setEmail] =useState("");
  const [password,setPassword] =useState("");
  const [Number,setnumber] =useState("");
  const add = () => {
    <>
    <View style={styles.container}>
        
          <View style={styles.Image}> 
         
             <Image style={styles.Image} source={{uri:'https://www.seekpng.com/png/detail/125-1253270_kindergarten-registration-now-open-register-button.png'}} /> 
          
        </View>
         <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          value={name}
          placeholder="Enter full name"
          placeholderTextColor="#003f5c"
          onChangeText={(name) => setname(name)}
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput} 
          value={email}
          placeholder="Your roll number"
          
          keyboardType='number-pad'
          maxLength={12}
          placeholderTextColor="#003f5c"
          onChangeText={(email) => setEmail(email)}
          
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          keyboardType='number-pad'
          maxLength={11}
          value={Number}
          placeholder="03xxxxxxxxx"
          placeholderTextColor="#003f5c"
          onChangeText={(Number) => setnumber(Number)}
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          value={password}
          placeholder="Password"
          placeholderTextColor="#003f5c"
          secureTextEntry={true}
          onChangeText={(password) => setPassword(password)}
        />
    </View>
</View>
    </>
  }
    

  return (
    <View>
      <Text style={[styles.bigBlue]}> Coordinators Management</Text>
      
    <TouchableOpacity  style={styles.loginBtn} onPress={add}>
        
        <Text style={styles.loginText}>Add Coordinator</Text>
      </TouchableOpacity>
    </View>
    
  )
}

export default CoordinatorManage

const styles = StyleSheet.create({
    bigBlue: {
        color: '#f5ac58',
        fontWeight: 'bold',
        fontSize: 20,
        textAlign:'center',
      },
      container:{
        flex: 1,
        borderColor : 'gray',
        alignItems: "center",
        justifyContent: "center",
      
      },
      TextInput:{
        height: 50,
        flex: 1,
        padding: 10,
        marginLeft: 20,
      
      },
      inputView:{
        backgroundColor: 'white',
        borderRadius: 30,
        height: 40,
        width: '90%',
        margin: 10,
        marginBottom: 20,
        alignItems: "center",
        textAlign:"center"
      },
      forgot_button: {
        height: 15,
        marginBottom: 0.5,
      },
      loginBtn:{
          width: "30%",
          borderRadius: 25,
          height: 50,
          alignItems: "center",
          justifyContent: "center",
          marginTop: 30,
          backgroundColor: "#f5ac58",
        },
        Image: {
        marginTop:10,
        },
})