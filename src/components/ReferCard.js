import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'

const ReferCard = (props) => {
  return (
    <View style={styles.card}>
        <Image style={styles.img} source={props.path} />
        <Text style={styles.name}>{props.name}</Text>
    </View>
  )
}

const styles= StyleSheet.create({
    img:{
        height:34,
        width:34,
        marginBottom:5
    },
    card:{
       backgroundColor: 'rgb(246,246,254)',
       alignItems:'center',
       justifyContent: 'center',
       width:110,
       borderRadius:20,
       shadowOpacity: 0.1,
       padding:8

    },
    name: {
        textAlign: 'center',
        marginBottom:5,

    }
})

export default ReferCard