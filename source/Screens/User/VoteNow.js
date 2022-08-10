import {View, Text, StyleSheet, FlatList, TouchableOpacity,Alert} from 'react-native';
import React, {useEffect, useState,useCallback} from 'react';
import firestore from '@react-native-firebase/firestore';
import { useNavigation } from '@react-navigation/native';
const VoteNow = ({route}) => {
    const navigation=useNavigation()
  const {email,Data,id} = route.params;
  const [hasdata, setHasdata] = useState();
  const [data, setData] = useState([])
  useEffect(() => {
   setData(Data)
  }, [])
  const HandleVote=useCallback(
  async  (index) => {
    console.log(index,email,id)
        let newArr = await [...data];
        newArr[index] =await {...data[index],voteCount:[...newArr[index].voteCount,email]}; // replace e.target.value with whatever you want to change it to4
       console.log(newArr)
       await firestore().collection('Voting').doc(id).update({
            data: newArr,
          }).then((res)=>  Alert.alert(
            "Your Vote is added",
            "You are no more eligible to vote again on this candidate",
            [
              { text: "OK", onPress: () => navigation.navigate("Home",{email:email})  }
            ]
          )       );
    },
    [email,data,id,setData],
  )
  
  return (
    <View>
        <FlatList
          data={data}
          renderItem={({item,index}) => <>
          <Text style={styles.item}>{item.name}</Text><Text style={styles.item}>{item.rollno}</Text><Text style={styles.item}>{item.dept}</Text>
          <TouchableOpacity onPress={()=>HandleVote(index)}>
            <Text>Vote Now</Text>
          </TouchableOpacity>
          </>
          }
        />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22,
  },
  item: {
    padding: 10,
    fontSize: 18,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 15,
    backgroundColor: '#f5ac58',
    textAlign: 'center',
  },
});
export default VoteNow;
