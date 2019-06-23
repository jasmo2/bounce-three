import React from "react";
import { View, StyleSheet } from "react-native";
const Circle = props => <View style={circleStyle} />;

export default Circle;

const circleStyle = StyleSheet.create({
  circle: {
    backgroundColor: "green",
    borderRadius: 5,
    height: 10,
    width: 10
  }
});
