import React from 'react'
import { View, TouchableOpacity } from 'react-native'

export default ({ children, id, navigation, color }) => {
    return (
        <View
            style={{
                backgroundColor: color,
                borderRadius: 5,
                borderBottomWidth: 6,
                borderBottomColor: color + 'B3',
                marginHorizontal: 30,
                flexDirection: 'row',
                justifyContent: 'space-around'
            }}
        >
            <TouchableOpacity onPress={() => navigation.navigate('Plan', { id })}>
                {children}
            </TouchableOpacity>
        </View>
    )
}