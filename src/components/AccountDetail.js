import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import DetailCards from './DetailCards';

const data = [
  {
    heading: 'Services',
    imgPath: require('../assets/icons/skip-track.png'),
    textUp: '5 Services',
    textDown: '',
    btnText: 'VIEW DETAILS',
  },
  {
    heading: 'Money',
    imgPath: require('../assets/icons/lock.png'),
    textUp: '₹•••• ',
    textDown: 'in Your wallet',
    btnText: 'SHOW BALANCE',
  },
];

const AccountDetail = () => {
  return (
    <View style={styles.detailView}>
      {data.map(element => {
        return (
          <DetailCards
            heading={element.heading}
            imgPath={element.imgPath}
            textUp={element.textUp}
            textDown={element.textDown}
            btnText={element.btnText}
          />
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  detailView: {
    padding: 15,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});

export default AccountDetail;
