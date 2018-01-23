import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet
} from "react-native";

import { Container, Content, Icon } from 'native-base'
import CardComponent from '../CardComponent'

class HomeTab extends Component {

    static navigationOptions = {

        tabBarIcon: ({ tintColor }) => (
            <Icon name="ios-home" style={{ color: tintColor }} />
        )
    }

    render() {
        return (
            <Container style={styles.container}>
                <Content>
                    <CardComponent imageSource="1" likes="101" />
                    <CardComponent imageSource="2" likes="201" />
                    <CardComponent imageSource="3" likes="301" />
                </Content>
            </Container>
        );
    }
}
export default HomeTab;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    }
});