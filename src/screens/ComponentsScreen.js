import React from 'react'

import {Text, StyleSheet, View} from 'react-native'

const ComponentsScreen = _ => {
    const greeting = 'N3L'
    return (
        <View>
            <Text style={styles.textStyle}>I am The Component</Text>
            <Text style={styles.textSecond}>{greeting}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 30
    },
    textSecond: {
        fontSize: 15
    }
})

export default ComponentsScreen
