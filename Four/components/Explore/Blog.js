import React, { Component } from 'react';
import { View, Text } from 'react-native';

class Blog extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <View style={{ flex: 1, backgroundColor: this.props.bg, padding: 10 }}>
                <Text style={{ fontSize: 20 }}>{this.props.title}</Text>
                <Text style={{ fontSize: 15, color: 'gray' }}>{this.props.content}</Text>
            </View>
        );
    }
}

export default Blog;
