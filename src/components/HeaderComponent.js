import { StyleSheet, Text, View, Pressable } from 'react-native'
import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function HeaderComponent(props) {
    const onPressLearnMore = () => {
        props.props.openDrawer()
    }
    return (
        <View style={styles.containerStyle}>
            <View style={styles.headerButtom}>
                <Pressable style={styles.drawerButton} onPress={onPressLearnMore}>
                    <Ionicons name="menu-outline" color='#000' size={25} />
                </Pressable>
                {/* <Pressable style={styles.drawerButton} onPress={onPressLearnMore}>
                <Ionicons name="menu-outline" color='#000' size={25}/>
                </Pressable> */}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    containerStyle:{
    },
    headerButtom: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: 14,
    },
    drawerButton: {
        backgroundColor: '#fff',
        padding: 10,
        borderRadius: 20
    }
})