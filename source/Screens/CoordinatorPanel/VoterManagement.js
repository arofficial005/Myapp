import { StyleSheet, Text, View } from 'react-native'
import RNPickerSelect from "react-native-picker-select";
import React,{useState,useEffect,useCallback} from 'react'
import { ScrollView, TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import firestore from '@react-native-firebase/firestore';
import { useNavigation } from '@react-navigation/native';
const VoterManagement = (props) => {
  const [selectedrole, setSelectedrole] = useState(null)
  const [numbers, setNumbers] = useState("")
  const [userdata, setUserdata] = useState({})
  const [votersdata, setVotersdata] = useState([])
  const email=props.route.params.email
  const navigation=useNavigation()
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
   const updateFieldChanged =   useCallback(
     (index,text,value) => {
    
      let newArr = [...votersdata]; // copying the old datas array
      newArr[index] = {...votersdata[index],[value]:text,voteCount:[]}; // replace e.target.value with whatever you want to change it to4
      // newArr[index] = {...votersdata[index],voteCount:[]};
      setVotersdata(newArr);
     },
     [setVotersdata,votersdata],
   )
   const HandlePress=useCallback(
     () => {
      console.log(votersdata)
      firestore()
      .collection('Voting')
      .add({
        society:userdata.Society,
        role: selectedrole,
        data: votersdata,
        email:email
      })
      .then(() => {
        console.log('User added!');
        navigation.goBack()
      });
     },
     [email,selectedrole,votersdata,userdata,navigation],
   )
   
  return (
    <>
   <ScrollView>
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
    {selectedrole!==null?
    <TextInput style={styles.txtt}
     placeholder='Please Enter Number of Candidates' 
    maxLength={1}
     keyboardType="numeric" onChangeText={text=>setNumbers(text)}/>:null}
     { numbers !==''?<>
{Array.from(Array(parseInt(numbers)).keys()).map((item,index)=>(
  <>
  <Text key={index}>{index+1}</Text>
  <TextInput  key={index} 
   
  //  onChangeText={(text)=>setVotersdata([...votersdata,{...votersdata[index],name:text}])}
  onChangeText={(text)=>updateFieldChanged(index,text,"name")}
  // value={namesarray[index]}
  onSubmitEditing={() =>  console.log("hi")}

  style={styles.txt} placeholder=  {"Enter name"} 
  
  // onChangeText={text=>namesarray[index]=text}
  />
  
  <TextInput  
  //  onChangeText={(text)=>setVotersdata([...votersdata,{...votersdata[index],dept:text}])}
  onChangeText={(text)=>updateFieldChanged(index,text,"dept")}
   key={index}
  //  value={departmentarray[index]}
    style={styles.txt} placeholder=  {"Enter Department"}
  
  // onChangeText={text=>departmentarray[index]=text}
  />
  <TextInput  
  //  onChangeText={(text)=>setVotersdata([...votersdata,{...votersdata[index],rollno:text}])}
  onChangeText={(text)=>updateFieldChanged(index,text,"rollno")}
   key={index}
  //  value={rollarray[index]}
    style={styles.txt}placeholder=  {"Enter Roll No."}
  //  onChangeText={text=>rollarray[index]=text}
   />
  </>
))
}
     </>:null}
     {numbers !==''?
     <TouchableOpacity onPress={HandlePress} style={styles.btn}>
  <Text style={styles.textbtn}>Generate Election !</Text>
     </TouchableOpacity>:null}
</View>
</ScrollView>
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
        txtt:{
          fontSize:16,
          color:'#199187',
          paddingBottom:10,
          marginBottom:30,
          borderBottomColor:'#199187',
          borderBottomWidth:3,
          textAlign:'center',
          
          },
          btn:  {    
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft:15,
    paddingVertical: 10,
    borderRadius: 10,
    marginBottom:10,
    elevation: 5,
    backgroundColor: '#f5ac58',
    width: "90%",
          },
   
  textbtn: {
    fontSize: 19,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
        txt:{
          height:40,
          marginBottom:20,
          borderBottomColor:'#f8f8f8',
          borderBottomWidth:1,
            },
});