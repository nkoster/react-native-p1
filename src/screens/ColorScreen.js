import React, { useState } from 'react'
import { View, StyleSheet, Button, FlatList } from 'react-native'

const ColorScreen = _ => {
    const [colors, setColor] = useState([])
    return (
        <View>
            <Button title='add color' onPress={_ => {
                setColor([...colors, renderRgb()])
            }} />
            <FlatList
                keyExtractor={item => item}
                data={colors}
                renderItem={ ({item}) => {
                return <View style={{ height: 100, width: 100, backgroundColor: item}} />
                }}
            />
        </View>
    )
}

const styles = StyleSheet.create({})

const renderRgb = _ => `rgb(${
    Math.floor(Math.random() * 256)
},${
    Math.floor(Math.random() * 256)
},${
    Math.floor(Math.random() * 256)
})`

export default ColorScreen
