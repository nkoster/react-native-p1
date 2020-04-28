import React, { useReducer } from 'react'
import { View } from 'react-native'
import ColorChanger from '../components/ColorChanger'

const factor = 10

const reducer = (state, action) => {
    switch (action.colorToChange) {
        case 'red':
            return state.red + action.amount > 255 || state.red + action.amount < 0
                ? state
                : { ...state, red: state.red + action.amount }
        case 'green':
            return state.green + action.amount > 255 || state.green + action.amount < 0
            ? state
            : { ...state, green: state.green + action.amount }
        case 'blue':
            return state.blue + action.amount > 255 || state.blue + action.amount < 0
            ? state
            : { ...state, blue: state.blue + action.amount }
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
                onMore={_ => dispatch({ colorToChange: 'red', amount: factor })}
                onLess={_ => dispatch({ colorToChange: 'red', amount: -1 * factor })}
            />
            <ColorChanger
                color='green'
                onMore={_ => dispatch({ colorToChange: 'green', amount: factor })}
                onLess={_ => dispatch({ colorToChange: 'green', amount: -1 * factor })}
            />
            <ColorChanger
                color='blue'
                onMore={_ => dispatch({ colorToChange: 'blue', amount: factor })}
                onLess={_ => dispatch({ colorToChange: 'blue', amount: -1 * factor })}
            />
            <View
                style={{height: 150, width: 300, backgroundColor: `rgb(${red},${green},${blue})`}}
            />
        </View>
    )
}

export default SquareScreen
