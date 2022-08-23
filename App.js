import React,{Component, useState} from 'react';
import { StyleSheet,Text,ScrollView,View,Image,TextInput,Button,TouchableOpacity} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Login from './source/Screens/Login/Login';
import Register from './source/Screens/Register/Register';
import Home from './source/Screens/Home';
import SuperAdmin from './source/Screens/SuperAdmin';
import Coordinator from './source/Screens/Coordinator';
import Socities from './source/Screens/User/Socities';
import ApplyforCand from './source/Screens/User/ApplyforCand';
import Vote from './source/Screens/User/Vote';
import Results from './source/Screens/User/Results';
import ResultDetails from './source/Screens/User/ResultDetails';
import ComplainManage from './source/Screens/adminpanel/ComplaintManage';
import CoordinatorManage from './source/Screens/adminpanel/CoordinatorManage';
import SocitiesManage from './source/Screens/adminpanel/SocitiesManage';
import MySocities from './source/Screens/CoordinatorPanel/MySocities';
import ManageHierarchy from './source/Screens/CoordinatorPanel/ManageHierarchy';
import VoterManagement from './source/Screens/CoordinatorPanel/VoterManagement';
import CheckResults from './source/Screens/CoordinatorPanel/CheckResults';
import CoordinatorComplaints from './source/Screens/CoordinatorPanel/CoordinatorComplaints';
import ComplainUs from './source/Screens/User/ComplainUs';
import Mainlogin from './source/Screens/Login/Mainlogin';
import AdminLogin from './source/Screens/Login/AdminLogin';
import CoordinatorLogin from './source/Screens/Login/CoordinatorLogin';
import Forgot from './source/Screens/Login/Forgot';
import CoordinatorHierarchy from './source/Screens/User/CoordinatorHierarchy';
import Forgotcoordinator from './source/Screens/CoordinatorPanel/Forgotcoordinator';
import VoteNow from './source/Screens/User/VoteNow';

const  App=()=>{
 
  const Stack=createStackNavigator();

    return (
      
      <NavigationContainer >
     <Stack.Navigator initialRouteName="MainLogin">
      <Stack.Screen name="Login" component={Login}
      options ={{  
        headerTitleStyle:{
          fontSize:25,
          color: '#fff',
        },
        headerStyle: {
          backgroundColor: '#94baf2',
        },
        headerTitle:"Student Login",
        headerTitleAlign:"center", }}/>
      <Stack.Screen name="MainLogin" component={Mainlogin}
       options ={{  headerShown: false}}/>     
      <Stack.Screen name="AdminLogin" component={AdminLogin}
      options ={{  
        headerTitleStyle:{
          fontSize:25,
          color: '#fff',
        },
        headerStyle: {
          backgroundColor: '#94baf2',
        },
        headerTitle:"Admin Login",
        headerTitleAlign:"center", }}/>
      <Stack.Screen name="CoordinatorLogin" component={CoordinatorLogin}
      options ={{  
        headerTitleStyle:{
          fontSize:25,
          color: '#fff',
        },
        headerStyle: {
          backgroundColor: '#94baf2',
        },
        headerTitle:"Coordinator Login",
        headerTitleAlign:"center", }}/>
      <Stack.Screen name="Register" component={Register}
      options ={{  
        headerTitleStyle:{
          fontSize:25,
          color: '#fff',
        },
        headerStyle: {
          backgroundColor: '#94baf2',
        },
        headerTitle:"Student Registration",
        headerTitleAlign:"center", }}/>
       <Stack.Screen name="Home" component={Home}
      options ={{  
        headerTitleStyle:{
          fontSize:25,
          color: '#fff',
        },
        headerStyle: {
          backgroundColor: '#94baf2',
        },
        headerTitle:"E-Society",
        headerTitleAlign:"center", }} />
      <Stack.Screen name="SuperAdmin" component={SuperAdmin}
      options ={{  
        headerTitleStyle:{
          fontSize:25,
          color: '#fff',
        },
        headerStyle: {
          backgroundColor: '#94baf2',
        },
        headerTitle:"Admin Panel",
        headerTitleAlign:"center", }}/>
        
      <Stack.Screen name="Coordinator" component={Coordinator}
       options ={{  
        headerTitleStyle:{
          fontSize:25,
          color: '#fff',
        },
        headerStyle: {
          backgroundColor: '#94baf2',
        },
        headerTitle:"Coordinator",
        headerTitleAlign:"center", }}/>
           <Stack.Screen name="Socities" component={Socities}/>  
           <Stack.Screen name="CoordinatorHierarchy" component={CoordinatorHierarchy}/>  
           <Stack.Screen name="ApplyforCand" component={ApplyforCand}
           options ={{  
            headerTitleStyle:{
              fontSize:25,
              color: '#fff',
            },
            headerStyle: {
              backgroundColor: '#94baf2',
            },
            headerTitle:"Candidates apply inform",
            headerTitleAlign:"center", }}/>
           <Stack.Screen name="Vote" component={Vote}
           options ={{  
            headerTitleStyle:{
              fontSize:25,
            },
            headerTitle:"Vote Now",
            headerTitleAlign:"center", }}/>
             <Stack.Screen name="VoteNow" component={VoteNow}
           options ={{  
            headerTitleStyle:{
              fontSize:25,
            },
            headerTitle:"Vote Now",
            headerTitleAlign:"center", }}/>
          <Stack.Screen name="Results" component={Results}
           options ={{  
            headerTitleStyle:{
              fontSize:25,
            },
            headerTitle:"Result's Details",
            headerTitleAlign:"center", }} /> 
                   <Stack.Screen name="ResultDetails" component={ResultDetails}
           options ={{  
            headerTitleStyle:{
              fontSize:25,
            },
            headerTitle:"Voting Result's",
            headerTitleAlign:"center", }} /> 
          <Stack.Screen name="Complaints" component={ComplainManage}/>  
          <Stack.Screen name="Coordinators" component={CoordinatorManage}/>  
          <Stack.Screen name="Socities-Management" component={SocitiesManage}/> 
          <Stack.Screen name="My-Socities" component={MySocities}/>  
          <Stack.Screen name="Manage-Hierarchy" component={ManageHierarchy}
          options ={{  
            headerShown: false,
          }}/> 
          <Stack.Screen name="Voter-Management" component={VoterManagement}/>
          <Stack.Screen name="Check-Results" component={CheckResults}/>
          <Stack.Screen name="Coordinator-Complaints" component={CoordinatorComplaints}/>
          <Stack.Screen name="Complaint-Us" component={ComplainUs}/> 
          <Stack.Screen name="Forgott" component={Forgot}/>
          <Stack.Screen name="forgotcoordinator" component={Forgotcoordinator}
           options ={{  
            headerTitleStyle:{
              fontSize:25,
              color: '#fff',
            },
            headerStyle: {
              backgroundColor: '#94baf2',
            },
            headerTitle:" Update password !",
            headerTitleAlign:"center", }}/>
     </Stack.Navigator>
    </NavigationContainer>
    
    );
  }
export default App;
