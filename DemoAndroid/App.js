import React, { Component } from "react";
import { StyleSheet, Text, View } from 'react-native';
import {createDrawerNavigator ,createStackNavigator,createTabNavigator, createAppContainer} from 'react-navigation';
import MenuScreen from "./screens/menu/viewscreen";
const MainNavigator = createStackNavigator({
  Menu: {screen: MenuScreen },
});

const App = createAppContainer(MainNavigator);

export default App;