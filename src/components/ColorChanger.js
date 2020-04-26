import React from 'react'
import { View, Button, Text } from 'react-native'

const ColorChanger = ({color, onLess, onMore}) => {
    return (
        <View>
            <Text>{color}</Text>
            <Button
                title={`more ${color}`}
                onPress={_ => onMore()}
            />
            <Button
                title={`less ${color}`}
                onPress={_ => onLess()}
            />
        </View>
    )
}

export default ColorChanger
