import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const FlexScreen = _ => {
    return (
        <View style={styles.viewStyle} >
            <Text style={styles.textStyle} >Flex Screen</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    viewStyle: {
        borderWidth: 1,
        borderColor: 'lightgray',
        borderRadius: 50
    },
    textStyle: {
        borderWidth: 1,
        borderColor: 'green',
        margin: 2,
        padding: 5,
        borderRadius: 15
    }
})
export default FlexScreen
