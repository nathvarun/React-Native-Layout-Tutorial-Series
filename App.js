import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet
} from "react-native";

import { List, ListItem } from 'native-base'

class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <List>
          <ListItem>
            <Text>Copy the project files from the respective folder into the Root of the app </Text>
          </ListItem>
          <ListItem>
            <Text> Run npm install </Text>
          </ListItem>
          <ListItem>
            <Text> Thats it!</Text>
          </ListItem>
        </List>
      </View >
    );
  }
}
export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});