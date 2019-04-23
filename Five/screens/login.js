import React from 'react';
import { StyleSheet, Text, View, ActivityIndicator } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input, Button, Image } from 'react-native-elements';

class LoginScreen
 extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <Image
          source={require('./assets/img/logo.png')}
          style={{ width: 200, height: 200 }}
        />
        <Text style={{ marginBottom: 10, fontSize: 20 }}>Login!</Text>
        <Input
          style={styles.input}
          placeholder='username'
          leftIcon={
            <Icon
              name='user'
              size={24}
              color='gray'
            />}
        />
        <Input
          style={styles.input}
          placeholder='password'
          leftIcon={
            <Icon
              name='key'
              size={24}
              color='gray'
            />}
        />
        <Button
          style={{ marginTop: 20, backgroundColor: '#343434' }}
          icon={
            <Icon
              name="arrow-right"
              size={15}
              color="white"
            />
          }
          iconRight
          title="Login  "
        />
      </View>
    );
  }
}

export default LoginScreen;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      paddingHorizontal: 20,
    },
    input: {
      marginTop: 50,
    }
  
  });