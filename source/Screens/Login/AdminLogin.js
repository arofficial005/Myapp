import React,{Component,useState} from 'react';
import { Text,View,Image,TextInput,TouchableOpacity,Pressable,StyleSheet} from 'react-native';
import { firebase } from '@react-native-firebase/auth';
import { FirebaseFirestoreTypes } from '@react-native-firebase/firestore';
const AdminLogin = (props) => {
    const [email,setEmail] =useState("");
    const [password,setPassword] =useState("");
    const[error, setError] = useState(null)

    const handleSubmit = () => {
      setError(null)
      
      if (email.trim() ==="") {
       return setError("Admin ID not be empty!")
      }  
      else if (password.trim() === "") {
       return setError("Password not be empty !")
      }
  else{
    try {
      firebase.auth().signInWithEmailAndPassword(email,password)
      .then(function(user)
      { 
       alert("Login Successfully");
       props.navigation.navigate('SuperAdmin')
      }).catch((error)=>{
        //  console.log('Error',err);
         alert(error);
      })
    } catch (error) {
       alert('Wrong password.');
    }
      }
    }
  
  
      return (
        <>
         { error && <Text style={{
              color: 'red',    
            }}>{error}</Text>}
         <View style={styles.container}>
            {/* <Image style={styles.Image} source={require('./assets/log2.png')} />  */}
          <View style={styles.Image}> 
  
          </View>
           <View style={styles.inputView}>
          <TextInput
            style={styles.TextInput}
            placeholder="admin id"
            placeholderTextColor="#003f5c"
            value={email}
            onChangeText={(email) => setEmail(email)}
          />
        </View>
         <View style={styles.inputView}>
          <TextInput
            style={styles.TextInput}
            placeholder="Password"
            placeholderTextColor="#003f5c"
            value={password}
            secureTextEntry={true}
            onChangeText={(password) => setPassword(password)}
          />
        </View>
   
        <TouchableOpacity>
          <Text style={styles.forgot_button}>Forgot Password?</Text>
        </TouchableOpacity> 
  
        <TouchableOpacity  style={styles.loginBtn} onPress={handleSubmit}>
          <Text style={styles.loginText}>LOGIN</Text>
        </TouchableOpacity>
      </View>
      </>
      );
}

export default AdminLogin

const styles = StyleSheet.create({
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
      },
      forgot_button: {
        height: 20
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
          marginBottom: 40,
        },
        
})