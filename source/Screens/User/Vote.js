import { StyleSheet, Text, View,FlatList } from 'react-native'
import React,{useEffect,useState,useCallback} from 'react'
import firestore from '@react-native-firebase/firestore';   
import { TouchableOpacity } from 'react-native-gesture-handler';
import {useNavigation} from "@react-navigation/native"
const Vote = (props) => {
  const email=props.route.params.email
  const socityarray=[]
  const [data, setData] = useState([])
  const [ids, setIds] = useState([])
  const navigation=useNavigation()
  const [found, setFound] = useState(false)
  useEffect(() => {
    firestore()
      .collection('Voting')
      .get() .then(querySnapshot => {
        querySnapshot.forEach(documentSnapshot => {
          // console.log('Socity: ', documentSnapshot.data());
          // setSocityarray([...socityarray,documentSnapshot.data()])
          setIds((ids)=>[...ids,documentSnapshot.id])
          socityarray.push(documentSnapshot.data())
          // console.log(socityarray)
          setData(socityarray)
        });
      });
  }, [])
  const find=useCallback(
    (item) => {
      // console.log("find")
      let found=false
      item?.data?.map((object,index)=>{
        if(object?.voteCount.includes(email)){
          // console.log("found")
          found=true
          
        }
      })
      return found
    },
    [email],
  )
  
  return (
      <View style={styles.container}>
         <Text style={[styles.bigBlue]}>Choose society & vote your favourtite candidate</Text>
      <FlatList
        data={data}
        renderItem={({item,index}) =>         
           <TouchableOpacity disabled={find(item)} onPress={()=>navigation.navigate("VoteNow",{email:email,Data:item.data,id:ids[index]})}>
        <Text style={styles.item}>{item.society}:{item.role}</Text>         
           </TouchableOpacity>
} />
    </View>
    
  )
}

export default Vote

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