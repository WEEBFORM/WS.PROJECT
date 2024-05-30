import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, SafeAreaView, ImageBackground, TouchableWithoutFeedback, Keyboard } from "react-native";
import LinearGradient from 'react-native-linear-gradient';
import Welcome from "./src/pages/Welcome";
import WelcomeOne from "./src/pages/WelcomeOne";
import WelcomeTwo from "./src/pages/WelcomeTwo";
import WelcomeThree from "./src/pages/WelcomeThree";
import CreateAcct from "./src/pages/CreateAcct";
import Login from "./src/pages/Login";
import ForgotPassword from "./src/pages/ForgotPassword";
import Otp from "./src/pages/Otp";
import Reset from "./src/pages/Reset";
import { Globalstyles } from "./src/Styles/globalstyles";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Screenone from "./src/Screens/Screenone";
import ScreenTwo from "./src/Screens/ScreenTwo";
import ScreenThree from "./src/Screens/ScreenThree";
import Home from "./src/pages/Home";
import Textpost from "./src/components/Textpost";
import Photopost from "./src/components/Photopost";

const Stack = createNativeStackNavigator()


export default function App() {
  console.log("firstlove");
  return (
    // <TouchableWithoutFeedback onPress={()=>{
    //   Keyboard.dismiss()
    // }}>
    <View style={Globalstyles.container}>
    {/* <NavigationContainer>
    <Stack.Navigator screenOptions={{
      headerStyle:{
        backgroundColor: 'transperent'
      }
    }}>
      <Stack.Screen name='Home' component={Screenone} options={{
        title: 'WEEBFORM',
        headerStyle:{
          backgroundColor: 'transparent',
        },
        headerTintColor: 'white',
        headerTransparent: true ,
        headerTitleStyle: {
          fontSize: 20
        }
      }} />
      <Stack.Screen name='Welcome1' component={ScreenTwo} options={{
        title: 'WEEBFORM',
        headerStyle:{
          backgroundColor: 'transparent',
        },
        headerTintColor: 'white',
        headerTransparent: true ,
        headerTitleStyle: {
          fontSize: 20
        },
        headerBackTitleVisible: false,
        headerBackVisible:false 
      }} />
      <Stack.Screen name='Welcome2' component={ScreenThree} options={{
        title: 'WEEBFORM',
        headerStyle:{
          backgroundColor: 'transparent',
        },
        headerTintColor: 'white',
        headerTransparent: true ,
        headerTitleStyle: {
          fontSize: 20
        },
        headerBackTitleVisible: false,
        headerBackVisible:false 
      }} />
      <Stack.Screen name='Create' component={CreateAcct} options={{
        title: 'Create an Account',
        headerStyle:{
          backgroundColor: 'transparent',
        },
        headerTintColor: 'white',
        headerTransparent: true ,
        headerTitleStyle: {
          fontSize: 20
        },
        headerBackTitleVisible: false,
        headerBackVisible:false 
      }} />
      <Stack.Screen name='Login' component={Login} options={{
        title: 'Login',
        headerStyle:{
          backgroundColor: 'transparent',
        },
        headerTintColor: 'white',
        headerTransparent: true ,
        headerTitleStyle: {
          fontSize: 20
        },
        headerBackTitleVisible: false,
        headerBackVisible:false 
      }} />
      <Stack.Screen name='Forgot your password' component={ForgotPassword} options={{
        title: 'Forgot your password',
        headerStyle:{
          backgroundColor: 'transparent',
        },
        headerTintColor: 'white',
        headerTransparent: true ,
        headerTitleStyle: {
          fontSize: 20
        },
        headerBackTitleVisible: false,
        headerBackVisible:false 
      }} />
    </Stack.Navigator>
   
      </NavigationContainer> */}
      <Home/>
    </View>
    // </TouchableWithoutFeedback>
    
  );
}
