import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { Ionicons, FontAwesome } from '@expo/vector-icons'

export default ({ navigate, currentRoute, backgroundColor, borderColor }) => {
    return <View style={{
        flexDirection: 'column',
        height: 55,
        justifyContent: 'space-around',
        backgroundColor: backgroundColor,
        borderTopWidth: 1,
        borderTopColor: borderColor
    }}>
        <View style={{
            flexDirection: 'row',
            flex: 1,
            justifyContent: 'space-evenly',
            paddingVertical: 2.5
        }}>
            <TouchableOpacity onPress={() => navigate('Home')}>
                <View style={styles.navigationBox}>
                    <View style={styles.iconBox}>
                        <FontAwesome 
                            name='home' 
                            size={35} 
                            style={{ 
                                color: 
                                currentRoute == 'Home' 
                                ? '#efefef'
                                : '#1f1f1f'
                            }}
                        />
                    </View>

                    <Text style={{
                        ...styles.label,
                        color: 
                        currentRoute == 'Home' 
                        ? '#efefef'
                        : '#1f1f1f'
                    }}>
                        HOME
                    </Text>
                </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigate('Colors')}>
                <View style={styles.navigationBox}>
                    <View style={styles.iconBox}>
                        <Ionicons
                            name='ios-color-palette' 
                            size={35} 
                            style={{ 
                                color: 
                                currentRoute == 'Colors' 
                                ? '#efefef'
                                : '#1f1f1f' 
                            }}
                        />
                    </View>

                    <Text style={{
                        ...styles.label,
                        color: 
                        currentRoute == 'Colors' 
                        ? '#efefef'
                        : '#1f1f1f'
                    }}>
                        COLORS
                    </Text>
                </View>
            </TouchableOpacity>
        </View>
    </View>
}

const styles = StyleSheet.create({
    iconBox: {
        flexDirection: 'row',
        flex: 1,
        justifyContent: 'space-around',
        height: 35
    },
    label: {
        textAlign: 'center',
        fontSize: 10,
        fontWeight: 'bold'
    },
    navigationBox: {
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        flex: 1,
        width: 80
    }
})