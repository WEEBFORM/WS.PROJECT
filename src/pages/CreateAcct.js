import React from 'react'
import { StyleSheet, Text, View, SafeAreaView, Image, TextInput, Che } from "react-native";
import ButtonComp from '../components/ButtonComp';
import { Globalstyles } from '../Styles/globalstyles';

const CreateAcct = () => {
  return (
    <SafeAreaView>
        <View style={styles.layout}>
        <View style={styles.header}>
        <Image source={require('../assets/logo2.png')} />
        <Text style={Globalstyles.formHeader}>Create Your Account</Text>
        </View>
        <View style={styles.mainform}>

        <View style={styles.inputCon}>
        <TextInput placeholderTextColor='#B1B1B1' placeholder='@Username' style={Globalstyles.formInput} />
        <Text style={styles.inputConText}>Between 2 to 15 characters</Text>
        </View>

        <View style={styles.inputCon}>
        <TextInput placeholderTextColor='#B1B1B1' placeholder='Your email address' inputMode='email' textContentType='emailAddress' style={Globalstyles.formInput}/>
        <Text style={styles.inputConText}>Between 2 to 15 characters</Text>
        </View>

        <View style={styles.inputCon}>
        <TextInput placeholderTextColor='#B1B1B1' placeholder='Choose password' textContentType='password' style={Globalstyles.formInput}/>
        <Text style={styles.inputConText}>Must be at least 6 characters</Text>
        </View>
        <View>
          <TextInput/>
          <Text  style={{color:'#fff'}}> I agree to the terms and conditions</Text>
        </View>
        </View>
        <View style={styles.signupCon}>
        <ButtonComp text="Sign up" />
            <Text  style={{color:'#fff'}}>Alredy have an account? <Text style={{color:'#CF833F'}}>Log in</Text></Text>
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
        marginTop: 30
    },
    inputCon:{
        gap: 10
    },
    inputConText:{
        marginLeft: 10,
        color: '#CF833F'
    },
    signupCon:{
        gap: 15,
        alignItems: 'center'
    }
})

export default CreateAcct