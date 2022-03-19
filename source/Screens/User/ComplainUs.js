import { StyleSheet, TextInput, View,SafeAreaView,TouchableOpacity,Text} from 'react-native'
import React ,{useState}from 'react'

const  ComplainUs=(props)=>
{
  
  const [subject,setname] =useState("");
  const [message,setmessage] =useState("");
  const[error, setError] = useState(null)
  
  const handleSubmit = () => {
    setError(null)
    if (subject.trim() ==="") {
      return setError("Subject not be empty !")
     } 
    if (message.trim().length < 30) {
      return setError("Enter minmum 30 characters!")  
     } 
else{
  alert('Your Complaint has been submitted to admin !')
    props.navigation.navigate('Home')
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
      value={subject}
      placeholder="Subject"
      onChangeText={(subject) => setname(subject)}
    />
    <TextInput style={styles.input}
placeholder="Type Your Complaint Here !"
value={message}
numberOfLines={1}
multiline={true}
onChangeText={(message) => setmessage(message)}  
    />
     <TouchableOpacity  style={styles.loginBtn} onPress ={handleSubmit}>
        <Text style={styles.loginText}>Submit</Text>
      </TouchableOpacity>
  </SafeAreaView>
  </>
  
);
}
export default ComplainUs;


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
