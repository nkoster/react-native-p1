import React from 'react'
import { Text, StyleSheet, View, Button } from 'react-native'

const HomeScreen = ({navigation}) => {
  return (
    <View>
      <Text style={styles.text}>hallo Dee!</Text>
      <Button
        onPress={_ => navigation.navigate('Components')}
        title='The Component'
      />
      <Button
        onPress={_ => navigation.navigate('List')}
        title='The List'
      />
      <Button
        onPress={_ => navigation.navigate('Images')}
        title='The Images'
      />
      <Button
        onPress={_ => navigation.navigate('Counter')}
        title='The Counter'
      />
      <Button
        onPress={_ => navigation.navigate('Colors')}
        title='The Colors'
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
