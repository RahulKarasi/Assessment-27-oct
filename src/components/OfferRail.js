import {View, Text, ScrollView, Image, StyleSheet} from 'react-native';
import React from 'react';

const OfferRail = () => {
  const banners = [
    {
      path: require('../assets/images/ban.webp'),
    },
    {
      path: require('../assets/images/ban.webp'),
    },
    {
      path: require('../assets/images/ban.webp'),
    },
    {
      path: require('../assets/images/ban.webp'),
    },
    {
      path: require('../assets/images/ban.webp'),
    },
    {
      path: require('../assets/images/ban.webp'),
    },
  ];
  return (
    <View >
      <ScrollView horizontal={true} style={styles.offerSection}>
        {banners.map(element => {
          return <Image style={styles.bannerImg} source={element.path} />;
        })}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  offerSection: {
    flexDirection:'row',
    marginVertical:25

    // height: 100,
  },
  bannerImg: {
    width: 290,
    height: 160,
    borderRadius:10,
    marginLeft:12,
  },
});

export default OfferRail;
