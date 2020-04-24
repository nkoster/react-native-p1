import React from 'react'
import { Text, StyleSheet, View, Button, TouchableOpacity } from 'react-native'

const HomeScreen = props => {
  return (
    <View>
      <Text style={styles.text}>hey you!</Text>
      <Button
        onPress={_ => props.navigation.navigate('Components')}
        title='The Component'
      />
      <TouchableOpacity 
        onPress={_ => props.navigation.navigate('List')}
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
