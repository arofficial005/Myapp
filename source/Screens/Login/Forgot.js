import { StyleSheet, TextInput, View,SafeAreaView,TouchableOpacity,Text} from 'react-native'
import React ,{useState}from 'react'
import { firebase ,auth,sendPasswordResetEmail,} from '@react-native-firebase/auth';
const  Forgot=(props)=>

{
  const [email,setemail] =useState("");
  const[error, setError] = useState(null)



  const handleSubmit = () => {
    setError(null)
    if (email.trim() ==="" || email.length<23) {
      return setError("Enter valid email !")
     } 
     else{
      try {
        firebase.auth().sendPasswordResetEmail( email);
        alert("Password reset link sent!");
      } catch (err) {
        console.error(err);
        alert(err.message);
      }
     }

  }


  return (
    <>
    { error && <Text style={{
      color: 'red',    
    }}>{error}</Text>}
    
    <SafeAreaView style={styles.container}>
    <Text style={{color:'blue',textAlign:'center'}}>Enter e-mail in this format  'xxxxxxxx-xxx@uog.edu.pk' </Text>
    <TextInput
      style={styles.inputsubject}
      value={email}
      placeholder="Enter your Registered E-mail"
      onChangeText={(email) => setemail(email)}
    />
     <TouchableOpacity  style={styles.loginBtn} onPress ={handleSubmit}>
        <Text style={styles.loginText}>Forgot</Text>
      </TouchableOpacity>
  </SafeAreaView>
  </>
  
);
}
export default Forgot;


const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius:10,
    height:120,
  fontSize: 18,  
  textAlignVertical:'top',
  },
 
  inputsubject: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius:10,
    fontSize: 18, 
  },
  loginBtn:{
    width: "30%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
    alignItems:"center",
    backgroundColor: "#f5ac58",
    justifyContent: "center",
    marginLeft:"35%",
  },

});
