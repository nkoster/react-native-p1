import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const FlexScreen = _ => {
    return (
        <View style={styles.viewStyle} >
            <Text style={styles.textOneStyle} >Flex I</Text>
            <Text style={styles.textTwoStyle} >Flex II</Text>
            <Text style={styles.textThreeStyle} >Flex III</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    viewStyle: {
        borderWidth: 1,
        borderColor: 'lightgray',
        alignItems: 'stretch',
        height: 300
    },
    textOneStyle: {
        borderWidth: 1,
        borderColor: 'green',
        margin: 2,
        padding: 5,
        borderRadius: 15
    },
    textTwoStyle: {
        borderWidth: 1,
        borderColor: 'green',
        margin: 2,
        padding: 5,
        position: 'absolute',
        borderRadius: 15
    },
    textThreeStyle: {
        borderWidth: 1,
        borderColor: 'green',
        margin: 2,
        padding: 5,
        borderRadius: 15
    }
})
export default FlexScreen
