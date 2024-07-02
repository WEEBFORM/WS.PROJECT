import React from 'react'
import { StyleSheet, Text, View,Image, SafeAreaView, ImageBackground, ScrollView} from "react-native";
import { Globalstyles } from '../Styles/globalstyles';
import TopNav from './TopNav';
import Photopost from './Photopost';
import Nav from './Nav';
import Story from './Story/Story';
import MorePost from './MorePost';
// const Tab = createBottomTabNavigator();


const Feed = () => {
  return (
    <SafeAreaView style={Globalstyles.Home}>
    <TopNav/>
    <Story/>
    <Nav/>
    <Photopost/>
</SafeAreaView>
  )
}

export default Feed