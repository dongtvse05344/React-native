import React, { Component } from "react";
import { StyleSheet, Text, View } from 'react-native';
import {createDrawerNavigator ,createStackNavigator,createTabNavigator, createAppContainer} from 'react-navigation';
import HomeScreen from "./screens/home";
import MenuScreen from "./screens/menu";
const MainNavigator = createStackNavigator({
  Menu: {screen: MenuScreen },
  Home: {screen: HomeScreen },
});

const App = createAppContainer(MainNavigator);

export default App;