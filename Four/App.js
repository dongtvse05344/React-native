import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createBottomTabNavigator,createAppContainer} from 'react-navigation';

import Icon from 'react-native-vector-icons/FontAwesome'

import Explore from './screens/Explore';
import Saved from './screens/Saved';
import Inbox from './screens/Inbox';
import Trips from './screens/Trips';


const MainNavigator = createBottomTabNavigator({
  Explore:{
    screen: Explore,
    navigationOptions:{
      tabBarLabel:'EXPLORE',
      tabBarIcon:({tintColor})=>(
        <Icon name="rocket" color={tintColor} size="{24}"/>
      )
    }
  },
  Saved:{
    screen: Saved,
    navigationOptions:{
      tabBarLabel:'SAVED',
      tabBarIcon:({tintColor})=>(
        <Icon name="link" color={tintColor} size="{24}"/>
      )
    }
  },
  Trips:{
    screen: Trips,
    navigationOptions:{
      tabBarLabel:'TRIPS',
      tabBarIcon:({tintColor})=>(
        <Icon name="gift" color={tintColor} size="{24}"/>
      )
    }
  },
  Inbox:{
    screen: Inbox,
    navigationOptions:{
      tabBarLabel:'INBOX',
      tabBarIcon:({tintColor})=>(
        <Icon name="calculator" color={tintColor} size="{24}"/>
      )
    }
  }
},{
  tabBarOptions:{
    activeTintColor:'red',
    inactiveTintColor:'grey',
    style:{
      backgroundColor:'white',
      borderTopWidth:0,
      shadowOffset:{width:5,height:3},
      shadowColor:'black',
      shadowOpacity: 0.5,
      elevation: 5
    }
  }
});

const App = createAppContainer(MainNavigator);

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
