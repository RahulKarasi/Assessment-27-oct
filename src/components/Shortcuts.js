import {Component} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  FlatList,
  Image,
  StyleSheet,
} from 'react-native';

const DATA = [
  {
    img: 'https://cdn-icons-png.flaticon.com/512/1157/1157803.png',
    title: 'recharge',
  },
  {
    img: 'https://cdn-icons-png.flaticon.com/128/1121/1121336.png',
    title: 'pay bills',
  },
  {
    img: 'https://cdn-icons-png.flaticon.com/512/1895/1895474.png',
    title: 'thank benefits',
  },
  {
    img: 'https://cdn-icons-png.flaticon.com/512/1828/1828919.png',
    title: 'add existing connection',
  },
  {
    img: 'https://cdn-icons-png.flaticon.com/512/4308/4308262.png',
    title: 'top up data',
  },
  {
    img: 'https://cdn-icons-png.flaticon.com/512/46/46019.png',
    title: 'international roaming',
  },
  {
    img: 'https://cdn-icons-png.flaticon.com/512/4058/4058824.png',
    title: 'upgrade to postpaid',
  },
];

const Shortcuts = (props) => {
  
    return (
      <View style={styles.container}>
        <View style={styles.component}>
          
            <Text style={styles.shortcutTxt}>{props.heading}</Text>
         
          <FlatList
            horizontal={false}
            data={DATA}
            numColumns={4}
            renderItem={({item}) => {
              return (
                <View style={styles.flatView}>
                  <View style={styles.flatCircleIcon}>
                    <Image
                      source={{uri: item.img}}
                      style={styles.flatImgIcons}
                    />
                  </View>

                  <View style={styles.flatTxtView}>
                    <Text style={styles.flatTxt}>{item.title}</Text>
                  </View>
                </View>
              );
            }}
          />
        </View>
      </View>
    )
  }


const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    paddingHorizontal: 20,
    margin: 10,
    
  },
  component: {
    backgroundColor:'rgb(250,250,250)',
    borderRadius: 15,
    width: 360,
    marginVertical: 5,
  },
  shortcutTxt: {
    margin: 20,
    fontSize: 11,
    color: 'rgb(150,153,189)',
    fontWeight: 'bold',
  },
  flatView: {
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  flatCircleIcon: {
    border: 0,
    borderRadius: 100,
    padding: 12,
    backgroundColor: 'rgb(227,229,252)',
  },
  flatImgIcons: {
    height: 24,
    width: 24,
  },
  flatTxtView: {
    width: 90,
    paddingTop: 5,
    paddingBottom: 20,
  },
  flatTxt: {
    textAlign: 'center',
    fontSize: 10,
    color: 'rgb(133,136,140)',
  },
});

export default Shortcuts
