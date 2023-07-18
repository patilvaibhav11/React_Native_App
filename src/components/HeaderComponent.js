import { StyleSheet, Text, View, Pressable } from 'react-native'
import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons';
import DatePicker from 'react-native-date-picker'

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
                <View style={{justifyContent:'center', alignItems:'center'}}>
                    <View style={styles.dateSelectionDiv}>
                        <View style={styles.dateSelect}>
                            <Text style={styles.date}>11/12/2000</Text>
                        </View>
                        <Ionicons name="calendar" color='#000' size={25} />
                    </View>
                </View>
                <Pressable style={styles.drawerButton} onPress={onPressLearnMore}>
                    <Ionicons name="happy-outline" color='#000' size={25} />
                </Pressable>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    containerStyle: {
    },
    dateSelectionDiv: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderWidth: 1,
        padding: 5,
        borderRadius: 10,
        backgroundColor: "#fff"
    },
    dateSelect: {
        marginRight: 7
    },
    date: {
        fontSize: 17,
        fontFamily: 'OpenSans-Regular'
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