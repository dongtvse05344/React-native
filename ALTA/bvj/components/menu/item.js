import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

class FoodItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            quantity: this.props.quantity,
            isClicked: false
        };
    }

    onPress = () => {
        this.setState({
            quantity: this.state.quantity + 1,
            isClicked: !this.state.isClicked
        });
    }

    render() {
        return (
            <TouchableOpacity style={[{
                height: this.props.height,
                paddingHorizontal: 10,
                paddingVertical: 5,
                borderBottomColor: '#dbdbdb',
                borderBottomWidth: 1,
                marginTop: 2,
            }, !this.state.isClicked ? {
                backgroundColor: 'white',

            } : {
                    backgroundColor: '#ff191a38',

                }]}
                onPress={this.onPress}
            >
                <View style={{ flex: 1, flexDirection: 'row' }}>
                    <Text style={{
                        flex: 3,
                        justifyContent: 'flex-start',
                        fontSize: 15
                    }}>
                        {this.props.name}
                    </Text>
                    <Text style={{
                        flex: 1,
                        justifyContent: 'flex-end',
                        textAlign: 'right',
                        color: 'green',
                        fontSize: 15
                    }}>
                        {this.props.price}
                    </Text>
                </View>
                <View style={{ flex: 1, flexDirection: 'row' }}>
                    <Text style={{
                        flex: 1,
                        justifyContent: 'flex-start',
                        fontSize: 12,
                        color: 'green'
                    }}>
                        {this.props.code}
                    </Text>
                    <Text style={{
                        flex: 1,
                        justifyContent: 'flex-end',
                        textAlign: 'right',
                        fontSize: 12
                    }}>
                        {this.state.quantity}
                    </Text>
                </View>
            </TouchableOpacity>
        );
    }
}

export default FoodItem;
