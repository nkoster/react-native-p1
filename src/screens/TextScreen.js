import React from 'react'
import { View, TextInput, StyleSheet } from 'react-native'

const TextScreen = _ => {
    return (
        <View>
            <TextInput
                style={styles.input}
                autoCapitalize='none'
                autoCorrect={false}
                value='apekop'
            />
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        margin: 15,
        borderColor: 'black',
        borderWidth: 1,
        backgroundColor: 'green',
        color: 'white'
    }
})

export default TextScreen
