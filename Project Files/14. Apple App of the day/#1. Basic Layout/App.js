import React from 'react';
import { StyleSheet, Text, View, ScrollView, Image, TouchableWithoutFeedback, Animated, Dimensions, SafeAreaView } from 'react-native';

let SCREEN_WIDTH = Dimensions.get('window').width
let SCREEN_HEIGHT = Dimensions.get('window').height
var images = [
  { id: 1, src: require('./assets/1.jpg') },
  { id: 2, src: require('./assets/2.jpg') },
  { id: 3, src: require('./assets/3.jpg') },
  { id: 4, src: require('./assets/4.jpg') },

]

export default class App extends React.Component {
  render() {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <ScrollView style={{ flex: 1 }}>
          {images.map(image => {
            return (
              <TouchableWithoutFeedback key={image.id}>
                <Animated.View
                  style={{ height: SCREEN_HEIGHT - 150, width: SCREEN_WIDTH, padding: 15 }}
                >
                  <Image source={image.src}
                    style={{ flex: 1, height: null, width: null, resizeMode: 'cover', borderRadius: 20 }}
                  />
                </Animated.View>
              </TouchableWithoutFeedback>
            )
          })}
        </ScrollView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
