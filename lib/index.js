import React, { Component } from "react";
import PropTypes from "prop-types";
import { Animated, Easing, StyleSheet, View } from "react-native";
import Circle from "./Circle";

export default class BounceThree extends Component {
  _isMounted = false;
  state = {
    currentIndex: 0,
    iconCenter: null,
    iconLeft: null,
    iconRight: null,
    radius: 3,
    yValue: new Animated.Value(0)
  };
  componentDidMount() {
    this._isMounted = true;

    if (this._isMounted) {
      this.changeIndex();
    }
  }
  componentWillUnmount() {
    this._isMounted = false;
  }
  changeIndex() {
    const { currentIndex } = this.state;
    // const nextIndex = currentIndex + 1
    if (this._isMounted) {
      this.setState({ currentIndex: currentIndex + 1 }, () => {
        this.startAnimation(() => this.changeIndex());
      });
    }
  }
  startAnimation(callback) {
    this.state.yValue.setValue(0);

    Animated.timing(this.state.yValue, {
      toValue: 1,
      duration: this.props.speed / 2,
      easing: Easing.bezier(0, 1, 1, 1)
    }).start(() => {
      Animated.timing(this.state.yValue, {
        delay: 5,
        toValue: 0,
        duration: this.props.speed / 2,
        easing: Easing.bezier(1, 0, 1, 1)
      }).start(() => {
        setTimeout(() => {
          callback && callback();
        }, 0);
      });
    });
  }

  render() {
    const translateYRight = this.state.yValue.interpolate({
      inputRange: [0, 1],
      outputRange: [0, this.props.rightDistance]
    });
    const { radius } = this.props;
    return (
      <View style={styles.container}>
        <Animated.View
          style={{
            marginLeft: 60,
            transform: [{ translateY: translateYRight }]
          }}
        >
          <Circle radius={radius} />
        </Animated.View>
        {/* <Animated.View
          style={{
            marginLeft: 60,
            transform: [{ translateY: translateYRight }]
          }}
        >
          <Circle/>
        <Animated.View/><Animated.View
          style={{
            marginLeft: 60,
            transform: [{ translateY: translateYRight }]
          }}
        >
          <Circle/>
        <Animated.View/> */}
      </View>
    );
  }
}

BounceThree.propTypes = {
  radius: PropTypes.number,
  leftDistance: PropTypes.number,
  rightDistance: PropTypes.number,
  speed: PropTypes.number,
  delay: PropTypes.number,
  size: PropTypes.number
};
BounceThree.defaultProps = {
  delay: 400,
  radius: 3,
  leftDistance: -180,
  rightDistance: -250,
  size: 150,
  speed: 1200
};

const styles = StyleSheet.create({
  container: {},
  image: {
    width: 150,
    height: 90
  }
});
