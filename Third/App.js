import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createBottomTabNavigator} from 'react-navigation';

import Icon from 'react-native-vector-icons/Ionicons';

import Explore from './screens/Explore';
import Saved from './screens/Saved';
import Inbox from './screens/Inbox';
import Trips from './screens/Trips';

class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
      </View>
    );
  }
}

export default createBottomTabNavigator({
  Explore:{
    screen: Explore,
    navigationOptions:{
      tabBarLabel:'EXPLORE',
      tabBarIcon:({tintColor})=>(
        <Icon name="ios-search-outline" color="{tintColor}" size="{24}"/>
      )
    }
  },
  Saved:{
    screen: Saved,
    navigationOptions:{
      tabBarLabel:'SAVED',
      tabBarIcon:({tintColor})=>(
        <Icon name="ios-heart-outline" color="{tintColor}" size="{24}"/>
      )
    }
  },
  Trips:{
    screen: Trips,
    navigationOptions:{
      tabBarLabel:'TRIPS',
      tabBarIcon:({tintColor})=>(
        <Icon name="ios-heart-outline" color="{tintColor}" size="{24}"/>
      )
    }
  },
  Inbox:{
    screen: Inbox,
    navigationOptions:{
      tabBarLabel:'INBOX',
      tabBarIcon:({tintColor})=>(
        <Icon name="ios-chatboxes-outline" color="{tintColor}" size="{24}"/>
      )
    }
  }
})

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
