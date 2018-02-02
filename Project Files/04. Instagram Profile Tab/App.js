import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StackNavigator } from 'react-navigation'
import MainScreen from './Components/MainScreen'

export default class App extends React.Component {
  render() {
    return (
      <AppStackNavigator />
    );
  }

}

const AppStackNavigator = StackNavigator({

  Main: {
    screen: MainScreen
  }
})


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
