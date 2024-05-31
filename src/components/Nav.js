import React from 'react'
import { StyleSheet, Text, View, SafeAreaView, ImageBackground, Image} from "react-native";
import Explore from '../pages/Explore';
import WhoToFollow from '../pages/WhoToFollow';
import NewPost from '../pages/NewPost';
import News from '../pages/News';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';



const Tab = createBottomTabNavigator();


const Nav = () => {
  return (
    <View style={styles.layout}>
        <Text style={styles.text}>
            Explore
        </Text>
        <Text style={styles.text}>New post</Text>
        <Text style={styles.text}>Who to follow</Text>
        <Image style={styles.images} source={require('../assets/news.png')} />
    </View>
    // <Tab.Navigator>
    // <Tab.Screen name='Explore' component={Explore}/>
    //   <Tab.Screen name="Who to follow" component={WhoToFollow} />
    //   <Tab.Screen name="New Post" component={NewPost} />
    //   <Tab.Screen name="News" component={News} />
    // </Tab.Navigator>
  )
}


const styles = StyleSheet.create({
    layout:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 10,
        paddingVertical: 10,
        marginBottom: 10
    },
    text:{
        color: 'white',
        fontSize: 16
    }
})

export default Nav