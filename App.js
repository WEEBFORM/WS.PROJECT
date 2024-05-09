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

const Stack = createNativeStackNavigator()


export default function App() {
  console.log("firstlove");
  return (
    <TouchableWithoutFeedback onPress={()=>{
      Keyboard.dismiss()
    }}>
    <View style={Globalstyles.container}>
    <NavigationContainer>
    <Stack.Navigator screenOptions={{
      headerStyle:{
        backgroundColor: 'transperent'
      }
    }}>
      <Stack.Screen name='Home' component={Screenone} />
      <Stack.Screen name='Weebform' component={ScreenTwo} />
    </Stack.Navigator>
    {/* <LinearGradient colors={['#CF833F', '#A54A15', '#6C2A04']} style={Globalstyles.linearGradient}> */}
      {/* <View style={Globalstyles.welcomeCon}>
        <Welcome />
      </View> */}
      {/* <ImageBackground style={Globalstyles.ImageBg} source={require('./src/assets/bg1.png')} resizeMode="cover" >
      <View style={Globalstyles.welcomeOneCon}>
        <WelcomeOne />
      </View>
        </ImageBackground> */}
      {/* <ImageBackground style={Globalstyles.ImageBg} source={require('./src/assets/bg2.png')} resizeMode="cover" >
      <View style={Globalstyles.welcomeOneCon}>
        <WelcomeTwo />
      </View> 
      </ImageBackground> */}
      {/* <ImageBackground style={Globalstyles.ImageBg} source={require('./src/assets/bg3.png')} resizeMode="cover" >
      <View style={Globalstyles.welcomeOneCon}>
        <WelcomeThree />
      </View> 
      </ImageBackground> */}
      {/* <View style={Globalstyles.form}>
        <CreateAcct/>
      </View> */}
      {/* <View style={Globalstyles.form}>
        <Login/>
      </View> */}
      {/* <View style={Globalstyles.forgot}>
        <ForgotPassword/>
      </View> */}
      {/* <View style={Globalstyles.forgot}>
        <Otp/>
      </View> */}
      {/* <View style={Globalstyles.forgot}>
        <Reset/>
      </View> */}
      {/* </LinearGradient> */}
      </NavigationContainer>
    </View>
    </TouchableWithoutFeedback>
    
  );
}
