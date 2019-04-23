import React, { Component } from 'react';
import { StyleSheet, View, ImageBackground } from 'react-native';
import { Container, Header, Content, Button, Text } from 'native-base';
class HomeScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        const { navigate } = this.props.navigation;
        return (
            <ImageBackground source={require('../assets/images/home/BG.jpg')}
                style={{ flex: 1, width: '100%', height: '100%' }}>
                <View style={{ flex: 1 }}>

                </View>
                <View style={{ flex: 1 }}>
                    <View style={{ flex: 1, flexDirection: 'column' }}>
                        <View style={{ flex: 1 }}>
                            <Text>abd</Text>
                        </View>
                        <View style={{ flex: 1 }}>
                            <Button onPress={() =>
                                navigate('Menu')} >
                                <Text>Click Me!</Text>
                            </Button>
                        </View>
                    </View>
                    <View style={{ flex: 1 }}>

                    </View>
                    <View style={{ flex: 1 }}>

                    </View>
                    <View style={{ flex: 1 }}>

                    </View>
                </View>

                <ImageBackground source={require('../assets/images/home/slide_footer.png')}
                    style={{ flex: 1, width: '100%' }}
                >

                </ImageBackground>
            </ImageBackground>
        );
    }
}

export default HomeScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,

    }
});
