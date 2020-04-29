import React, { useReducer } from 'react'
import { View, Text, Button } from 'react-native'

const reducer = (state, action) => {
    switch (action.type) {
        case 'incr': return {...state, count: state.count + action.payload}
        case 'decr': return {...state, count: state.count - action.payload}
        default: return state
    }
}
const CounterScreen = _ => {
    const [state, dispatch] = useReducer(reducer, { count: 0 })
    return (
        <View>
            <Button title='Increase' onPress={_ => dispatch({ type: 'incr', payload: 1 })} />
            <Button title='Decrease' onPress={_ => dispatch({ type: 'decr', payload: 1 })} />
            <Text>Counter Value: {state.count}</Text>
        </View>
    )
}

export default CounterScreen
