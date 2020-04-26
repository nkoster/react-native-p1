import React, { useState} from 'react'
import { View, StyleSheet, Text, Button } from 'react-native'

const CounterScreen = _ => {
    const [counter, setCounter] = useState(0)
    return (
        <View>
            <Button title='Increase' onPress={_ => {
                setCounter(counter + 1)
            }} />
            <Button title='Decrease' onPress={_ => {
                setCounter(counter - 1)
            }} />
            <Text>Counter Value: {counter}</Text>
        </View>
    )
}

const styles = StyleSheet.create({})

export default CounterScreen
