import React from 'react'
import { View, TouchableOpacity, Text } from 'react-native'

export default ({ title, onPress, color }) => {
    return (
        <View style={{ 
            flexDirection: 'row',
            marginTop: 10,
            paddingHorizontal: 20
        }}>
            <TouchableOpacity 
                style={{ 
                    flexDirection: 'row',
                    flex: 1 
                }} 
                onPress={onPress}
            >
                <View style={{
                    backgroundColor: color,
                    borderRadius: 3,
                    paddingHorizontal: 15,
                    paddingVertical: 5,
                    borderBottomColor: color + 'B3',
                    borderBottomWidth: 4,
                    flexDirection: 'row',
                    flex: 1,
                    justifyContent: 'center'
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