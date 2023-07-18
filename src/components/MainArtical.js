import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function MainArtical() {
    return (
        <View style={{ margin: 10 }}>
            <View style={styles.container}>
                <View>
                    <Text style={styles.oneTrainding}>#1 On Trainding</Text>
                </View>
                <View style={styles.image}>
                    <Image source={{ uri: 'https://newnode.desifarmsindia.in/images/slider_images/a1e056eb-682a-4e20-8967-50dea93df8b1.png' }}
                        style={{
                            width: 360,
                            height: 148,
                            justifyContent: 'center',
                            alignContent: 'center',
                            alignItems: 'center',
                            borderRadius: 10
                        }} />
                </View>
                <View style={styles.content}>
                    <Text style={styles.title}>Artical Title : Target Audiance</Text>
                    <Text style={styles.shortDiscription}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas ut blanditiis labore deleniti reprehenderit nulla nostrum sed facilis quis quo?</Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        borderRadius: 5,
        padding: 5,
    },
    oneTrainding:{
        fontSize: 17,
        fontFamily: 'OpenSans-Bold',
        color:'green'
    },
    image: {
        height: 150,
    },
    title: {
        fontSize: 17,
        fontFamily: 'OpenSans-Bold',
    },
    shortDiscription: {
        fontSize: 14,
        fontFamily: 'OpenSans-Regular',
    }
})