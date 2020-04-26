import React from 'react'
import { View, StyleSheet } from 'react-native'
import ImageDetail from '../components/ImageDetail'

const ImageScreen = _ => {
    return (
        <View>
            <ImageDetail stars={5} title='forest' image={require('../../assets/forest.jpg')} />
            <ImageDetail stars={4} title='beach' image={require('../../assets/beach.jpg')} />
            <ImageDetail stars={3} title='mountain' image={require('../../assets/mountain.jpg')} />
        </View>
    )
}

const styles = StyleSheet.create({})

export default ImageScreen
