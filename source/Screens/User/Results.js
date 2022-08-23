import { StyleSheet, Text, View,FlatList } from 'react-native'
import React,{useEffect,useState,useCallback} from 'react'
import firestore from '@react-native-firebase/firestore';   
import { TouchableOpacity,Modal,Pressable } from 'react-native-gesture-handler';
import {useNavigation} from "@react-navigation/native"

const Results = () => {
  const socityarray=[]
  const navigation =useNavigation()
 const [results, setResults] = useState([])
 const [modal, setModal] = useState(false)
  useEffect(() => {
    FetchData() 
  }, [])
  const FetchData=useCallback(
    () => {
      console.log("FEtch")
      firestore()
      .collection('Voting')
      .get()
      .then(querySnapshot => {
        /* ... */
        // console.log(querySnapshot.size)
        querySnapshot.forEach(documentSnapshot => {
          // console.log('User ID: ', documentSnapshot.id, documentSnapshot.data());
          setResults(results=>[...results,documentSnapshot.data()])
        });
      });
    
    },
    [setResults,results,],
  )
  
  return (
      <View style={styles.container}>
         <Text style={[styles.bigBlue]}> Choose society & see voting result</Text>
      <FlatList
        data={results}
        renderItem={({item}) =>         
           <TouchableOpacity onPress={()=> navigation.navigate("ResultDetails",item.data)}>
        <Text style={styles.item}>{item.society}</Text>         
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
  
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  },  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
})