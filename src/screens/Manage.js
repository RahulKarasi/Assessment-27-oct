import { View, Text, StyleSheet, ScrollView, Image } from 'react-native'
import React from 'react'
import Header from '../components/Header'
import AccountDetail from '../components/AccountDetail'
import OfferRail from '../components/OfferRail'
import ReferSection from '../components/ReferSection'
import Shortcuts from '../components/Shortcuts'

const Manage = () => {
  return (
    <View style={{flex:1}}>
      <Header/>
      <ScrollView >
      <View style={styles.mainContainer}>
        <AccountDetail/>
        <View style={styles.enable5G}>
            <Image style={styles.airtelLogo} source={require('../assets/icons/airtelLogo.webp')}/>
            <Text style={styles.enableTxt}>Check if your phone is 5G enabled</Text>
            <Image style={styles.nextIcon} source={require('../assets/icons/next.png')}/>
        </View>
        <OfferRail style={styles.offerSection}/>
        <ReferSection/>
        <Shortcuts heading='SHORTCUTS'/>
        <Shortcuts heading='BUY NEW SERVICE'/>
      </View>
      </ScrollView>
      
    </View>
  )
}

const styles=StyleSheet.create({
    mainContainer:{
        backgroundColor:'rgb(240,240,250)',
        marginTop:12
    },
    enable5G:{
        flexDirection:'row',
        backgroundColor:'rgb(255,255,255)',
        height:54,
        marginHorizontal:24,
        borderRadius:20,
        alignItems:'center',
        justifyContent:'space-around',
        paddingHorizontal:10
    },
    airtelLogo:{
        width:75,
        height:49
    },
    nextIcon:{
        width:22,
        height:24
    },
    enableTxt:{
        fontSize:12.5
    },
    
    
})

export default Manage