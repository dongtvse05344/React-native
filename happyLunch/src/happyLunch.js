import React, { Component } from 'react';
import { Router, Stack, Scene } from 'react-native-router-flux'

import Login from './screens/login'
import SignUp from './screens/signup'

export default class Routes extends Component {
  render() {
    return (
      <Router>
        <Stack>
          <Scene key="root" component={Login} />
          <Scene key="register" component={SignUp} />
        </Stack>

      </Router>
    );
  }
}