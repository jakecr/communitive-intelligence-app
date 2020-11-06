import React from 'react'
import { TouchableOpacity, Text, View } from 'react-native'

export default ({ title, onPress, color }) => {
    return (
        <View style={{ 
            flexDirection: 'row',
            justifyContent: 'space-around',
            marginTop: 5
        }}>
            <TouchableOpacity onPress={onPress}>
                <Text 
                    style={{
                        color: color,
                        fontSize: 17.5,
                        fontWeight: 'bold'
                    }}
                >
                    {title}
                </Text>
            </TouchableOpacity>
        </View>
    )
}