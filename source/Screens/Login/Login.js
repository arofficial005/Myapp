import { firebase } from '@react-native-firebase/auth';
import auth from '@react-native-firebase/auth';
import React,{Component,useState} from 'react';
import { Text,View,Image,TextInput,TouchableOpacity} from 'react-native';
import styles from './Login.style.js'

const Login=(props)=>
{
  const [email,setEmail] =useState("");
  const [password,setPassword] =useState("");
  const[error, setError] = useState(null)
  const fix = '@uog.edu.pk';
  const conc = `${email}` + `${fix}` ; 
  const handleSubmit = () => {
    setError(null)

    if (email.trim().length < 12) {
      return setError("Roll No. is invalid")
     } 
   if (password.trim() === "") {
     return setError("Password  not be empty !")
    }
 
else{
 try {
   firebase.auth().signInWithEmailAndPassword(conc,password)
   .then(function(user)
   { 
    alert("Login Successfully");
    props.navigation.navigate('Home')
   });
 } catch (error) {
  if (error.code === 'auth/wrong-password') {
    console.log("Wrong password");
    alert('Wrong password.');
  }
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
          placeholder="xxxxxxxx-xxx"
          data-inputmask="'mask': '99999999-999'"
          placeholderTextColor="#003f5c"
          keyboardType='number-pad'
          maxLength={12}
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
      <TouchableOpacity  style={styles.register_btn} onPress={() => { props.navigation.navigate('Register'); } }>
        <Text style={styles.loginText}>REGISTER</Text>
      </TouchableOpacity>
    </View>
    </>
    );
  }
export default Login;