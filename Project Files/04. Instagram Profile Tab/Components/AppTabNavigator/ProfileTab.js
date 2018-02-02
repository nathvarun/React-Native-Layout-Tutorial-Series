import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    Image,
    Dimensions,
    FlatList
} from "react-native";

import { Container, Content, Icon, Header, Left, Body, Right, Segment, Button } from 'native-base'
import EntypoIcon from 'react-native-vector-icons/Entypo';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
var { height, width } = Dimensions.get('window');

import CardComponent from '../CardComponent'

var images = [
    require('../../assets/feed_images/1.jpg'),
    require('../../assets/feed_images/2.jpg'),
    require('../../assets/feed_images/3.png'),
    require('../../assets/feed_images/4.jpg'),
    require('../../assets/feed_images/5.jpg'),
    require('../../assets/feed_images/6.jpg'),
    require('../../assets/feed_images/7.jpg'),
    require('../../assets/feed_images/8.png'),
    require('../../assets/feed_images/9.jpg'),
    require('../../assets/feed_images/10.jpg'),
    require('../../assets/feed_images/11.jpg'),
    require('../../assets/feed_images/12.jpg'),
]

class ProfileTab extends Component {

    static navigationOptions = {


        tabBarIcon: ({ tintColor }) => (
            <Icon name="person" style={{ color: tintColor }} />
        )
    }

    constructor(props) {
        super(props)

        this.state = {
            activeIndex: 0
        }
    }

    segmentClicked(index) {
        this.setState({
            activeIndex: index
        })
    }
    checkActive = (index) => {
        if (this.state.activeIndex !== index) {
            return (
                { color: 'grey' }
            )
        }
        else {
            return (
                {}
            )
        }

    }

    renderSectionOne() {
        return images.map((image, index) => {
            return (
                <View key={index} style={[{ width: (width) / 3 }, { height: (width) / 3 }, { marginBottom: 2 }, index % 3 !== 0 ? { paddingLeft: 2 } : { paddingLeft: 0 }]}>
                    <Image style={{
                        flex: 1,
                        alignSelf: 'stretch',
                        width: undefined,
                        height: undefined,

                    }}
                        source={image}>
                    </Image>

                </View>
            )
        })

    }

    renderSection() {

        if (this.state.activeIndex == 0) {

            return (
                <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>

                    {this.renderSectionOne()}
                </View>
            )

        }
        else if (this.state.activeIndex == 1) {
            return (
                <View>
                    <CardComponent imageSource="1" likes="101" />
                    <CardComponent imageSource="2" likes="101" />
                    <CardComponent imageSource="3" likes="101" />
                </View>
            )
        }
    }

    componentDidMount() {
        console.log(width)
    }

