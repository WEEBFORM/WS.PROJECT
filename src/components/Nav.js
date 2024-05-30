import React from 'react'
import { StyleSheet, Text, View, SafeAreaView, ImageBackground, Image} from "react-native";


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
  )
}


const styles = StyleSheet.create({
    layout:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 10,
        paddingVertical: 10,
        marginBottom: 20
    },
    text:{
        color: 'white',
        fontSize: 16
    }
})

export default Nav