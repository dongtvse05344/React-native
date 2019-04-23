import React, { Component } from 'react';
import { View, Text ,StyleSheet,Image} from 'react-native';

class Logo extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <Image style={{width: 70,height:70}} source={require('../../../assets//icon.png')} />
        <Text style={styles.logoText}>Welcome to happy Lunch</Text>
      </View>
    );
  }
}

export default Logo;

const styles = StyleSheet.create({
    container:{
        flexGrow:1,
        justifyContent:'flex-end',
        alignItems: 'center',

    },
    logoText:{
        marginVertical: 15,
        fontSize:18,
        color: '#d0dbe3',
    }
});
