import { StyleSheet, Text, View,ScrollView,TextInput ,TouchableOpacity} from 'react-native'
import React ,{useState,Component} from 'react'
const ManageHierarchy = (props) => {


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
    if (pname.trim()===""|| vpname.trim()===""|| fsname.trim()===""|| gsname.trim()===""|| isname.trim()===""|| mmname.trim()===""|| gdname.trim()==="" ) {
      return setError("Complete all fields !")
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
      onChangeText={(pdep) => setpdep(pdep)}/>

     <TextInput style={styles.txt} placeholder="E-mail"
      underlineColorAndroid={'transparent'}
      value={pemail}
      onChangeText={(pemail) => setpemail(pemail)}/>

      
     <Text style={styles.title}>Vice President</Text>
     <TextInput style={styles.txt} placeholder="Enter name"
      underlineColorAndroid={'transparent'}
      value={vpname}
      onChangeText={(vpname) => setvpname(vpname)}/>

     <TextInput style={styles.txt} placeholder="Department"
      underlineColorAndroid={'transparent'}
      value={vpdep}
      onChangeText={(vpdep) => setvpdep(vpdep)}/>

     <TextInput style={styles.txt} placeholder="E-mail"
      underlineColorAndroid={'transparent'}
      value={vpemail}
      onChangeText={(vpemail) => setvpemail(vpemail)}/>
      
     <Text style={styles.title}>Finance Secretary</Text>
     <TextInput style={styles.txt} placeholder="Enter name"
      underlineColorAndroid={'transparent'}
      value={fsname}
      onChangeText={(fsname) => setfsname(fsname)}/>

     <TextInput style={styles.txt} placeholder="Department"
      underlineColorAndroid={'transparent'}
      value={fsdep}
      onChangeText={(fsdep) => setfsdep(fsdep)}/>

     <TextInput style={styles.txt} placeholder="E-mail"
      underlineColorAndroid={'transparent'}
      value={fsemail}
      onChangeText={(fsemail) => setfsemail(fsemail)}/>
      
     <Text style={styles.title}>General Secretory</Text>
     <TextInput style={styles.txt} placeholder="Enter name"
      underlineColorAndroid={'transparent'}
      value={gsname}
      onChangeText={(gsname) => setgsname(gsname)}/>

     <TextInput style={styles.txt} placeholder="Department"
      underlineColorAndroid={'transparent'}
      value={gsdep}
      onChangeText={(gsdep) => setgsdep(gsdep)}/>

     <TextInput style={styles.txt} placeholder="E-mail"
      underlineColorAndroid={'transparent'}
      value={gsemail}
      onChangeText={(gsemail) => setgsemail(gsemail)}/>
      
     <Text style={styles.title}>Joint Secretory</Text>
     <TextInput style={styles.txt} placeholder="Enter name"
      underlineColorAndroid={'transparent'}
      value={jsname}
      onChangeText={(jsname) => setjsname(jsname)}/>

     <TextInput style={styles.txt} placeholder="Department"
      underlineColorAndroid={'transparent'}
      value={jsdep}
      onChangeText={(jsdep) => setjsdep(jsdep)}/>

     <TextInput style={styles.txt} placeholder="E-mail"
      underlineColorAndroid={'transparent'}
      value={jsemail}
      onChangeText={(jsemail) => setjsemail(jsemail)}/>
      
     <Text style={styles.title}>Information Secretary</Text>
     <TextInput style={styles.txt} placeholder="Enter name"
      underlineColorAndroid={'transparent'}
      value={isname}
      onChangeText={(isname) => setisname(isname)}/>
     <TextInput style={styles.txt} placeholder="Department"
      underlineColorAndroid={'transparent'}
      value={isdep}
      onChangeText={(isdep) => setisdep(isdep)}/>
     <TextInput style={styles.txt} placeholder="E-mail"
      underlineColorAndroid={'transparent'}
      value={isemail}
      onChangeText={(isemail) => setisemail(isemail)}/>
      
     <Text style={styles.title}>Media Manager</Text>
     <TextInput style={styles.txt} placeholder="Enter name"
      underlineColorAndroid={'transparent'}
      value={mmname}
      onChangeText={(mmname) => setmmname(mmname)}/>

     <TextInput style={styles.txt} placeholder="Department"
      underlineColorAndroid={'transparent'}
      value={mmdep}
      onChangeText={(mmdep) => setmmdep(mmdep)}/>

     <TextInput style={styles.txt} placeholder="E-mail"
      underlineColorAndroid={'transparent'}
      value={mmemail}
      onChangeText={(mmemail) => setmmemail(mmemail)}/>
      
     <Text style={styles.title}>Graphic Designer</Text>
     <TextInput style={styles.txt} placeholder="Enter name"
      underlineColorAndroid={'transparent'}
      value={gdname}
      onChangeText={(gdname) => setgdname(gdname)}/>
     <TextInput style={styles.txt} placeholder="Department"
      underlineColorAndroid={'transparent'}
      value={gddep}
      onChangeText={(gddep) => setgddep(gddep)}/>
     <TextInput style={styles.txt} placeholder="E-mail"
      underlineColorAndroid={'transparent'}
      value={gdemail}
      onChangeText={(gdemail) => setgdemail(gdemail)}/>
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
placeholderTextColor:'#fff',
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