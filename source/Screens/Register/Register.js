import React,{Component, useState} from 'react';
import auth from '@react-native-firebase/auth';
import { StyleSheet,Text,ScrollView,View,Image,TextInput,Button,TouchableOpacity,Pressable} from 'react-native'

const  Register=(props)=>
{
  const [name,setname] =useState("");
  const [email,setEmail] =useState("");
  const [password,setPassword] =useState("");
  const [confirmPassword,Retypepass] =useState("");
  const[error, setError] = useState(null)
  const fix = '@uog.edu.pk';
  const conc = `${email}` + `${fix}` ; 
  
  const handleSubmit = () => {
    setError(null)
    if (name.trim() ==="") {
      return setError("Enter Your name !")
     } 
    if (email.trim().length < 11) {


      return setError("Roll No. must not be empty!")
     } 
     
     if (password.trim().length <6) {
     return setError("Password should be at least 6 characters long")
    }
    if (password!==confirmPassword) {
      return setError("Password does't match")
     }
else{
  auth()
  .createUserWithEmailAndPassword(conc, password)
  .then((res) => {
   auth().currentUser.sendEmailVerification();
    alert('please check your Email ');
    // alert(name+' you Registerd Succesfully!');
    // alert('Hello',res.user.conc);
    // StoreUser(res.user.email)
  })
  .catch(error => {
    // setLoading(false);
    if (error.code === 'auth/email-already-in-use') {
      alert('This email  is already in use!');
    }
    if (error.code === 'auth/invalid-email') {
      alert('This email address is invalid!');
    }
    
  });

    //props.navigation.navigate('Home')
    }
  }

 
    return (
      <>
      <ScrollView>
      { error && <Text style={{
        color: 'red',    
      }}>{error}</Text>}
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
          value={password}
          placeholder=" Password"
          placeholderTextColor="#003f5c"
          secureTextEntry={true}
          onChangeText={(password) => setPassword(password)}
        />
    </View>

    <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Confirm Password"
          placeholderTextColor="#003f5c"
          secureTextEntry={true}
          value={confirmPassword}
          onChangeText={(confirmPassword) => Retypepass(confirmPassword)}
        />
      </View>
     
      <TouchableOpacity  style={styles.loginBtn} onPress={handleSubmit}>
        
        <Text style={styles.loginText}>Submit</Text>
      </TouchableOpacity>
    </View>
    </ScrollView>
    </>
    
    );
  }
export default Register;
const styles=StyleSheet.create({
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
  textAlign:'center',
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
});