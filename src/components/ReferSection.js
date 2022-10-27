import { View, Text,StyleSheet } from 'react-native'
import React from 'react'
import ReferCard from './ReferCard'

const ReferSection = () => {

    const data = [
        {
            path: require('../assets/icons/call.png'),
            name:'missed \ncall alerts'
        },
        {
            path: require('../assets/icons/reward.png'),
            name:'rewards &\n coupons'
        },
        {
            path: require('../assets/icons/refer.png'),
            name:'refer \nprepaid'
        },
    ]

  return (
    <View style={styles.referSection}>
        {data.map(element =>{
            return(
                <ReferCard path={element.path} name={element.name} />
            )
        })}
      
    </View>
  )
}

const styles = StyleSheet.create({
    referSection:{
        flexDirection:'row',
        justifyContent:'space-around',
        marginTop:10,
        paddingHorizontal:12
    }
})

export default ReferSection