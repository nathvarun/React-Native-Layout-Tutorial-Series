import React from 'react';
import { StyleSheet, Text, View, FlatList, Platform, StatusBar } from 'react-native';

import { DrawerNavigator } from 'react-navigation'
import HomeScreen from './screens/HomeScreen'


import { Icon, Container, Content, Header, Left, Body, Right, List, ListItem } from 'native-base'


export default class App extends React.Component {
  render() {
    return (
      <AppDrawerNavigator />
    );
  }
}


const CustomDrawerContentComponent = (props) => {
  return (
    <Container>
      <Header style={[{ backgroundColor: '#3a455c', height: 90 }, styles.androidHeader]}>
        <Left style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
          <Icon name="person" style={{ color: 'white' }} />
          <Text style={{ marginLeft: 5, fontSize: 22, color: 'white', fontStyle: 'italic' }}>Hello, Varun</Text>
        </Left>
      </Header>
      <Content>
        <FlatList
          data={[
            'Home', 'Shop by Category', "Today's Deals"
          ]}
          renderItem={({ item }) => (

            <ListItem noBorder>
              <Text>{item}</Text>
            </ListItem>

          )}



        />
        <FlatList
          style={{ borderTopWidth: 0.5, borderTopColor: '#f0f0f0' }}
          data={[
            'Your Wish List', 'Your Account', "Amazon Pay", "Prime", "Sell on Amazon"
          ]}
          renderItem={({ item }) => (

            <ListItem noBorder>
              <Text>{item}</Text>
            </ListItem>

          )}



        />

        <FlatList
          style={{ borderTopWidth: 0.5, borderTopColor: '#f0f0f0' }}
          data={[
            'Settings', 'Customer Service'
          ]}
          renderItem={({ item }) => (

            <ListItem noBorder>
              <Text>{item}</Text>
            </ListItem>

          )}



        />
      </Content>
    </Container>
  )
}

const AppDrawerNavigator = new DrawerNavigator({

  HomeScreen: { screen: HomeScreen }
}, {
    drawerPosition: 'left',
    contentComponent: CustomDrawerContentComponent,
    drawerOpenRoute: 'DrawerOpen',
    drawerCloseRoute: 'DrawerClose',
    drawerToggleRoute: 'DrawerToggle'

  })

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  androidHeader: {
    ...Platform.select({
      android: {
        paddingTop: StatusBar.currentHeight,
      }
    })
  }
});
