import React, { useState } from 'react'
import { View } from 'react-native'
import ColorChanger from '../components/ColorChanger'

const SquareScreen = _ => {
    const [red, setRed] = useState(Math.floor(Math.random() * 256))
    const [green, setGreen] = useState(Math.floor(Math.random() * 256))
    const [blue, setBlue] = useState(Math.floor(Math.random() * 256))
    const factor = 10

    return (
        <View>
            <ColorChanger
                color='red'
                onMore={_ => red < (255 - factor) && setRed(red + factor)}
                onLess={_ => red > factor && setRed(red - factor)}
            />
            <ColorChanger
                color='green'
                onMore={_ => green < (255 - factor) && setGreen(green + factor)}
                onLess={_ => green > factor && setGreen(green - factor)}
            />
            <ColorChanger
                color='blue'
                onMore={_ => blue < (255 - factor) && setBlue(blue + factor)}
                onLess={_ => blue > factor && setBlue(blue - factor)}
            />
            <View
                style={{height: 150, width: 300, backgroundColor: `rgb(${red},${green},${blue})`}}
            />
        </View>
    )
}

export default SquareScreen
