import React from 'react'
import { StyleSheet, Text, View, SafeAreaView, Image, TextInput } from "react-native";
import ButtonComp from '../components/ButtonComp';
import { Globalstyles } from '../Styles/globalstyles';

const Login = () => {
  return (
    <SafeAreaView>
        <View style={styles.layout}>
        <View style={styles.header}>
        <Image source={require('../assets/logo2.png')} />
        <Text style={Globalstyles.formHeader}>Login to Your Account</Text>
        </View>
        <View style={styles.mainform}>

        <View style={styles.inputCon}>
        <TextInput placeholderTextColor='#B1B1B1' placeholder='Your email address' inputMode='email' textContentType='emailAddress' style={Globalstyles.formInput}/>
        </View>

        <View style={styles.inputCon}>
        <TextInput placeholderTextColor='#B1B1B1' placeholder='Password' textContentType='password' style={Globalstyles.formInput}/>
        </View>
        </View>
        <View style={styles.signupCon}>
        <ButtonComp text="Login" />
        <Text style={{color:'#CF833F'}}>Forgot your password?</Text>
            <Text  style={{color:'#fff'}}>Don't have an account? <Text style={{color:'#CF833F'}}>Sign up</Text></Text>
        </View>
        </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    layout:{
        gap: 0,
    },
    header: {
        alignItems: 'center',
        marginTop: 30
    },
    mainform:{
        gap: 15,
        marginTop: 50
    },
    inputCon:{
        gap: 10
    },
    signupCon:{
        gap: 15,
        alignItems: 'center'
    }
})

export default Login