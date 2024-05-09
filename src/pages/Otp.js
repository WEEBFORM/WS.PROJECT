import React from 'react'
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import ButtonComp from '../components/ButtonComp';
import OtpInput from '../components/OtpInput';

const Otp = () => {
  return (
    <SafeAreaView>
        <View style={styles.layout}>
            <View style={styles.headerCon}>
                <Text style={styles.header}>Email has been sent!</Text>
                <Text style={styles.headerTxt}>Please check your inbox and enter your verification code to reset password</Text>
            </View>
            <OtpInput/>
            <View style={styles.btnCon}>
            <ButtonComp text='Verify'/>
            <Text style={{color:'#908A8A'}}>Didn't receive the code? <Text style={{color:'#CF833F'}}>Resend</Text></Text>
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
    inputCon:{
        padding: 15,
        gap: 10
    },
    btnCon:{
        alignItems: 'center',
        gap: 10
    }
})

export default Otp