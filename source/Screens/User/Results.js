import { StyleSheet, Text, View,FlatList } from 'react-native'
import React,{useEffect,useState} from 'react'
import firestore from '@react-native-firebase/firestore';   
import { TouchableOpacity } from 'react-native-gesture-handler';
import {useNavigation} from "@react-navigation/native"
const Results = () => {
  const socityarray=[]
  const [data, setData] = useState([])
  const navigation=useNavigation()
  useEffect(() => {
    firestore()
      .collection('Coordinators')
      .get() .then(querySnapshot => {
        querySnapshot.forEach(documentSnapshot => {
          // console.log('Socity: ', documentSnapshot.data());
          // setSocityarray([...socityarray,documentSnapshot.data()])
          socityarray.push(documentSnapshot.data())
          console.log(socityarray)
          setData(socityarray)
        });
      });
  }, [])
  
  return (
      <View style={styles.container}>
         <Text style={[styles.bigBlue]}> Choose society & see voting result</Text>
      <FlatList
        data={data}
        renderItem={({item}) =>         
           <TouchableOpacity onPress={()=>navigation.navigate("CoordinatorHierarchy",{email:item.id})}>
        <Text style={styles.item}>{item.Society}</Text>         
           </TouchableOpacity>
} />
    </View>
    
  )
}

export default Results

const styles = StyleSheet.create({

  container: {
    flex: 1,
    paddingTop: 22,
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
      marginTop: 30,
      backgroundColor: "#fcfcfc",
      textAlign: 'center',
   },
   bigBlue: {
    color: '#fcfcfc',
    fontWeight: 'bold',
    fontSize: 20,
    textAlign:'center',
  },
})