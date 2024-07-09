import React, { useState } from 'react'
import { StyleSheet, Text, View,Image, SafeAreaView, ImageBackground, ScrollView} from "react-native";
import { Globalstyles } from '../Styles/globalstyles';
import TopNav from './TopNav';
import Photopost from './Photopost';
import Nav from './Nav';
import Story from './Story/Story';
import MorePost from './MorePost';
import Sidebar from './Sidebar';
// const Tab = createBottomTabNavigator();


const Feed = () => {
  const [sideBar, setSideBar] = useState(false)
  function openCloseSideBar(){
    setSideBar(!sideBar)
    console.log('sidebar')
  }
  function closesidebar(){
    setSideBar(false)
    console.log('sidebar')
  }
  return (
    <SafeAreaView style={Globalstyles.Home}>
    {
      sideBar && <Sidebar/>
    }
    <TopNav sidebar={openCloseSideBar} />
    <Story/>
    <Nav/>
    <Photopost/>
</SafeAreaView>
  )
}

export default Feed