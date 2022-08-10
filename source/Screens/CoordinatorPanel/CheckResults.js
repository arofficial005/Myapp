import { StyleSheet, Text, View ,TouchableOpacity,Alert,ScrollView} from 'react-native'
import React,{useState,useEffect,useCallback} from 'react'
import firestore from '@react-native-firebase/firestore';
import { useNavigation } from '@react-navigation/native';
const CheckResults = (props) => {
  const navigation=useNavigation()
  const email=props.route.params.email
const [results, setResults] = useState([])
const [ids, setIds] = useState([])
useEffect(() => {
  FetchData() 
}, [])
const DeleteData=useCallback(
  (id) => {
    firestore()
  .collection('Voting')
  .doc(id)
  .delete()
  .then(() => (
    Alert.alert(
      "Alert Title",
      "My Alert Msg",
      [
       
        { text: "OK", onPress: ()=>navigation.goBack() }
      ]
    )
  ));
  },
  [],
)
const FetchData=useCallback(
  () => {
    console.log("FEtch")
    firestore()
    .collection('Voting')
    // Filter results
    .where('email', '==', email)
    // Limit results
    .get()
    .then(querySnapshot => {
      /* ... */
      // console.log(querySnapshot.size)
      querySnapshot.forEach(documentSnapshot => {
        // console.log('User ID: ', documentSnapshot.id, documentSnapshot.data());
        setIds(ids=>[...ids,documentSnapshot.id])
        setResults(results=>[...results,documentSnapshot.data()])
      });
    });
  
  },
  [setIds,setResults,ids,results,email],
)

  return (
    <View>
      <Text>CheckResults</Text>
      <ScrollView>
     
      {results?.map((item,index)=>{
        // console.log(item)
        return(
          <>
          <TouchableOpacity onPress={()=>DeleteData(ids[index])}>
            <Text>Delete</Text>
          </TouchableOpacity>
          <Text>{item.role}</Text>
          {item.data.map((object,index)=>(
            <>
          <Text>Name: {object?.name}</Text>
          <Text>Roll #: {object?.rollno}</Text>
          <Text>Department: {object?.dept}</Text>
          <Text>Vote Count: {object?.voteCount.length}</Text>
            </>
      ))}
          </>

        )
      })}
         
         </ScrollView>
    </View>
  )
}

export default CheckResults

const styles = StyleSheet.create({})