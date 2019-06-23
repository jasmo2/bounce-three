import React, { Component } from 'react'
import { StyleSheet, View } from 'react-native'

import BounceTree from './lib/'

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <BounceTree
          delay={200}
          leftDistance={-100}
          radius={15}
          rightDistance={-150}
          speed={1000}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff'
  }
})
