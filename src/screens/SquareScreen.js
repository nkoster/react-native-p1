import React, { useState } from 'react'
import { View } from 'react-native'
import ColorChanger from '../components/ColorChanger'

const SquareScreen = _ => {
    const [red, setRed] = useState(Math.floor(Math.random() * 256))
    const [green, setGreen] = useState(Math.floor(Math.random() * 256))
    const [blue, setBlue] = useState(Math.floor(Math.random() * 256))
    const factor = 10
    const setColor = (color, change) => {
        switch(color) {
            case 'red':
                red + change > 255 || red + change < 0 ? null : setRed(red + change)
                return
            case 'green':
                green + change > 255 || green + change < 0 ? null : setGreen(green + change)
                return
            case 'blue':
                blue + change > 255 || blue + change < 0 ? null : setBlue(blue + change)
                return
            default:
                return
        }
    }
    return (
        <View>
            <ColorChanger
                color='red'
                onMore={_ => setColor('red', factor)}
                onLess={_ => setColor('red', -1 * factor)}
            />
            <ColorChanger
                color='green'
                onMore={_ => setColor('green', factor)}
                onLess={_ => setColor('green', -1 * factor)}
            />
            <ColorChanger
                color='blue'
                onMore={_ => setColor('blue', factor)}
                onLess={_ => setColor('blue', -1 * factor)}
            />
            <View
                style={{height: 150, width: 300, backgroundColor: `rgb(${red},${green},${blue})`}}
            />
        </View>
    )
}

export default SquareScreen
