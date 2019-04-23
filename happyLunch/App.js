import React from 'react';
import {
  StyleSheet, Text, View,
  StatusBar
} from 'react-native';

import { Router, Stack, Scene } from 'react-native-router-flux'

import Routes from './src/happyLunch';
import Login from './src/screens/login'
import SignUp from './src/screens/signup'
export default class App extends React.Component {
  state = {
    appIsReady: false,
  }

  render() {
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor="blue" barStyle="light-content" />
        <Router>
          <Stack>
            <Scene key="root" component={Login} />
            <Scene key="register" component={SignUp} />
          </Stack>

        </Router>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#5c7487',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
