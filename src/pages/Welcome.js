import React from "react";
import { View, SafeAreaView, Text, StyleSheet, Image } from "react-native";
import { Globalstyles } from "../Styles/globalstyles";

const Welcome = () => {
  return ( 
         <SafeAreaView>
         <Image source={require('../assets/logo.png')} />
        {/* <Text>Welcome</Text> */}
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
    welcome : {
        flex: 1,
        background: 'linear-gradient(180deg, #CF833F 0%, #A54A15 47.5%, #6C2A04 100%);', 
        alignItems: 'center',
        border: '2px solid black',
        // backgroundColor: '#A54A15',
        justifyContent: 'center'
    }
})

export default Welcome;
