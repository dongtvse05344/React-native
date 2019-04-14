import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
class Trips extends Component {
    reder() {
        return (
            <View style="styles.container">
                <Text>Trips</Text>
            </View>
        );
    }
}
export default Trips;
const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})