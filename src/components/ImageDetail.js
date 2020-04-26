import React from 'react'
import { Text, View, StyleSheet, Image } from 'react-native'

const ImageDetail = ({title, image, stars}) => {
    return (
        <View>
            <Image source={image} />
            <Text>{title} - stars: {stars}</Text>
        </View>
    )
}

const styles = StyleSheet.create({})

export default ImageDetail
