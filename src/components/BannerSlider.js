import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ImageSlider } from '@pembajak/react-native-image-slider-banner'
import { Dimensions, Platform } from 'react-native';

export default function BannerSlider() {
    const windowWidth = Dimensions.get('window').width;
    return (
        <ImageSlider
            data={[
                { img: 'https://newnode.desifarmsindia.in/images/slider_images/a1e056eb-682a-4e20-8967-50dea93df8b1.png' },
                { img: 'https://newnode.desifarmsindia.in/images/slider_images/fb683c2b-f4a9-46b0-b0d0-9603b829a892.png' },
                { img: 'https://newnode.desifarmsindia.in/images/slider_images/d3d64253-f65f-41fb-9a19-71112d135c95.png' }
            ]}
            autoPlay={true}
            closeIconColor="#fff"
            showIndicator={true}
            caroselImageStyle={{ height: windowWidth / 2.9, resizeMode: 'contain' }}
            indicatorContainerStyle={{ position: 'absolute', bottom: Platform.OS === 'ios' ? -15 : -15 }}
            preview={false}
        />
    )
}

const styles = StyleSheet.create({})