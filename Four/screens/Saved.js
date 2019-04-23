import React, { Component } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-navigation';
class Saved extends Component {
    constructor(props)
    {
        super(props);
        this.state = {text:''};

    }
    render() {
        return (
            <SafeAreaView style={{ flex: 1 }}>
                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'flex-end' }}>
                    <TextInput
                        style={{ height: 40, borderColor: 'gray', borderWidth: 1 , width:100}}
                        onChangeText={(text) => this.setState({ text })}
                        value={this.state.text}
                    />
                </View>
                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'flex-start' }}>
                    <TextInput
                        style={{ height: 40, borderColor: 'gray', borderWidth: 1,width:100 }}
                        onChangeText={(text) => this.setState({ text })}
                        value={this.state.text}
                    />
                </View>
            </SafeAreaView>
        );
    }
}
export default Saved;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})