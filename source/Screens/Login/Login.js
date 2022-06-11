import { firebase, FirebaseAuthTypes } from '@react-native-firebase/auth';
import React,{Component,useState} from 'react';
import { Text,View,Image,TextInput,TouchableOpacity} from 'react-native';
import styles from './Login.style.js'

const Login=(props)=>
{
  const [email,setEmail] =useState("");
  const [password,setPassword] =useState("");
  const[error, setError] = useState(null)
  const [disabledloginbtn, setDisabledloginbtn] = useState(false)
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
  setDisabledloginbtn(true)

 try {
   firebase.auth().signInWithEmailAndPassword(conc,password)
  .then((user)=>{
    if(user.user.emailVerified){
      alert('User Login successfully');
      props.navigation.navigate('Home');
      setDisabledloginbtn(false)
    } else {
      alert('Please verify your email checkout inbox');
      setDisabledloginbtn(false)
    }
    
  }).catch((err)=>{
    alert('Sorry it seems you entered wrong Roll.no / password');
    setDisabledloginbtn(false)
    console.log(err);
  })
 } catch (error) {
  setDisabledloginbtn(false)
    alert('invalid login');
  
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
        <Text style={styles.forgot_button} onPress={() => { props.navigation.navigate('Forgott'); } }>Forgot Password?</Text>
      </TouchableOpacity> 

      <TouchableOpacity disabled={disabledloginbtn}  style={styles.loginBtn }
      onPress={handleSubmit}>
        <Text style={styles.loginText}>LOGIN</Text>
      </TouchableOpacity>
      <TouchableOpacity  style={styles.register_btn} onPress={() => { props.navigation.navigate('Register'); } }>
        <Text style={styles.loginText}>Register here !</Text>
      </TouchableOpacity>
    </View>
    </>
    );
  }
export default Login;