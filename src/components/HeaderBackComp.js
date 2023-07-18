import { StyleSheet, Text, View, Pressable } from 'react-native'
import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function HeaderBackComp(props) {
    const onPressLearnMore = () => {
        props.props.navigate('Home')
        console.log("Test")
    }
    return (
        <View>
            <View style={styles.headerButtom}>
                <Pressable style={styles.drawerButton} onPress={onPressLearnMore}>
                    <Ionicons name="arrow-back" color='#000' size={25} />
                </Pressable>
                {/* <Pressable style={styles.drawerButton} onPress={onPressLearnMore}>
                <Ionicons name="menu-outline" color='#000' size={25}/>
                </Pressable> */}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    headerButtom: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: 14
    },
    drawerButton: {
        backgroundColor: '#fff',
        padding: 10,
        borderRadius: 20
    }
})