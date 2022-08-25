import React,{Component,useState} from 'react';
import { Text,View,Image,TextInput,TouchableOpacity,Pressable,StyleSheet} from 'react-native';
import firestore from '@react-native-firebase/firestore';

const CoordinatorLogin = (props) => {
    const [email,setEmail] =useState("");
    const [password,setPassword] =useState("");
    const[error, setError] = useState(null)
   
  const [disabledloginbtn, setDisabledloginbtn] = useState(false)
    const handleSubmit = () => {
      setError(null)
  
      if (email.trim() ==="") {
       return setError("Coordinator E-mail not be empty!")
      } 
      
      else if (password.trim() === "") {
       return setError("Password not be empty !")
      }
  else{
    setDisabledloginbtn(true)
    var dataArray = [];
    try {
      firestore().collection('Coordinators')
      .doc(email)
      .get()
      .then(documentSnapshot => {
        if(documentSnapshot.exists){
          dataArray = documentSnapshot.data();
          // console.log('User Data: ', dataArray);
          var pwdDB = dataArray.password
          if(password == pwdDB)
          {
            alert('Coordinator Login successfully');
            props.navigation.navigate('Coordinator',{email:email});
            setDisabledloginbtn(false)
          } else {
            alert('invalid Login');
            setDisabledloginbtn(false)
          }
        }
      })
      
    } catch (error) {
       alert('invalid Login');
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
            placeholder="Coordinator E-mail"
            keyboardType='email-address'
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
   
        {/* <TouchableOpacity>
          <Text style={styles.forgot_button}onPress={() => { props.navigation.navigate('forgotcoordinator');}}>Forgot Password?</Text>
        </TouchableOpacity> 
   */}
        <TouchableOpacity  style={styles.loginBtn} onPress={handleSubmit}>
          <Text style={styles.loginText}>LOGIN</Text>
        </TouchableOpacity>
      </View>
      </>
      );
}

export default CoordinatorLogin

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