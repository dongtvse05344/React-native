import React, { Component } from 'react';
import { View, Text, FlatList } from 'react-native';
import SearchBar from '../../components/core/searchbar';
import InfoBar from './components/infoBar';
import Icon from 'react-native-vector-icons/FontAwesome';
import menuStyles from './style';
import envi from './enviroment';
import OptionBar from './components/optionBar';
import foods from './data';
import FoodItem from './components/item';
class MenuScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    render() {
        return (
            <View style={{ flex: 1 }}>
                <SearchBar placehoder="Search bar" size={envi.searchBar} />
                <View style={{ flex: 1 }}>
                    {/* info */}
                    <InfoBar size={envi.infoBar} styleMain={{ menuStyles }} />
                    <OptionBar size={envi.optionBar} />
                    <FlatList
                        style={{paddingLeft:'15%'}}
                        data={foods}
                        renderItem={({ item }) => <FoodItem
                            size={envi.item}
                            name={item.name}
                            price={item.price}
                            quantity={item.quantity}
                            code={item.code}
                        />}
                    />
                </View>
            </View>

        );
    }
}

export default MenuScreen;
