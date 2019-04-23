import React from 'react';
import { StyleSheet, Text, View, ActivityIndicator } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input, Button, Image } from 'react-native-elements';
import LoginScreen from './screens/login';


const AppNavigator = createAppContainer({
  Login: { screen: LoginScreen },
});

export default createAppContainer(AppNavigator);
