import React, { Component } from 'react';
import { FlatList, View, Text, ActivityIndicator, StyleSheet } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
class Inbox extends Component {

    constructor(props) {
        super(props);
        this.state = { isLoading: true, count: 0 }
    }

    componentDidMount() {
        return fetch('http://hieiscore-dev-as.azurewebsites.net/api/Account/Admin?index=1&pageSize=5')
            .then((response) => response.json())
            .then((responseJson) => {

                this.setState({
                    isLoading: false,
                    dataSource: responseJson.List,
                    index: responseJson.Index,
                }, function () {

                });

            })
            .catch((error) => {
                console.error(error);
            });
    }



    render() {


        if (this.state.isLoading) {
            return (
                <View style={{ flex: 1, padding: 20 }}>
                    <ActivityIndicator />
                </View>
            )
        }

        return (
            <ScrollView>
                <View
                    style={{
                        flex: 1,
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                >
                    <Text style={{
                    }}>{this.state.index}  , {this.state.count}
                    </Text>
                </View>
                <View style={{ flex: 1, paddingTop: 20 }}>
                    <FlatList
                        data={this.state.dataSource}
                        renderItem={({ item }) => <Text>{item.Email}, {item.UserName}</Text>}
                        keyExtractor={({ id }, index) => id}
                    />

                </View>
            </ScrollView>

        );
    }


}
export default Inbox;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})