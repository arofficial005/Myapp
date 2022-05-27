import { StyleSheet, TextInput, View,SafeAreaView,TouchableOpacity,Text} from 'react-native'
import React ,{useState}from 'react'
import firestore from '@react-native-firebase/firestore';
const  CoordinatorManage=(props)=>

{
  const [society,setname] =useState("");
  const [CoordinatorName,setcord] =useState("");
  const [id,setid] =useState("");
  const [Password,setPassword] =useState("");
  const[error, setError] = useState(null)



  const handleSubmit = () => {
 

//  var count =''+this.state.length
    setError(null)
    if (society.trim() ==="") {
      return setError("Society name no be empty!")
     } 
    if (CoordinatorName.trim() ==="") {
      return setError("Coordinator Name must!")  
     } 
     if (id.trim().length<4) {
      return setError("ID minmum 4 digits!")  
     } 
     if (Password.trim().length<6) {
      return setError("Password not be empty!")  
     } 
else{
  firestore()
  .collection('Coordinators')
  .doc(id)
  .set({
    Society: society,
    CoordinatorName: CoordinatorName,
    id: id,
    password:Password,
    // message: message,
  })
  .then(() => {
    alert('Society Added Successfully')
  });
  props.navigation.navigate('SuperAdmin');
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
      value={society}
      placeholder="Society name"
      onChangeText={(society) => setname(society)}
    />
    <TextInput
      style={styles.inputsubject}
      value={CoordinatorName}
      placeholder="Coordinator name"
      onChangeText={(CoordinatorName) => setcord(CoordinatorName)}
    />
    <TextInput
      style={styles.inputsubject}
      value={id}
      keyboardType='email-address'
      placeholder="Coordinator E-mail"
      onChangeText={(id) => setid(id)}
    />
    <TextInput
      style={styles.inputsubject}
      value={Password}
      keyboardType='number-pad'
      maxLength={8}
      placeholder="Password"
      onChangeText={(Password) => setPassword(Password)}
    />
     
     <TouchableOpacity  style={styles.loginBtn} onPress ={handleSubmit}>
        <Text style={styles.loginText}>Add</Text>
      </TouchableOpacity>
  </SafeAreaView>
  </>
  
);
}
export default CoordinatorManage;


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
