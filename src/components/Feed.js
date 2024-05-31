import React from 'react'
import { StyleSheet, Text, View,Image, SafeAreaView, ImageBackground, ScrollView} from "react-native";
import { Globalstyles } from '../Styles/globalstyles';
import TopNav from './TopNav';
import Photopost from './Photopost';
import Nav from './Nav';

// const Tab = createBottomTabNavigator();


const Feed = () => {
  return (
    <SafeAreaView style={Globalstyles.Home}>
    <TopNav/>
    <Nav/>
    <Photopost/>
</SafeAreaView>
  )
}

export default Feed