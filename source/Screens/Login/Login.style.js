import { StyleSheet } from 'react-native';
export default StyleSheet.create({
  container:{
    flex: 1,
   borderColor : 'gray',
    alignItems: "center",
    justifyContent: "center",
  
  },
  TextInput:{
    height: 50,
    flex: 1,
    padding: 10,
    marginLeft: 20,
  },
  inputView:{
    backgroundColor: 'white',
    borderRadius: 30,
    height: 40,
    width: '90%',
    margin: 10,
    marginBottom: 20,
    alignItems: "center",
  },
  forgot_button: {
    height: 20
  },
  loginBtn:{
      width: "30%",
      borderRadius: 25,
      height: 50,
      alignItems: "center",
      justifyContent: "center",
      marginTop: 30,
      backgroundColor: "#f5ac58",
    },
    register_btn:{
      width: "30%",
      borderRadius: 25,
      height: 40,
      alignItems: "center",
      justifyContent: "center",
      marginTop: 30,
      backgroundColor: "#f5cc9d",
    },
    Image: {
      marginBottom: 40,
    },
    
  });