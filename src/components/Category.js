import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Category() {
    return (
        <View>
            <View style={styles.cardStyle}>
                <View style={styles.categoryCard}>
                    <Text style={styles.categoryName}>Vaibhav</Text>
                </View>
                <View style={styles.categoryCard}>
                    <Text style={styles.categoryName}>Vaibhav</Text>
                </View>
                <View style={styles.categoryCard}>
                    <Text style={styles.categoryName}>Vaibhav</Text>
                </View>
                <View style={styles.categoryCard}>
                    <Text style={styles.categoryName}>Vaibhav</Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    cardStyle: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    categoryCard: {
        width: '48%',
        borderRadius: 10,
        padding: 25,
        marginLeft: 5,
        marginBottom: 10,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:'#fff'
    },
    categoryName: {
        fontSize: 17,
        fontFamily: 'OpenSans-Bold',
    },
})