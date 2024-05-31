import React from 'react'
import { StyleSheet, Text, View, Image, FlatList, SafeAreaView, ImageBackground} from "react-native";

const DATA =[
    {
        id: '1',
        name: 'Shedrach',
        username: 'Shezzy',
        following: true,
        text: 'Catch me if you can',
        photo: true,
    },
    {
        id: '2',
        name: 'Bill gates',
        username: 'Shezzy',
        following: true,
        text: 'Catch me if you can',
        photo: false,
    },
    {
        id: '3',
        name: 'Shedrach',
        username: 'Shezzy',
        following: true,
        text: 'Catch me if you can',
        photo: true,
    },
    {
        id: '4',
        name: 'Shedrach',
        username: 'Shezzy',
        following: true,
        text: 'Catch me if you can',
        photo: false,
    },
    {
        id: '5',
        name: 'Bill gates',
        username: 'Shezzy',
        following: true,
        text: 'Catch me if you can',
        photo: true,
    },
    {
        id: '6',
        name: 'Shedrach',
        username: 'Shezzy',
        following: true,
        text: 'Catch me if you can',
        photo: false,
    },
]



const Photopost = () => {
  return (
    <View style={styles.container}>
        <FlatList
        contentContainerStyle={{flexGrow:1}}
            data={DATA}
            renderItem={({item})=>(
                <View style={styles.layout}>
    <Image source={require('../assets/postInd.png')} style={styles.ind} />
        <View style={styles.top}>
        <View style={styles.topLeft}>
            <View>
                <Image style={styles.pfp} source={require('../assets/pfp.png')} />
            </View>
            <View style={styles.topMiddle}>
                <View>
                    <Text style={styles.text}>{item.name}</Text>
                    <Text style={styles.text}>@Shezzy</Text>
                </View>
                <View><Text style={styles.follow}>Follow</Text></View>
            </View>
            </View>
            <View><Image source={require('../assets/more.png')} /></View>
        </View>
        <View style={styles.middle}>
            <Text style={styles.maintext}>Catch me if you can...😂😂😂</Text>
            <View>
            {item.photo && <Image style={styles.photo} source={require('../assets/photopost.png')} />}
            </View>
        </View>
        <View style={styles.bottom}>
            <View><Image source={require('../assets/like.png')} /></View>
            <View><Image source={require('../assets/comment.png')} /></View>
            <View><Image source={require('../assets/repost.png')} /></View>
            <View><Image source={require('../assets/save.png')} /></View>
            <View><Image source={require('../assets/share.png')} /></View>
        </View>
    </View>
            )}
            keyExtractor={(item)=> item.id}
        />
    </View>
    
  )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        // borderWidth: 3,
        borderColor: 'white',
    },
    layout:{
        marginVertical: 0,
        position: 'relative',
        paddingHorizontal: 20,
        // borderWidth: 3,
        borderColor: 'white'
    },
    ind:{
        position: 'absolute',
        left: 0,
        top: 15
    },
    top:{
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
        justifyContent: 'space-between',
        paddingVertical: 10,
    },
    topLeft:{
        flexDirection: 'row',
        gap: 10
    },
    topMiddle:{
        flexDirection: 'row',
        gap: 20
    },
    pfp:{
        width: 60,
        height: 60,
        borderRadius: 50
    },
    text:{
        color: 'white',
        fontSize: 16,
        lineHeight: 22
    },
    follow:{
        color: '#cf833f',
        fontSize: 16,
        lineHeight: 22
    },
    maintext:{
        color: 'white',
        fontSize: 18,
        lineHeight: 22
    },
    middle:{
        paddingVertical: 5,
        flexDirection: 'column',
        gap: 20
        // paddingHorizontal: 20
    }, 
    photo:{
        width: '100%'
    },
    bottom:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 15, 
        borderTopColor: '#141313',
        borderTopWidth: 1,
        marginBottom: 10
    }
})


export default Photopost