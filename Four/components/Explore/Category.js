import React, { Component } from 'react';
import { View, Text, StyleSheet ,Image} from 'react-native';
class Category extends Component {
    constructor(props)
    {
        super(props);
        this.state = {showText:true};
        
        setInterval(()=>{
            this.setState({showText: !this.state.showText})
        }, 1000);
    }
    render() {
        return (
            <View style={{ height: 130, width: 130, marginLeft: 20, borderWidth: 0.5, borderColor: '#dddddd' }}>
                <View style={{ flex: 2 }}>
                    <Image source={this.props.imgUri}
                        style={{ flex: 1, width: null, height: null, resizeMode: 'cover' }}
                    />
                </View>
                <View style={{ flex: 1, paddingLeft: 10, paddingTop: 10 }}>
                    <Text>{this.props.name} {this.state.showText ? 'Thương' :'điên'}</Text>
                </View>
            </View>
        );
    }
}
export default Category;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})