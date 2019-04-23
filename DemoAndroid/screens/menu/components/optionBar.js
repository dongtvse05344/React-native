import React, { Component } from 'react';
import { View, Text } from 'react-native';
import menuStyles from '../style';
import Icon from 'react-native-vector-icons/FontAwesome';
import CheckBox from '../../../components/core/checkbox'
class OptionBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <View style={[menuStyles.optionBar,{height:this.props.size}]}>
                <View style={{ flexDirection: 'row', flex: 1 }}>
                    <Icon
                        name='bars'
                        style={{ fontSize: 12, marginRight: 10, color: 'gray', lineHeight: this.props.size }}
                    />
                    <Text style={{ lineHeight: this.props.size }}>
                        Tất cả
            </Text>
                </View>

                <View style={{
                    flex: 1,
                    flexDirection: 'row',
                    justifyContent: 'flex-end',
                    backgroundColor: 'white',
                }}>
                    <CheckBox height={this.props.size} size={20} />
                    <Text style={{ fontSize: 12, color: 'gray', lineHeight: this.props.size }}>
                        Chọn nhiều
                    </Text>
                </View>

            </View>
        );
    }
}

export default OptionBar;
