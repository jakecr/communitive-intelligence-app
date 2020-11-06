import React from 'react'
import { View, TouchableOpacity, Text } from 'react-native'

export default ({ title, onPress, color }) => {
    return (
        <View style={{ 
            flexDirection: 'row',
            justifyContent: 'space-around',
            marginTop: 10
        }}>
            <TouchableOpacity 
                onPress={onPress}
            >
                <View style={{
                    backgroundColor: color,
                    borderRadius: 3,
                    paddingHorizontal: 15,
                    paddingVertical: 5,
                    borderBottomColor: color + 'B3',
                    borderBottomWidth: 4
                }}>
                    <Text style={{
                        color: '#f7f7f7',
                        fontSize: 18,
                        fontWeight: 'bold'
                    }}>
                        {title}
                    </Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}