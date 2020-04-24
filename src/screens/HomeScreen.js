import React from 'react'
import { Text, StyleSheet, View, Button } from 'react-native'

const HomeScreen = _ => {
  return (
    <View>
      <Text style={styles.text}>hey you!</Text>
      <Button
        onPress={_ => console.log('Pressed')}
        title='The Component'
      />
    </View>
  )
}

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
})

export default HomeScreen
