import React from 'react'
import {Text, StyleSheet, FlatList} from 'react-native'

const ListScreen = _ => {
    const friends = [
        { name: 'vriend 1', age: 40 },
        { name: 'vriend 2', age: 20 },
        { name: 'vriend 3', age: 40 },
        { name: 'vriend 4', age: 51 },
        { name: 'vriend 5', age: 43 },
        { name: 'vriend 6', age: 60 },
        { name: 'vriend 7', age: 33 },
        { name: 'vriend 8', age: 26 },
        { name: 'vriend 9', age: 28 }
    ]
    return (
        <FlatList
            keyExtractor={friend => friend.name}
            data={friends}
            renderItem={ ({item}) => {
               return <Text style={styles.textStyle}>{item.name}, age {item.age}</Text>
            }}
        />
    )
}

const styles = StyleSheet.create({
    textStyle: {
        marginVertical: 35
    }
})

export default ListScreen
