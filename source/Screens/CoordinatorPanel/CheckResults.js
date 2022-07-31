import { StyleSheet, Text, View } from 'react-native'
import React,{useState,useEffect} from 'react'
import firestore from '@react-native-firebase/firestore';

const CheckResults = (props) => {
  const email=props.route.params.email
const [results, setResults] = useState([])
useEffect(() => {
  firestore()
  .collection('Voting')
  // Filter results
  .where('email', '==', email)
  // Limit results
  .get()
  .then(querySnapshot => {
    /* ... */
    console.log(querySnapshot.size)
    querySnapshot.forEach(documentSnapshot => {
      // console.log('User ID: ', documentSnapshot.id, documentSnapshot.data());
      setResults((results)=>[...results,documentSnapshot.data()])
    });
  });

 
}, [])

  return (
    <View>
      <Text>CheckResults</Text>
      {results?.map((item,index)=>{
        console.log(item.data)
        return(
          <>
          {item.data.map((object,index)=>(
          <Text>name:</Text>

      ))}
          </>

        )
      })}
    </View>
  )
}

export default CheckResults

const styles = StyleSheet.create({})