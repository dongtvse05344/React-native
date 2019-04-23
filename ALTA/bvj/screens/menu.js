import React, { Component } from 'react';
import { View, Dimensions, Platform, StyleSheet, ScrollView, TouchableOpacity,FlatList } from 'react-native';
import { Container, Header, Item, Button, Text, Input } from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';
import FoodItem from '../components/menu/item';
import CheckBox from '../components/menu/checkbox';
const { height, width } = Dimensions.get('window');
const searchBarHeight = 70;
const optionsHeight = 40;
const infoHeight = 40;
const itemHeight = 60;
class MenuScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    componentWillMount() {
        this.searchBarHeight = searchBarHeight;
        this.optionsHeight = optionsHeight;
        this.infoHeight = infoHeight;
        this.itemHeight = itemHeight;
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                {/* search bar */}
                <View style={styles.searchBar}>
                    <Icon
                        name='search'
                        style={{ fontSize: 20, marginLeft: 15, lineHeight: this.searchBarHeight, color: 'gray' }}

                    />
                    <Input
                        placeholder='Tìm và thêm hàng bán'
                        style={{ height: this.searchBarHeight, width: '80%', paddingHorizontal: 15 }}
                    />
                    <Icon
                        name='qrcode'
                        style={{ fontSize: 35, marginRight: 10, lineHeight: this.searchBarHeight, color: 'gray' }}
                    />
                </View>
                {/* end search bar */}
                <View style={{ flex: 1 }}>
                    {/* info */}
                    <View style={{ backgroundColor: 'white' }}>
                        <View style={{
                            height: this.infoHeight,
                            flexDirection: 'row',
                            backgroundColor: '#d3d3d3',
                            paddingHorizontal: 15
                        }}>
                            <View style={{ flex: 1, flexDirection: 'row' }}>
                                <Icon
                                    name='user'
                                    style={{ fontSize: 15, lineHeight: this.infoHeight, color: 'gray' }}

                                />
                                <Text style={{
                                    lineHeight: this.infoHeight,
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
                                        fontSize: 15,
                                        lineHeight: this.infoHeight,
                                        color: 'gray',
                                        paddingRight: 5
                                    }}
                                />
                                <Text style={{
                                    color: 'gray',
                                    lineHeight: this.infoHeight,
                                    fontSize: 12,

                                }}>
                                    Bảng giá chung
                                </Text>
                            </View>


                        </View>
                    </View>
                    {/* option bar */}
                    <View style={styles.optionBar}>
                        <View style={{ flexDirection: 'row', flex: 1 }}>
                            <Icon
                                name='bars'
                                style={{ fontSize: 12, marginRight: 10, color: 'gray', lineHeight: this.optionsHeight }}
                            />
                            <Text style={{ lineHeight: this.optionsHeight }}>
                                Tất cả
                            </Text>
                        </View>

                        <View style={{
                            flex: 1,
                            flexDirection: 'row',
                            justifyContent: 'flex-end',
                            backgroundColor: 'white',
                        }}>
                            <CheckBox height={this.optionsHeight} size={20} />
                            <Text style={{ fontSize: 12, color: 'gray', lineHeight: this.optionsHeight }}>
                                Chọn nhiều
                            </Text>
                        </View>

                    </View>
                    {/* menu */}
                    <ScrollView style={{ flex: 1, paddingLeft: '15%' }}>
                        <FoodItem
                            height={this.itemHeight}
                            name="Hộp phở bò phố cổ"
                            price="10.000"
                            quantity={4}
                            code="sp000025"
                        />
                        <FoodItem
                            height={this.itemHeight}
                            name="Mì omni bò bằm"
                            price="14.000"
                            quantity="6"
                            code="sp000024"
                        />
                        <FoodItem
                            height={this.itemHeight}
                            name="Rượu men 500ml"
                            price="150.000"
                            quantity="4"
                            code="sp000023"
                        />
                        <FoodItem
                            height={this.itemHeight}
                            name="Bánh KFC"
                            price="21.000"
                            quantity="2"
                            code="sp000022"
                        />
                        <FoodItem
                            height={this.itemHeight}
                            name="Hộp phở bò phố cổ"
                            price="10.000"
                            quantity="4"
                            code="sp000025"
                        />
                        <FoodItem
                            height={this.itemHeight}
                            name="Hộp phở bò phố cổ"
                            price="10.000"
                            quantity="4"
                            code="sp000025"
                        />
                        <FoodItem
                            height={this.itemHeight}
                            name="Hộp phở bò phố cổ"
                            price="10.000"
                            quantity="4"
                            code="sp000025"
                        />
                        <FoodItem
                            height={this.itemHeight}
                            name="Kẹo Extra xylitol bac hà hũ 56kg"
                            price="10.000"
                            quantity="4"
                            code="sp000025"
                        />
                    </ScrollView>
                </View>
            </View>
        );
    }
}

export default MenuScreen;
const styles = StyleSheet.create({
    searchBar: {
        height: searchBarHeight,
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
    },
    optionBar: {
        marginTop: 5,
        height: optionsHeight,
        backgroundColor: 'white',
        flexDirection: 'row',
        paddingHorizontal: 20,
    }
});
