import React, { Component } from 'react';
import { View, Text,StyleSheet } from 'react-native';
import {Input} from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';

class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <View style={[styles.searchBar,{height:this.props.size}]}>
                <Icon
                    name='search'
                    style={{ fontSize: 20, marginLeft: 15, lineHeight: this.props.size, color: 'gray' }}

                />
                <Input
                    placeholder={this.props.placeholder}
                    style={{ height: this.props.size, width: '80%', paddingHorizontal: 15 }}
                />
                <Icon
                    name='qrcode'
                    style={{ fontSize: this.props.size/2, marginRight: 10, lineHeight: this.props.size, color: 'gray' }}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    searchBar:{
        flexDirection: 'row',
        // borderBottomColor: 'gray',
        // borderBottomWidth: 2,
        backgroundColor: 'white',
        shadowColor: 'red',
        shadowOpacity: 0.85,
        shadowRadius: 5,
        shadowOffset: {
            height: 10,
            width: 10
        }
    }
});
export default SearchBar;
