import { StyleSheet, Text, View,FlatList } from 'react-native'
import React,{useEffect} from 'react'
import firestore from '@react-native-firebase/firestore';   
const Socities = () => {
  const socityarray=[]
  useEffect(() => {
    firestore()
      .collection('Coordinators')
      .get() .then(querySnapshot => {
        querySnapshot.forEach(documentSnapshot => {
          // console.log('Socity: ', documentSnapshot.data());
          // setSocityarray([...socityarray,documentSnapshot.data()])
          socityarray.push(documentSnapshot.data())
          console.log(socityarray)
        });
      });
  }, [])
  
  return (
    
     
      <View style={styles.container}>
        {socityarray.map((item,index)=>
        {
          console.log("item",item)

          return(
          <Text style={styles.item}>{item.id}</Text>
        )})}

      <FlatList
        data={socityarray}
        renderItem={({item}) => <Text style={styles.item}>{item.CoordinatorName}</Text>}
      />
    </View>
    
  )
}

export default Socities

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