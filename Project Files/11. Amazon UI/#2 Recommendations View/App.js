import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { DrawerNavigator } from 'react-navigation'
import HomeScreen from './screens/HomeScreen'
export default class App extends React.Component {
  render() {
    return (
      <AppDrawerNavigator />
    );
  }
}

const AppDrawerNavigator = new DrawerNavigator({

  HomeScreen: { screen: HomeScreen }
})

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
