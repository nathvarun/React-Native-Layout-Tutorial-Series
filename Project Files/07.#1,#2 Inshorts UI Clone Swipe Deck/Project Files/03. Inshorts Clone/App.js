import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Animated,
  Easing,
  PanResponder,
  Dimensions
} from "react-native";

const SCREEN_HEIGHT = Dimensions.get("window").height
const SCREEN_WIDTH = Dimensions.get("window").width
const MIN_SWIPE_DISTANCE = 50


const NOTES = [
  { id: "1", uri: require('./assets/1.png') },
  { id: "2", uri: require('./assets/2.png') },
  { id: "3", uri: require('./assets/3.jpg') },
  { id: "4", uri: require('./assets/4.png') },
  { id: "5", uri: require('./assets/5.png') },
]

class DeckSwiper extends Component {

  constructor(props) {
    super(props)
    this.position = new Animated.ValueXY({ x: 0, y: 0 })
    this.alreadySwipedPosition = new Animated.ValueXY({ x: 0, y: 200 })

    this.state = {
      currentIndex: 0,
      presentY: 0
    }

  }

  renderNotes() {


    return NOTES.map((item, i) => {

      // console.log("Value of i = " + i)
      // console.log("Current currentIndex = " + this.state.currentIndex)

      if (i < this.state.currentIndex) {
        return null
      }
      // console.log(NOTES[i].uri)
      else if (i == this.state.currentIndex) {
        return (
          <Animated.View key={item.id} style={[styles.noteStyles, this.position.getLayout()]}
            {...this.panResponder.panHandlers}
          >
            <View style={{ flex: 1 }}>
              <View

                style={{ flex: 2, backgroundColor: 'black' }}>
                <Image style={{ flex: 1, height: null, width: null, resizeMode: "center" }} source={NOTES[i].uri}>
                </Image>
              </View>
              <View style={{ flex: 3, justifyContent: 'center', alignItems: 'center', padding: 5 }}>
                <Text>
                  Anim nisi commodo pariatur veniam sunt tempor voluptate reprehenderit cupidatat. Minim in culpa nisi commodo sunt exercitation tempor in pariatur. Voluptate ullamco Lorem occaecat aliquip adipisicing non proident minim irure sit deserunt eiusmod. Aliquip non laboris est aliquip officia officia reprehenderit non fugiat non duis exercitation.
                  Anim nisi commodo pariatur veniam sunt tempor voluptate reprehenderit cupidatat. Minim in culpa nisi commodo sunt exercitation tempor in pariatur. Voluptate ullamco Lorem occaecat aliquip adipisicing non proident minim irure sit deserunt eiusmod. Aliquip non laboris est aliquip officia officia reprehenderit non fugiat non duis exercitation.
                  Anim nisi commodo pariatur veniam sunt tempor voluptate reprehenderit cupidatat. Minim in culpa nisi commodo sunt exercitation tempor in pariatur. Voluptate ullamco Lorem occaecat aliquip adipisicing non proident minim irure sit deserunt eiusmod. Aliquip non laboris est aliquip officia officia reprehenderit non fugiat non duis exercitation.

                </Text>
              </View>
            </View>
          </Animated.View>
        )
      }
      else {
        return (
          <Animated.View key={item.id} style={[styles.noteStyles]}

          >
            <View style={{ flex: 1 }}>
              <View

                style={{ flex: 2, backgroundColor: 'black' }}>
                <Image style={{ flex: 1, height: null, width: null, resizeMode: "center" }} source={NOTES[i].uri}>
                </Image>
              </View>
              <View style={{ flex: 3, justifyContent: 'center', alignItems: 'center', padding: 5 }}>
                <Text>
                  Anim nisi commodo pariatur veniam sunt tempor voluptate reprehenderit cupidatat. Minim in culpa nisi commodo sunt exercitation tempor in pariatur. Voluptate ullamco Lorem occaecat aliquip adipisicing non proident minim irure sit deserunt eiusmod. Aliquip non laboris est aliquip officia officia reprehenderit non fugiat non duis exercitation.
                  Anim nisi commodo pariatur veniam sunt tempor voluptate reprehenderit cupidatat. Minim in culpa nisi commodo sunt exercitation tempor in pariatur. Voluptate ullamco Lorem occaecat aliquip adipisicing non proident minim irure sit deserunt eiusmod. Aliquip non laboris est aliquip officia officia reprehenderit non fugiat non duis exercitation.
                  Anim nisi commodo pariatur veniam sunt tempor voluptate reprehenderit cupidatat. Minim in culpa nisi commodo sunt exercitation tempor in pariatur. Voluptate ullamco Lorem occaecat aliquip adipisicing non proident minim irure sit deserunt eiusmod. Aliquip non laboris est aliquip officia officia reprehenderit non fugiat non duis exercitation.
                 </Text>
              </View>
            </View>
          </Animated.View>
        )
      }


    }).reverse()


  }

  componentWillMount() {


    this.panResponder = PanResponder.create({
      // Ask to be the responder:
      onStartShouldSetPanResponder: (evt, gestureState) => true,

      onPanResponderMove: (evt, gestureState) => {
        // The most recent move distance is gestureState.move{X,Y}

        if (this.state.currentIndex == 0 && gestureState.dy > 40) {

        }
        else if (gestureState.dy > 0) {
          this.alreadySwipedPosition.setValue({ x: 0, y: gestureState.dy })
          console.log("show old card")
        }
        else {
          this.position.setValue({ y: gestureState.dy })
        }
        // The accumulated gesture distance since becoming responder is
        // gestureState.d{x,y}
      },
      // onPanResponderTerminationRequest: (evt, gestureState) => true,
      onPanResponderRelease: (evt, gestureState) => {



        // console.log("swipe speed " + gestureState.vy)
        if (-gestureState.dy > MIN_SWIPE_DISTANCE && -gestureState.vy > 0.7) {


          Animated.timing(this.position, {
            toValue: ({ x: 0, y: -SCREEN_HEIGHT }),
            duration: 400
          }).start(() => {

            this.setState({ currentIndex: this.state.currentIndex + 1 })
            this.position.setValue({ x: 0, y: 0 })
          });
        }
        else {


          Animated.spring(this.position, {
            toValue: ({ x: 0, y: 0 }),
          }).start();

        }
      },

    });
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        {this.renderNotes()}
      </View>
    )
  }
}
export default DeckSwiper;

const styles = StyleSheet.create({
  article: {
    flex: 1,
    padding: 5

  },
  noteStyles: {
    position: 'absolute',
    height: SCREEN_HEIGHT,
    width: SCREEN_WIDTH,
    backgroundColor: 'white'
  }
});
