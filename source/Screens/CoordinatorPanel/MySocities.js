import { StyleSheet, Text, View ,FlatList} from 'react-native'
import React,{useEffect,useState} from 'react'
import { firebase } from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
const MySocities = (props) => {
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

  
  return (
    <View style={styles.container}>
   <Text style={styles.item}>{userdata.Society}</Text>
  </View>
  )
}

export default MySocities

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22,
   },
   item: {
     padding: 10,
     fontSize: 18,
     height: 44,  
      width: "100%",
      borderRadius: 25,
      alignItems: "center",
      justifyContent: "center",
      marginTop: 30,
      backgroundColor: "#f5ac58",

      textAlign: 'center',
   },
})