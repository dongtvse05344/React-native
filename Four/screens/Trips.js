import React, { Component } from 'react';
import { ScrollView, View, Text, StyleSheet } from 'react-native';
import Blog from '../components/Explore/Blog';
class Trips extends Component {
    render() {
        return (

            <View style={{flex:1}}>
                <View style={{ flex: 1, backgroundColor: 'gray', justifyContent: 'center' }}>
                    <Text style={{ textAlign: 'center' }}>abc</Text>
                </View>
                <View style={{flex:2,backgroundColor:'orange'}}>
                    
                    <Blog bg="white" title="Lucas to Ba" content="Lucas to Ba lorem and cycle"/>
                    <Blog bg="#ddddd" title="Lucas to Ba 2" content="Lucas to Ba lorem and 3 cycle"/>
                     
                    
                    <View style={{flex:1,backgroundColor:'black'}}>

                    </View>
                </View>
            </View>
        );
    }
}
export default Trips;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})