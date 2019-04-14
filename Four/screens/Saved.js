import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-navigation';
class Saved extends Component {
    render() {
        return (
            
            <SafeAreaView style={{flex:1}}>
            <View style={{flex:1}}>

            </View>
                <Text>Saved</Text>    
            </SafeAreaView>
        );
    }
}
export default Saved;
const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})