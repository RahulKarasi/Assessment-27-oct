import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import React from 'react';

const DetailCards = props => {
  return (
    <View style={styles.card} >
      <View>
        <View style={styles.head}>
          <Text>{props.heading}</Text>
          <Image style={styles.img} source={props.imgPath} />
        </View>
        <Text style={styles.txtUp}>{props.textUp}</Text>
        <Text style={styles.txtDown}>{props.textDown}</Text>
      </View>
      <View>
        <TouchableOpacity style={styles.btn}>
          <Text style={styles.btnTxt}>{props.btnText}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  card: {
    // borderWidth: 1,
    height: 210,
    width: 160,
    borderRadius: 20,
    padding: 17,
    justifyContent:'space-between',
    backgroundColor:'rgb(250,250,250)',
    shadowOpacity: 0.1,
  },
  head: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom:10
  },
  txtUp:{
    fontWeight:'600'
  },
  txtDown:{
    fontWeight:'300'
  },
  img: {
    height: 15,
    width: 15,
  },
  btn: {
    // width:'100%',
    backgroundColor: 'black',
    height:40,
    borderRadius:10,
    justifyContent:'center'
  },
  btnTxt: {
    color: 'white',
    textAlign:'center',
    fontSize:12,
    letterSpacing:-0.5,
    fontWeight:'600'
  },
});

export default DetailCards;
