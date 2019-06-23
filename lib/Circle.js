import React from 'react'
import { View, StyleSheet } from 'react-native'
import PropTypes from 'prop-types'

const RADIUS = 10
const Circle = ({ radius, backgroundColor }) => (
  <View
    style={[
      styles.circle,
      {
        backgroundColor,
        borderRadius: radius,
        height: radius * 2,
        width: radius * 2
      }
    ]}
  />
)

Circle.propTypes = {
  backgroundColor: PropTypes.string,
  radius: PropTypes.number,
  height: PropTypes.number,
  width: PropTypes.number
}
Circle.defaultProps = {
  backgroundColor: 'green',
  borderRadius: RADIUS,
  height: RADIUS * 2,
  width: RADIUS * 2
}

const styles = StyleSheet.create({
  circle: {
    zIndex: 2
  }
})

export default Circle
