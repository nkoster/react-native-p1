import React, { useState } from 'react'
import { View, TextInput, StyleSheet, Text } from 'react-native'

const TextScreen = _ => {
    const [name, setName] = useState('')
    return (
        <View>
            <Text>Please enter your name</Text>
            <TextInput
                style={styles.input}
                autoCapitalize='none'
                autoCorrect={false}
                value={name}
                onChangeText={inputText => setName(inputText)}
            />
            <Text>Your name is {name != '' ? name : '?'}</Text>
            {name.length < 3 ? <Text>(length must be >2)</Text> : null}
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        margin: 15,
        borderColor: 'black',
        borderWidth: 1,
        backgroundColor: 'green',
        fontSize: 30,
        color: 'white'
    }
})

export default TextScreen
