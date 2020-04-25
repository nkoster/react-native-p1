import React from 'react'
import { Text, StyleSheet, View, Button, TouchableOpacity } from 'react-native'

const HomeScreen = ({navigation}) => {
  return (
    <View>
      <Text style={styles.text}>hey you!</Text>
      <Button
        onPress={_ => navigation.navigate('Components')}
        title='The Component'
      />
      <Button
        onPress={_ => navigation.navigate('List')}
        title='The List'
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
