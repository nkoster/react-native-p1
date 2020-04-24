import React from 'react'
import { Text, StyleSheet, View, Button, TouchableOpacity } from 'react-native'

const HomeScreen = _ => {
  return (
    <View>
      <Text style={styles.text}>hey you!</Text>
      <Button
        onPress={_ => console.log('Pressed')}
        title='The Component'
      />
      <TouchableOpacity 
        onPress={_ => console.log('Brrrr')}
      >
        <Text>The List</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
})

export default HomeScreen
