import { StyleSheet, Text, View ,FlatList} from 'react-native'
import React,{Component,useState,useEffect,useCallback} from 'react'
import { firebase } from '@react-native-firebase/auth';



const ComplainManage = () => {
  const [email,setEmail] =useState("");
  const [fsData,setFsData] = useState([])
  
  const getComplaint = useCallback(
    async () => {
    const complaint = await firebase.firestore().collection('Complaints').get()
    console.log(complaint.docs)
    setFsData(complaint.docs)
    },
    [],
  )
  
  useEffect(() => {
    console.log("hello compliant manager")
    getComplaint()
    return () => {
      
    }
  }, [])
  
const data=[{id:1}]
  return (

   <View style={styles.container}>
      <FlatList
      renderItem={({item})=><Text styles={style.item}>{item._data.message}</Text>}
      />
      <Text>Hello world</Text>
    </View>
  )
}

export default ComplainManage

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