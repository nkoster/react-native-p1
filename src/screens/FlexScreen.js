import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const FlexScreen = _ => {
    return (
        <View style={styles.viewStyle} >
            <Text style={styles.textStyle} >Flex I</Text>
            <Text style={styles.textStyle} >Flex II</Text>
            <Text style={styles.textStyle} >Flex III</Text>
            <Text style={styles.textStyle} >Flex IIII</Text>
            <Text style={styles.textStyle} >Flex IIIII</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    viewStyle: {
        borderWidth: 1,
        borderColor: 'lightgray',
        flexDirection: 'row',
        height: 100,
        alignItems: 'flex-start'
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
