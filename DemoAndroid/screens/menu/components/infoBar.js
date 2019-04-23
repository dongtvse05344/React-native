import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import menuStyles from '../style';

class InfoBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    render() {
        return (
            <View style={{ backgroundColor: 'white' }}>
                <View style={[{
                    height: this.props.size,
                }, menuStyles.infoBar]}>
                    <View style={{ flex: 1, flexDirection: 'row' }}>
                        <Icon
                            name='user'
                            style={{ fontSize: 12, lineHeight: this.props.size, color: 'gray' }}

                        />
                        <Text style={{
                            lineHeight: this.props.size,
                            paddingHorizontal: 15,
                            color: 'green',
                            fontSize: 12,

                        }}>
                            Khách lẻ
            </Text>
                    </View>
                    <View style={{ flex: 1, justifyContent: 'flex-end', flexDirection: 'row' }}>
                        <Icon
                            name='tags'
                            style={{
                                fontSize: 12,
                                lineHeight: this.props.size,
                                color: 'gray',
                                paddingRight: 5
                            }}
                        />
                        <Text style={{
                            color: 'gray',
                            lineHeight: this.props.size,
                            fontSize: 12,

                        }}>
                            Bảng giá chung
                </Text>
                    </View>


                </View>
            </View>
        );
    }
}

export default InfoBar;
