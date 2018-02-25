import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  Animated,//import animated
  Easing//import easing
} from "react-native";

class animatedBasic extends Component {

  componentWillMount() {
    this.animatedValue = new Animated.Value(100)
  }

  componentDidMount() {
    Animated.timing(this.animatedValue, {
      toValue: 150,
      duration: 1000,
      easing: Easing.bounce
    }).start()
  }

  render() {
    const animatedStyle = { height: this.animatedValue }

    return (
      <View style={styles.container}>
        <Animated.View style={[styles.box, animatedStyle]}>
        </Animated.View>
      </View>
    )
  }
}
export default animatedBasic;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  box: {
    height: 100,
    width: 100,
    backgroundColor: 'black'
  }

});