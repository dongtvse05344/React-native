import React, { Component } from 'react';
import { View, Text, StyleSheet} from 'react-native';
import Logo from '../components/core/logo'
import FormInput from '../components/login/formInput'

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <Logo/>
        <FormInput type='Sign In'/>
        <View style={styles.signupTextCont}>
            <Text style={styles.signupText}>Dont's have an account yet? </Text>
            <Text style={styles.signupBtn}>Sign up</Text>
        </View>
      </View>
    );
  }
}

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#5c7487',
    alignItems: 'center',
    justifyContent: 'center',
  },
  signupTextCont:{
    alignItems:'flex-end',
    justifyContent:'flex-end',
    flexGrow: 1,
    marginVertical: 16,
    flexDirection: 'row',
  },
  signupText:{
    color:'#9ba1b9',
    fontSize:16
  },
  signupBtn:{
    color:'#fff',
    fontSize:16,
    fontWeight: '500',
  }
});