import React from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  TextInput,
} from "react-native";

const OtpInput = () => {
  return (
    <View>
    <View style={styles.inputCon}>
      <TextInput style={styles.input} maxLength='1' keyboardType="numeric" />
      <TextInput style={styles.input} maxLength='1' keyboardType="numeric" />
      <TextInput style={styles.input} maxLength='1' keyboardType="numeric" />
      <TextInput style={styles.input} maxLength='1' keyboardType="numeric" />
    </View>
    <View>
        <Text style={{color:'#908A8A', textAlign: 'center'}}>Code expires in <Text>03:33</Text></Text>
    </View>
    </View>
  );
};

const styles = StyleSheet.create({
    inputCon:{
        flexDirection: 'row',
        justifyContent:'space-around',
        paddingVertical: 40
    },
    input:{
    borderWidth: 1,
    paddingHorizontal: 30,
    paddingVertical: 25,
    borderRadius: 15,
    borderColor: '#EB9E71',
    color:'white',
    fontSize: '20px',
    }
})

export default OtpInput;
