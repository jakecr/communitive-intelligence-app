import React from 'react'
import { View, TouchableOpacity, Text } from 'react-native'

export default ({ title, onPress, color }) => {
    return (
        <View style={{ 
            flexDirection: 'row',
            justifyContent: 'space-around'
        }}>
            <TouchableOpacity onPress={onPress}>
                <Text style={{
                    color: color,
                    marginTop: 20,
                    marginBottom: 10,
                    fontSize: 20,
                    fontWeight: 'bold'
                }}>
                    {title}
                </Text>
            </TouchableOpacity>
        </View>
    )
}