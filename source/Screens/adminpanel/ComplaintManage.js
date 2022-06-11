import { StyleSheet,ScrollView, Text, View ,FlatList} from 'react-native'
import React,{Component,useState,useEffect,useCallback} from 'react'

import firestore from '@react-native-firebase/firestore';   



const ComplainManage = () => {
  const [email,setEmail] =useState("");
  const [fsData,setFsData] = useState([])
  const arr=[]
  const getComplaint = useCallback(
    async () => {
    const complaint = await firestore().collection('Complaints').get().then(querySnapshot => {
      querySnapshot.forEach(documentSnapshot => {
        // console.log('Socity: ', documentSnapshot.data());
        // setSocityarray([...socityarray,documentSnapshot.data()])
        arr.push(documentSnapshot.data())
        setFsData(arr)
      });
    });
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
<>
<ScrollView>
   <View style={styles.container}>
      <FlatList
      data={fsData}
      renderItem={({item})=><Text style={styles.item}>{item.message}</Text>}
      />
      
    </View>
    </ScrollView>
    </>
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
      width: "100%",
      alignItems: "center",
      justifyContent: "center",
      marginTop: 10,
      color:'white',
      backgroundColor: "#36485f",
   },
})