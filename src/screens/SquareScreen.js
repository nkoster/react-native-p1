import React, { useReducer } from 'react'
import { View } from 'react-native'
import ColorChanger from '../components/ColorChanger'

const factor = 10

const reducer = (state, action) => {
    switch (action.type) {
        case 'red':
            return state.red + action.payload > 255 || state.red + action.payload < 0
                ? state
                : { ...state, red: state.red + action.payload }
        case 'green':
            return state.green + action.payload > 255 || state.green + action.payload < 0
            ? state
            : { ...state, green: state.green + action.payload }
        case 'blue':
            return state.blue + action.payload > 255 || state.blue + action.payload < 0
            ? state
            : { ...state, blue: state.blue + action.payload }
        default:
            return state
    }
}

const SquareScreen = _ => {
    const [state, dispatch] = useReducer(reducer, {
        red: 50,
        green: 100,
        blue: 200
    })
    const { red, green, blue } = state
    return (
        <View>
            <ColorChanger
                color='red'
                onMore={_ => dispatch({ type: 'red', payload: factor })}
                onLess={_ => dispatch({ type: 'red', payload: -1 * factor })}
            />
            <ColorChanger
                color='green'
                onMore={_ => dispatch({ type: 'green', payload: factor })}
                onLess={_ => dispatch({ type: 'green', payload: -1 * factor })}
            />
            <ColorChanger
                color='blue'
                onMore={_ => dispatch({ type: 'blue', payload: factor })}
                onLess={_ => dispatch({ type: 'blue', payload: -1 * factor })}
            />
            <View
                style={{height: 150, width: 300, backgroundColor: `rgb(${red},${green},${blue})`}}
            />
        </View>
    )
}

export default SquareScreen
