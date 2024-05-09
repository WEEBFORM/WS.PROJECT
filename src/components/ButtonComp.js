import React from 'react'
import { View, Button } from 'react-native'
import { Globalstyles } from '../Styles/globalstyles'

const ButtonComp = ({text, nav, screen}) => {
  return (
    <View style={Globalstyles.buttonCon}>
    <Button title={text} color='#fff' onPress={()=>{
      console.log('food')
      navigate.nav('Weebform')
    }} />
    </View>
  )
}

export default ButtonComp