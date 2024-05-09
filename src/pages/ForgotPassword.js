import React from 'react'
import { StyleSheet, Text, View, SafeAreaView, Image, TextInput } from "react-native";
import { Globalstyles } from '../Styles/globalstyles';
import ButtonComp from '../components/ButtonComp';

const ForgotPassword = () => {
  return (
    <SafeAreaView>
        <View style={styles.layout}>
            <View style={styles.headerCon}>
                <Text style={styles.header}>Forgot your password?</Text>
                <Text style={styles.headerTxt}>Enter your registered email below to receive password reset instructions</Text>
            </View>
            <View style={styles.imgCon}>
                <Image source={require('../assets/mailbox.png')} />
            </View>
            <View style={styles.inputCon}>
                <TextInput placeholderTextColor='#B1B1B1' placeholder='Your email address' inputMode='email' textContentType='emailAddress' style={Globalstyles.formInput} />
                <Text style={{color:'#908A8A'}}>Remember password? <Text style={{color:'#CF833F'}}>Login</Text></Text>
            </View>
            <View style={styles.btnCon}>
            <ButtonComp text='Send'/>
            </View>
        </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    layout:{
        gap: 10
    },
    headerCon:{
        alignItems: 'center',
        gap: 30
    },
    header:{
        fontSize: 30,
        color: '#908A8A'
    },
    headerTxt:{
        textAlign:'center',
        color: '#908A8A',
        fontSize: '18'
    },
    imgCon:{
        alignItems: 'center'
    },
    inputCon:{
        padding: 15,
        gap: 10
    },
    btnCon:{
        alignItems: 'center',
    }
})

export default ForgotPassword