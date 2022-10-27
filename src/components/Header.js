import {View, Text, SafeAreaView, Image, StyleSheet} from 'react-native';
import React from 'react';

const Header = () => {
  return (
    <SafeAreaView>
      <View style={styles.header}>
        <View style={styles.user}>
          <Image
            style={styles.userImg}
            source={require('../assets/icons/user.png')}
          />
        </View>
        <Text style={styles.manageTxt}>manage</Text>
        <View style={styles.notification}>
          <Image
            style={styles.bellImg}
            source={require('../assets/icons/bell.png')}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection:'row',
    justifyContent:'space-between',
    marginHorizontal:10,
    paddingHorizontal:10,
    marginTop:15,
    alignItems:'center',
    // borderBottomWidth:1
  },
  user:{
    borderWidth:0.4,
    borderRadius:100,
    height: 38,
    width: 38,
    padding:1
  },
  userImg: {
    height: 35,
    width: 35,
  },
  notification:{
    borderWidth:0.4,
    borderRadius:100,
    padding:10
  },
  bellImg: {
    height: 19,
    width: 20,
  },
  manageTxt:{
    textAlign:'center',
    fontWeight:'600',
    fontSize:17
  }
});

export default Header;
