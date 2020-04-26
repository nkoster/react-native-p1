import React, { useState } from 'react'
import { View } from 'react-native'
import ColorChanger from '../components/ColorChanger'

const SquareScreen = _ => {
    return (
        <View>
            <ColorChanger color='red' />
            <ColorChanger color='green' />
            <ColorChanger color='blue' />
        </View>
    )
}

export default SquareScreen
