import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Platform,
    StatusBar,
    Image
} from "react-native";

import { Container, Content, Header, Left, Right, Icon, Item, Input, Card, CardItem } from 'native-base'

import FAIcon from 'react-native-vector-icons/FontAwesome'
import Swiper from 'react-native-swiper'

import RecommendedCardItem from '../components/RecommendedCardItem'
class HomeScreen extends Component {
    render() {
        return (
            <Container>
                <Header style={[{ backgroundColor: '#3a455c', height: 90, borderBottomColor: '#757575' }, styles.androidHeader]}>
                    <Left style={{ flexDirection: 'row' }}>
                        <Icon onPress={() => this.props.navigation.navigate('DrawerOpen')} name="md-menu" style={{ color: 'white', marginRight: 15 }} />
                        <FAIcon name="amazon" style={{ fontSize: 32, color: 'white' }} />
                    </Left>
                    <Right>
                        <Icon name="md-cart" style={{ color: 'white' }} />
                    </Right>
                </Header>
                <View style={{ position: 'absolute', left: 0, right: 0, top: 90, height: 70, backgroundColor: '#3a455c', flexDirection: 'row', alignItems: 'center', paddingHorizontal: 5 }}>
                    <TouchableOpacity>
                        <View style={{ width: 100, backgroundColor: '#e7e7eb', height: 50, borderRadius: 4, padding: 10 }}>

                            <Text style={{ fontSize: 12 }}>Shop by</Text>
                            <Text style={{ fontWeight: 'bold' }}>Category</Text>
                        </View>

                    </TouchableOpacity>

                    <View style={{ flex: 1, height: "100%", marginLeft: 5, justifyContent: 'center' }}>
                        <Item style={{ backgroundColor: 'white', paddingHorizontal: 10, borderRadius: 4 }}>
                            <Icon name="search" style={{ fontSize: 20, paddingTop: 5 }} />
                            <Input placeholder="Search" />
                        </Item>
                    </View>
                </View>

                <Content style={{ backgroundColor: '#d5d5d6', marginTop: 70 }}>
                    <View style={{ height: 50, backgroundColor: 'white', flexDirection: 'row', paddingHorizontal: 5, alignItems: 'center', justifyContent: 'space-between' }}>
                        <Text>Hello, Varun Nath</Text>
                        <View style={{ flexDirection: 'row' }}>
                            <Text>Your Account </Text>
                            <Icon name="arrow-forward" style={{ fontSize: 18 }} />
                        </View>
                    </View>
                    <Swiper
                        autoplay={true}
                        style={{ height: 100 }}
                    >
                        <View style={{ flex: 1 }}>
                            <Image
                                style={{ flex: 1, height: null, width: null, resizeMode: 'contain' }}
                                source={require('../assets/swiper_2.jpg')} />
                        </View>
                        <View style={{ flex: 1 }}>
                            <Image
                                style={{ flex: 1, height: null, width: null, resizeMode: 'contain' }}
                                source={require('../assets/swiper_3.jpg')} />
                        </View>
                        <View style={{ flex: 1 }}>
                            <Image
                                style={{ flex: 1, height: null, width: null, resizeMode: 'contain' }}
                                source={require('../assets/swiper_2.jpg')} />
                        </View>

                    </Swiper>
                    <Card style={{ marginLeft: 5, marginRight: 5 }}>
                        <CardItem header style={{ borderBottomWidth: 1, borderBottomColor: '#dee0e2' }}>
                            <Text>Your Recommendations</Text>
                        </CardItem>

                        <RecommendedCardItem
                            itemName="You can heal your life"
                            itemCreator="Louise Hay"
                            itemPrice="$10"
                            savings="2.5"
                            imageUri={require("../assets/recommended_1.jpg")}
                            rating={5}

                        />
                        <RecommendedCardItem
                            itemName="Uncharted 4"
                            itemCreator="Sony"
                            itemPrice="$19.99"
                            savings="17"
                            imageUri={require("../assets/recommended_2.jpg")}
                            rating={5}

                        />
                        <RecommendedCardItem
                            itemName="Ea UFC 3"
                            itemCreator="Ea Sports"
                            itemPrice="$44"
                            savings="6"
                            imageUri={require("../assets/recommended_3.jpg")}
                            rating={3}

                        />



                    </Card>
                </Content>

            </Container>
        );
    }
}
export default HomeScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    androidHeader: {
        ...Platform.select({
            android: {
                paddingTop: StatusBar.currentHeight,
            }
        })
    }
});