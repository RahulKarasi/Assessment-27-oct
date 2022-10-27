import * as React from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Manage from './src/screens/Manage';

function Pay() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Home!</Text>
    </View>
  );
}

function Shop() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Settings!</Text>
    </View>
  );
}
function Discover() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Settings!</Text>
    </View>
  );
}
function Help() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Settings!</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{headerShown: false}}>
        <Tab.Screen
          name="Manage"
          component={Manage}
          options={{
            tabBarIcon: ({focused}) =>
              focused ? (
                <Image
                  source={require('./src/assets/icons/homeFocused.png')}
                  style={styles.menImg}
                />
              ) : (
                <Image
                  source={require('./src/assets/icons/home.png')}
                  style={styles.menImg}
                />
              ),
          }}
        />
        <Tab.Screen
          name="Pay"
          component={Pay}
          options={{
            tabBarIcon: () => (
              <Image
                source={require('./src/assets/icons/credit-card.png')}
                style={styles.menImg}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Shop"
          component={Shop}
          options={{
            tabBarIcon: () => (
              <Image
                source={require('./src/assets/icons/shopping-bag.png')}
                style={styles.menImg}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Discover"
          component={Discover}
          options={{
            tabBarIcon: () => (
              <Image
                source={require('./src/assets/icons/compass.png')}
                style={styles.menImg}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Help"
          component={Help}
          options={{
            tabBarIcon: () => (
              <Image
                source={require('./src/assets/icons/conversation.png')}
                style={styles.menImg}
              />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  menImg: {
    paddingTop: 20,
    height: 24,
    width: 24,
  },
});
