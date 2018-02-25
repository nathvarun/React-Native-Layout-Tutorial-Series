import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableWithoutFeedback,
  Animated,
  Easing
} from "react-native";

class animatedSpring extends Component {


  componentWillMount() {
    this.animatedValue = new Animated.Value(1);
  }

  handlePressIn = () => {
    Animated.spring(this.animatedValue, {
      toValue: 0.3,
      // duration: 1000,
    }).start()
  }

  handlePressOut = () => {
    Animated.spring(this.animatedValue, {
      toValue: 1,
      friction: 3,
      tension: 20
    }).start()
  }

  render() {

    const animatedStyle = {
      transform: [{ scale: this.animatedValue }]
    }

    return (
      <View style={styles.container}>

        <TouchableWithoutFeedback
          onPressIn={() => this.handlePressIn()}
          onPressOut={() => this.handlePressOut()}
        >
          <Animated.View style={[styles.button, animatedStyle]}>
            <Text style={{ color: 'white' }}>Press me</Text>
          </Animated.View>
        </TouchableWithoutFeedback>
      </View >
    );
  }
}
export default animatedSpring;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  button: {
    backgroundColor: 'black',
    height: 50,
    width: 100,
    alignItems: 'center',
    justifyContent: 'center'
  }
});