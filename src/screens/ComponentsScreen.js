import React from 'react'

import {Text, StyleSheet} from 'react-native'

const ComponentsScreen = _ => {
    return <Text style={styles.textStyle}>I am The Components Screen</Text>
}

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 100
    }
})

export default ComponentsScreen
