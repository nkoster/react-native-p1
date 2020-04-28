import React, { useReducer } from 'react'
import { View, Text, Button } from 'react-native'

const reducer = (_, action) => action.payload

const CounterScreen = _ => {
    const [state, dispatch] = useReducer(reducer, 0)
    return (
        <View>
            <Button title='Increase' onPress={_ => dispatch({ payload: state + 1 })} />
            <Button title='Decrease' onPress={_ => dispatch({ payload: state - 1 })} />
            <Text>Counter Value: {state}</Text>
        </View>
    )
}

export default CounterScreen
