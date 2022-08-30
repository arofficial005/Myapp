import { StyleSheet, TextInput, View,SafeAreaView,TouchableOpacity,Text} from 'react-native'
import React ,{useState}from 'react'

const  Forgotcoordinator=(props)=>

{
  const [email,setemail] =useState("");
  const [password,setpassword] =useState("");
  const[error, setError] = useState(null)



  const handleSubmit = () => {
    setError(null)
    if (email.trim() ==="") {
      return setError("Enter valid email !")
     } 
     else{
        firestore()
  .collection('Coordinators')
  .doc(id)
  .set({
    password:Password,
  })
  .then(() => {
    alert('Password updated successfully !')
  });
     }

  }


  return (
    <>
    { error && <Text style={{
      color: 'red',    
    }}>{error}</Text>}
    
    <SafeAreaView style={styles.container}>
     <TextInput
      style={styles.inputsubject}
      value={email}
      placeholder="Enter your Registered E-mail"
      onChangeText={(email) => setemail(email)}
    />
    
     <TouchableOpacity  style={styles.loginBtn} onPress ={handleSubmit}>
        <Text style={styles.textbtn}>Forgot !</Text>
      </TouchableOpacity>
  </SafeAreaView>
  </>
  
);
}
export default Forgotcoordinator;


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
  textbtn: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },

});
