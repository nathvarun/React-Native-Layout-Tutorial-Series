import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet
} from "react-native";

class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Copy the project files from respective project files folder into the Root of the app.</Text>
        <Text> Run npm install </Text>
        <Text> Thats it ! </Text>
      </View>
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