    render() {
        return (
            <Container style={styles.container}>
                <Header style={{ paddingLeft: 10, paddingLeft: 10 }}>
                    <Left>
                        <Icon name="md-person-add" />
                    </Left>
                    <Right>
                        <EntypoIcon name="back-in-time" style={{ fontSize: 32 }} />
                    </Right>
                </Header>

                <Content>

                    <View style={{ paddingTop: 10 }}>

                        {/** User Photo Stats**/}
                        <View style={{ flexDirection: 'row' }}>

                            {/**User photo takes 1/3rd of view horizontally **/}
                            <View
                                style={{ flex: 1, alignItems: 'center', justifyContent: 'flex-start' }}>
                                <Image source={require('../../assets/me.jpg')}
                                    style={{ width: 75, height: 75, borderRadius: 37.5 }} />

                            </View>

                            {/**User Stats take 2/3rd of view horizontally **/}
                            <View style={{ flex: 3 }}>

                                {/** Stats **/}
                                <View
                                    style={{
                                        flexDirection: 'row',
                                        justifyContent: 'space-around',
                                        alignItems: 'flex-end'
                                    }}>
                                    <View style={{ alignItems: 'center' }}>
                                        <Text>20</Text>
                                        <Text style={{ fontSize: 10, color: 'grey' }}>Posts</Text>
                                    </View>
                                    <View style={{ alignItems: 'center' }}>
                                        <Text>205</Text>
                                        <Text style={{ fontSize: 10, color: 'grey' }}>Followers</Text>
                                    </View>
                                    <View style={{ alignItems: 'center' }}>
                                        <Text>167</Text>
                                        <Text style={{ fontSize: 10, color: 'grey' }}>Following</Text>
                                    </View>
                                </View>

                                {/**Edit profile and Settings Buttons **/}
                                <View style={{ flexDirection: 'row', alignItems: 'flex-start', paddingTop: 10 }}>

                                    <View
                                        style={{ flexDirection: 'row' }}>

                                        {/** Edit profile takes up 3/4th **/}
                                        <Button bordered dark
                                            style={{ flex: 3, marginLeft: 10, justifyContent: 'center', height: 30 }}><Text>Edit Profile</Text></Button>


                                        {/** Settings takes up  1/4th place **/}
                                        <Button bordered dark style={{
                                            flex: 1,
                                            height: 30,
                                            marginRight: 10, marginLeft: 5,
                                            justifyContent: 'center'
                                        }}>
                                            <Icon name="settings" style={{ color: 'black' }}></Icon></Button>
                                    </View>
                                </View>{/**End edit profile**/}
                            </View>
                        </View>

                        <View style={{ paddingBottom: 10 }}>
                            <View style={{ paddingHorizontal: 10 }}>
                                <Text style={{ fontWeight: 'bold' }}>Varun Nath</Text>
                                <Text>Lark | Computer Jock | Commercial Pilot</Text>
                                <Text>www.unsureprogrammer.com</Text>
                            </View>
                        </View>


                    </View>


                    <View >
                        <View style={{ flexDirection: 'row', justifyContent: 'space-around', borderTopWidth: 1, borderTopColor: '#eae5e5' }}>
                            <Button

                                onPress={() => this.segmentClicked(0)}
                                transparent
                                active={this.state.activeIndex == 0}

                            >
                                <Icon name="ios-apps-outline"
                                    style={[this.state.activeIndex == 0 ? {} : { color: 'grey' }]} >
                                </Icon>
                            </Button>
                            <Button
                                onPress={() => this.segmentClicked(1)}
                                transparent active={this.state.activeIndex == 1}>
                                <Icon name="ios-list-outline" style={[{ fontSize: 32 }, this.state.activeIndex == 1 ? {} : { color: 'grey' }]}></Icon>
                            </Button>
                            <Button
                                onPress={() => this.segmentClicked(2)}
                                transparent active={this.state.activeIndex == 2}>
                                <Icon name="ios-bookmark-outline" style={this.state.activeIndex == 2 ? {} : { color: 'grey' }}></Icon>
                            </Button>
                            <Button
                                onPress={() => this.segmentClicked(3)}
                                transparent last active={this.state.activeIndex == 3}>
                                <Icon name="ios-people-outline" style={[{ fontSize: 32 }, this.state.activeIndex == 3 ? {} : { color: 'grey' }]}></Icon>
                            </Button>
                        </View>



                        {/** Height =width/3 so that image sizes vary according to size of the phone yet remain squares **/}

                        {this.renderSection()}

                    </View>
                </Content>
            </Container >
        );
    }
}
export default ProfileTab;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    }
});

{/**  // <FlatList
            //     horizontal={false}
            //     numColumns={3}
            //     data={[{ key: 'a' }, { key: 'b' }, { key: 'c' }, { key: 'd' }, { key: 'e' }, { key: 'f' }, { key: 'g' }, { key: 'h' }, { key: 'i' }, { key: 'j' }, { key: 'k' }, { key: 'l' }, { key: 'm' }, { key: 'n' }, { key: 'o' }]}
            //     renderItem={({ item, index }) =>
            //         <View style={[{ width: (width) / 3 }, { height: (width) / 3 }, { marginBottom: 2 }, index % 3 !== 0 ? { paddingLeft: 2 } : { paddingLeft: 0 }]}>
            //             <Image style={{
            //                 flex: 1,
            //                 alignSelf: 'stretch',
            //                 width: undefined,
            //                 height: undefined,

            //             }}
            //                 source={images[index]}>
            //             </Image>

            //         </View>
            //     }//end render item
            // />
 **/}