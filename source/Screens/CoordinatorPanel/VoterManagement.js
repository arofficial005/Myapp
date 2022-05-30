import { StyleSheet, Text, View } from 'react-native'
import RNPickerSelect from "react-native-picker-select";
import React,{useState,useEffect} from 'react'
import { ScrollView, TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import firestore from '@react-native-firebase/firestore';

const VoterManagement = (props) => {
  const [selectedrole, setSelectedrole] = useState(null)
  const [numbers, setNumbers] = useState("")
  const namesarray=[]
  const [userdata, setUserdata] = useState({})
  const email=props.route.params.email
  useEffect(() => {
    const subscriber = firestore()
     .collection('Coordinators')
     .doc(email)
     .get()
   .then(documentSnapshot => {
     console.log('User exists: ', documentSnapshot.exists);
 
     if (documentSnapshot.exists) {
       console.log('Coorinator data ', documentSnapshot.data());
       setUserdata(documentSnapshot.data())
     }
   });
   }, [])
   console.log(userdata.Society)
  return (
    <>
   
    <View style={styles.container}>
    <Text style={styles.header}>Select Candidate post for Election!</Text>
    <RNPickerSelect
        onValueChange={(value) => setSelectedrole(value)}
        items={[
            { label: "President", value: "President" },
            { label: "Vice President", value: "Vice President" },
            { label: "Finance Secretary", value: "Finance Secretary" },
            { label: "General Secretary", value: "General Secretary" },
            { label: "Joint Secretary", value: "Joint Secretary" },
            { label: "Information Secretary", value: "Information Secretary" },
            { label: "Media Manager", value: "Media Manager" },
            { label: "Graphic Designer", value: "Graphic Designer" },
        ]}
    />
    {selectedrole!==null?<TextInput
     placeholder='Please Enter Number of Candidates' 
    maxLength={1}
     keyboardType="numeric" onChangeText={text=>setNumbers(text)}/>:null}
     { numbers !==''?<>
{Array.from(Array(parseInt(numbers)).keys()).map((item,index)=>(
  <TextInput key={index} value={namesarray[index]} placeholder=  {"Enter name"} onChangeText={text=>namesarray[index]=text}/>
))
}
     </>:null}
     {numbers !==''?
     <TouchableOpacity onPress={()=>console.log(namesarray)} style={{width:"100%",height:30,backgroundColor:"black"}}>

     </TouchableOpacity>:null}
</View>

</>
  )
}

export default VoterManagement

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#fff',
    paddingLeft:30,
    paddingRight:30,
      },
      header:{
        fontSize:24,
        color:'#199187',
        paddingBottom:10,
        marginBottom:30,
        borderBottomColor:'#199187',
        borderBottomWidth:3,
        textAlign:'center',
        
        },
});