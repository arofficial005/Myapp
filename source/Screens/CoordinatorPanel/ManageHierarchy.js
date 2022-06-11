import { StyleSheet, Text, View,ScrollView,TextInput ,TouchableOpacity,Alert} from 'react-native'
import React ,{useState,Component} from 'react'
import firestore from '@react-native-firebase/firestore';   
const ManageHierarchy = (props) => {
  const email=props.route.params.email
console.log("email at manage hirearchy",email)
  const [pname,setpname] =useState("");
  const [pdep,setpdep] =useState("");
  const [pemail,setpemail] =useState("");
  const [vpname,setvpname] =useState("");
  const [vpdep,setvpdep] =useState("");
  const [vpemail,setvpemail] =useState(""); 
  const [fsname,setfsname] =useState("");
  const [fsdep,setfsdep] =useState("");
  const [fsemail,setfsemail] =useState("");
  const [gsname,setgsname] =useState("");
  const [gsdep,setgsdep] =useState("");
  const [gsemail,setgsemail] =useState(""); 
  const [jsname,setjsname] =useState("");
  const [jsdep,setjsdep] =useState("");
  const [jsemail,setjsemail] =useState("");
  const [isname,setisname] =useState("");
  const [isdep,setisdep] =useState("");
  const [isemail,setisemail] =useState("");
  const [mmname,setmmname] =useState("");
  const [mmdep,setmmdep] =useState("");
  const [mmemail,setmmemail] =useState("");
  const [gdname,setgdname] =useState("");
  const [gddep,setgddep] =useState("");
  const [gdemail,setgdemail] =useState("");
  const handleSubmit = () => {
    if (pname.trim()===""|| vpname.trim()===""|| fsname.trim()===""|| gsname.trim()===""|| isname.trim()===""|| mmname.trim()===""|| 
    gdname.trim()==="" || pdep.trim()===""||pemail.trim()===""|| vpdep.trim()===""|| vpemail.trim()===""|| fsdep.trim()===""|| fsemail.trim()===""|| 
    gsdep.trim()===""|| gsemail.trim()===""|| jsdep.trim()===""|| jsemail.trim()===""|| isdep.trim()===""|| isemail.trim()===""||  
    mmdep.trim()===""|| mmemail.trim()===""||gddep.trim()===""||gdemail.trim()==="") {
      Alert.alert("Complete all fields !")
     } else{
      firestore()
      .collection('VoterManagement')
      .doc(email)
      .set({array:[{post:"President",name:pname,dept:pdep,email:pemail},{post:"Vice President",name:vpname,dept:vpdep,email:vpemail},{post:"Finance Secretary",name:fsname,dept:fsdep,email:fsemail},
      {post:"Joint Secretary",name:jsname,dept:jsdep,email:jsemail},{post:"Information Secretary",name:isname,dept:isdep,email:isemail},{post:"Media Manager",name:mmname,dept:mmdep,email:mmemail},{post:"Graphic Designer",name:gdname,dept:gddep,email:gdemail}]})
      .then(() => {
        console.log('User added!');
      });
     }

  }
  return (
    <ScrollView>
    <View style={styles.container}>
     <Text style={styles.header}>Manage Hierarchy</Text>
     <Text style={styles.title}>President</Text>
     <TextInput style={styles.txt} placeholder="Enter name"
      underlineColorAndroid={'transparent'} 
      value={pname}
      onChangeText={(pname) => setpname(pname)}
      
placeholderTextColor='#fff'
      />

     <TextInput style={styles.txt} placeholder="Department"
      underlineColorAndroid={'transparent'}
      value={pdep}
      onChangeText={(pdep) => setpdep(pdep)}
      placeholderTextColor='#fff'/>

     <TextInput style={styles.txt} placeholder="E-mail"
      underlineColorAndroid={'transparent'}
      value={pemail}
      onChangeText={(pemail) => setpemail(pemail)}
      placeholderTextColor='#fff'/>

      
     <Text style={styles.title}>Vice President</Text>
     <TextInput style={styles.txt} placeholder="Enter name"
      underlineColorAndroid={'transparent'}
      value={vpname}
      onChangeText={(vpname) => setvpname(vpname)}
      placeholderTextColor='#fff'/>

     <TextInput style={styles.txt} placeholder="Department"
      underlineColorAndroid={'transparent'}
      value={vpdep}
      onChangeText={(vpdep) => setvpdep(vpdep)}
      placeholderTextColor='#fff'/>

     <TextInput style={styles.txt} placeholder="E-mail"
      underlineColorAndroid={'transparent'}
      value={vpemail}
      onChangeText={(vpemail) => setvpemail(vpemail)}
      placeholderTextColor='#fff'/>
      
     <Text style={styles.title}>Finance Secretary</Text>
     <TextInput style={styles.txt} placeholder="Enter name"
      underlineColorAndroid={'transparent'}
      value={fsname}
      onChangeText={(fsname) => setfsname(fsname)}
      placeholderTextColor='#fff'/>

     <TextInput style={styles.txt} placeholder="Department"
      underlineColorAndroid={'transparent'}
      value={fsdep}
      onChangeText={(fsdep) => setfsdep(fsdep)}
      placeholderTextColor='#fff'/>

     <TextInput style={styles.txt} placeholder="E-mail"
      underlineColorAndroid={'transparent'}
      value={fsemail}
      onChangeText={(fsemail) => setfsemail(fsemail)}
      placeholderTextColor='#fff'/>
      
     <Text style={styles.title}>General Secretary</Text>
     <TextInput style={styles.txt} placeholder="Enter name"
      underlineColorAndroid={'transparent'}
      value={gsname}
      onChangeText={(gsname) => setgsname(gsname)}
      placeholderTextColor='#fff'/>

     <TextInput style={styles.txt} placeholder="Department"
      underlineColorAndroid={'transparent'}
      value={gsdep}
      onChangeText={(gsdep) => setgsdep(gsdep)}
      placeholderTextColor='#fff'/>

     <TextInput style={styles.txt} placeholder="E-mail"
      underlineColorAndroid={'transparent'}
      value={gsemail}
      onChangeText={(gsemail) => setgsemail(gsemail)}
      placeholderTextColor='#fff'/>
      
     <Text style={styles.title}>Joint Secretary</Text>
     <TextInput style={styles.txt} placeholder="Enter name"
      underlineColorAndroid={'transparent'}
      value={jsname}
      onChangeText={(jsname) => setjsname(jsname)}
      placeholderTextColor='#fff'/>

     <TextInput style={styles.txt} placeholder="Department"
      underlineColorAndroid={'transparent'}
      value={jsdep}
      onChangeText={(jsdep) => setjsdep(jsdep)}
      placeholderTextColor='#fff'/>

     <TextInput style={styles.txt} placeholder="E-mail"
      underlineColorAndroid={'transparent'}
      value={jsemail}
      onChangeText={(jsemail) => setjsemail(jsemail)}
      placeholderTextColor='#fff'/>
      
     <Text style={styles.title}>Information Secretary</Text>
     <TextInput style={styles.txt} placeholder="Enter name"
      underlineColorAndroid={'transparent'}
      value={isname}
      onChangeText={(isname) => setisname(isname)}
      placeholderTextColor='#fff'/>
     <TextInput style={styles.txt} placeholder="Department"
      underlineColorAndroid={'transparent'}
      value={isdep}
      onChangeText={(isdep) => setisdep(isdep)}
      placeholderTextColor='#fff'/>
     <TextInput style={styles.txt} placeholder="E-mail"
      underlineColorAndroid={'transparent'}
      value={isemail}
      onChangeText={(isemail) => setisemail(isemail)}
      placeholderTextColor='#fff'/>
      
     <Text style={styles.title}>Media Manager</Text>
     <TextInput style={styles.txt} placeholder="Enter name"
      underlineColorAndroid={'transparent'}
      value={mmname}
      onChangeText={(mmname) => setmmname(mmname)}
      placeholderTextColor='#fff'/>

     <TextInput style={styles.txt} placeholder="Department"
      underlineColorAndroid={'transparent'}
      value={mmdep}
      onChangeText={(mmdep) => setmmdep(mmdep)}
      placeholderTextColor='#fff'/>

     <TextInput style={styles.txt} placeholder="E-mail"
      underlineColorAndroid={'transparent'}
      value={mmemail}
      onChangeText={(mmemail) => setmmemail(mmemail)}
      placeholderTextColor='#fff'/>
      
     <Text style={styles.title}>Graphic Designer</Text>
     <TextInput style={styles.txt} placeholder="Enter name"
      underlineColorAndroid={'transparent'}
      value={gdname}
      onChangeText={(gdname) => setgdname(gdname)}
      placeholderTextColor='#fff'/>
     <TextInput style={styles.txt} placeholder="Department"
      underlineColorAndroid={'transparent'}
      value={gddep}
      onChangeText={(gddep) => setgddep(gddep)}
      placeholderTextColor='#fff'/>
     <TextInput style={styles.txt} placeholder="E-mail"
      underlineColorAndroid={'transparent'}
      value={gdemail}
      onChangeText={(gdemail) => setgdemail(gdemail)}
      placeholderTextColor='#fff'/>
      <TouchableOpacity  style={styles.loginBtn} onPress={handleSubmit}>
        
        <Text style={styles.loginText}>Save</Text>
      </TouchableOpacity>
    </View>
    </ScrollView>
  )
}

export default ManageHierarchy

const styles = StyleSheet.create({
 
  container:{
flex:1,
justifyContent:'center',
backgroundColor:'#36485f',
paddingLeft:30,
paddingRight:30,
  },
header:{
fontSize:24,
color:'#fff',
paddingBottom:10,
marginBottom:30,
borderBottomColor:'#199187',
borderBottomWidth:3,
textAlign:'center',
marginTop:10,
},
title:{
  fontSize:18,
  color:'#fff',
  paddingBottom:10,
  marginBottom:10,
  textAlign:'center',
  borderBottomColor:'#199187',
  borderBottomWidth:2,
  },
  txt:{
height:40,
marginBottom:20,
color:'#fff',
borderBottomColor:'#f8f8f8',
borderBottomWidth:1,
  },
  loginBtn:{
    width: "30%",
    borderRadius: 25,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
    marginBottom: 20,
    backgroundColor: "#fff",
  },

})