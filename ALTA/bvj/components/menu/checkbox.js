import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

class CheckBox extends Component {
    constructor(props) {
        super(props);
        this.state = {
            checked: false,
        };
    }

    onPress = () => {
        this.setState({
            checked: !this.state.checked
        })
    }

    render() {
        return (
            <TouchableOpacity
                style={[{
                    alignItems: 'center',
                    borderWidth: 1,
                    borderColor: 'gray',
                    width: this.props.size, height: this.props.size,
                    marginTop: (this.props.height - this.props.size) / 2, marginHorizontal: 5,
                    borderRadius:5
                },
                !this.state.checked ? {
                } : {
                        backgroundColor: '#dddddd00',
                        borderWidth: 0
                    }]}

                onPress={this.onPress}
            >
                <Icon
                    name='check'
                    style={[{
                        fontSize: this.props.size
                    }, !this.state.checked ? {
                        color: '#dddddd00'
                    } : {
                            color: '#097a1c',
                        }]}
                />
            </TouchableOpacity>
        );
    }
}

export default CheckBox;
