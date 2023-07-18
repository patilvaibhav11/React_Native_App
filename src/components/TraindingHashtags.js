import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function TraindingHashtags() {
    return (
        <View>
            <View style={styles.hashTags}>
                <View>
                    <Text style={styles.textHashtag}>#KiritSomaiyya</Text>
                </View>
                <View>
                    <Text style={styles.reachHashtags}>20K</Text>
                </View>
            </View>
            <View style={styles.hashTags}>
                <View>
                    <Text style={styles.textHashtag}>#MHPolitics</Text>
                </View>
                <View>
                    <Text style={styles.reachHashtags}>10K</Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    hashTags: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: 5,
        borderRadius: 5,
        padding: 15,
        backgroundColor: '#fff'
    },
    textHashtag: {
        fontSize: 16,
        fontFamily: 'OpenSans-Bold',
    },
    reachHashtags: {
        fontSize: 16,
        fontFamily: 'OpenSans-Regular',
    }
})