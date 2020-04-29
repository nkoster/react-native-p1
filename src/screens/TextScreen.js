import React, { useState } from 'react'
import { View, TextInput, StyleSheet, Text } from 'react-native'

const TextScreen = _ => {
    const [name, setName] = useState('')
    return (
        <View>
            <TextInput
                style={styles.input}
                autoCapitalize='none'
                autoCorrect={false}
                value={name}
                onChangeText={inputText => setName(inputText)}
            />
            <Text>{name}</Text>
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
