import React, { Component } from 'react';
import { View, Text, TextInput, StyleSheet,TouchableOpacity } from 'react-native';

class FormInput extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <View style={styles.container}>
                <TextInput style={styles.inputBox}
                    placeholder="Email ..."
                    placeholderTextColor='gray'
                />
                <TextInput style={styles.inputBox}
                    placeholder="Password ..."
                    placeholderTextColor='gray'
                    secureTextEntry={true}
                />
                <TouchableOpacity style={styles.btn}>
                    <Text style={styles.buttonText}>{this.props.type}</Text>
                </TouchableOpacity>

            </View>
        );
    }
}

export default FormInput;
const styles = StyleSheet.create({
    container: {
        flexGrow:1,
        alignItems: 'center',
        justifyContent: 'center',

    },
    inputBox: {
        width: 300,
        backgroundColor: '#4a6176',
        borderRadius: 25,
        height: 50,
        paddingHorizontal: 16,
        fontSize: 16,
        color: '#fff',
        marginVertical: 5,
    },
    buttonText:{
        fontSize:16,
        fontWeight: '500',
        color:'#fff',
    },
    btn:{
        backgroundColor: '#494d5a',
        width: 200,
        height:50,
        borderRadius: 25,
        paddingHorizontal: 16,
        alignItems:'center',
        justifyContent:'center'

    }
});