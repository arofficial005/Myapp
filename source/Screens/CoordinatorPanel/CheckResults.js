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
      "Election Deleted Successfully !",
      "Election has been deleted",
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
    <View style={styles.container}>
      <Text style={styles.bigBlue}>Voting Results</Text>
      <ScrollView>
     
      {results?.map((item,index)=>{
        // console.log(item)
        return(
          <>
          <TouchableOpacity onPress={()=>DeleteData(ids[index])} style={styles.btn}>
            <Text styles={styles.textbtn}>Delete Election</Text>
          </TouchableOpacity>
          <Text style={styles.post}>{item.role}</Text>
          {item.data.map((object,index)=>(
            <>
            
          <Text style={styles.item}>Name: {object?.name}</Text>
          <Text style={styles.item}>Roll #: {object?.rollno}</Text>
          <Text style={styles.item}>Department: {object?.dept}</Text>
          <Text style={styles.item}>Vote Count: {object?.voteCount.length}</Text>
          <Text style={styles.space}></Text>
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#36485f',
   },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,  
     width: "100%",
     borderRadius: 25,
     alignItems: "center",
     justifyContent: "center",
     marginTop: 10,
     backgroundColor: "#fcfcfc",
     textAlign: 'center',
  },
  bigBlue: {
    color: '#fcfcfc',
    fontWeight: 'bold',
    fontSize: 20,
    textAlign:'center',
  },
  btn:  {    
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft:100,
    paddingVertical: 10,
    borderRadius: 10,
    marginBottom:10,
    elevation: 5,
    marginTop:10,
    backgroundColor: '#ed778a',
    width: "50%",
          },
          space:  {    
           marginTop:12,
                  },
      post:  {    
            alignItems: 'center',
            justifyContent: 'center',
            marginLeft:15,
            paddingVertical: 10,
            borderRadius: 10,
            marginBottom:10,
            elevation: 5,
            backgroundColor: '#e3e8ae',
            width: "90%",
            textAlign:'center',
                  },
          textbtn: {
            fontSize: 19,
            lineHeight: 21,
            fontWeight: 'bold',
            letterSpacing: 0.25,
            color: 'white',
          },
})