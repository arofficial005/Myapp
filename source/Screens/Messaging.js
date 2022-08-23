import { View, Text, Input, TextInput, TouchableOpacity, ScrollView } from 'react-native'
import React, { useState, useCallback, useEffect } from 'react'
import firestore from '@react-native-firebase/firestore';   

const Messaging = ({route}) => {
    const {society,email}=route.params
    console.log(society,email)
    const [messages, setMessages] = useState([]);
    const [inputText, setInputText] = useState("")
  useEffect(() => {
    firestore()
    .collection('Messaging')
    .doc(society)
    .get()
    .then(querySnapshot => {
      /* ... */
      console.log(querySnapshot.data())
    setMessages(querySnapshot.data().messages)
    });
  }, [])
  
      const HandleMessage=useCallback(
        () => {
            setMessages((messages)=>[...messages,{message:inputText,email:email}])
            setInputText("")
            var docRef = firestore().collection("Messaging").doc(society);

docRef.get().then((doc) => {
    if (doc.exists) {
        firestore()
        .collection('Messaging')
        .doc(society)
        .update({
          messages: [...messages,{message:inputText,email:email}],
        })
        .then(() => {
          console.log('User updated!');
        });    } else {
        // doc.data() will be undefined in this case
        firestore()
        .collection('Messaging')
        .doc(society)
        .set({
            messages: messages,
        })
        .then(() => {
          console.log('User added!');
        });    }
}).catch((error) => {
    console.log("Error getting document:", error);
});
 
        },
        [email,inputText,messages],
      )
      
  return (
    <View style={{flex:1}}>
     <ScrollView>
        {messages?.map((item,index)=>(
           <>
           {item.email===email?<View style={{backgroundColor:"teal",alignSelf:"flex-end",width:"50%",height:60,borderRadius:10,marginVertical:10,padding:10}}>
<Text>{item.message}</Text>
           </View>:<View style={{backgroundColor:"yellow",width:"50%",height:60,borderRadius:10,marginVertical:10,padding:10}}><Text>{item.message}</Text>
</View>}
           </>
        ))}
     </ScrollView>
      <View style={{alignItems:"center",flexDirection:"row",width:"100%",height:70,position:"absolute",bottom:0,backgroundColor:"teal"}}>
<TextInput value={inputText} style={{width:"80%",height:"100%"}} placeholder='Enter your Message Here' onChangeText={(text)=>setInputText(text)}/>
      <TouchableOpacity onPress={HandleMessage}>

      <Text>
        Send
      </Text>
      </TouchableOpacity>
      </View>
    </View>
  )
}

export default Messaging