import React from 'react'
import { StyleSheet, Text, View, SafeAreaView, ImageBackground, ScrollView} from "react-native";
import { Globalstyles } from '../Styles/globalstyles';
import Nav from '../components/Nav';
import TopNav from '../components/TopNav';
import Textpost from '../components/Textpost';
import Photopost from '../components/Photopost';
import Videopost from '../components/Videopost';
import Story from '../components/Story/Story';
import EachStory from '../components/Story/EachStory';
import Menu from '../components/Menu';
import PostOptions from '../components/PostOptions';


const Home = () => {
  return (
    <View style={Globalstyles.Home}>
        <TopNav/>
        <Nav/>
        <Photopost/>
        <Menu/>
    </View>
  )
}

const styles = StyleSheet.create({
    text:{
        color: 'white'
    }
})

export default Home