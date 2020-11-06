import React from 'react'
import { View } from 'react-native'

export default ({ children, color, borderColor, marginTop = 10, marginBottom = 0 }) => {
    return (
        <View
            style={{ 
                flexDirection: 'column', 
                flexGrow: 1, 
                justifyContent: 'space-around',
                marginTop: marginTop,
                marginBottom: marginBottom
            }}
        >
            <View style={{ 
                backgroundColor: color,
                borderBottomColor: borderColor,
                borderBottomWidth: 1.5,
                borderTopColor: borderColor,
                borderTopWidth: 1.5
            }}>
                {children}
            </View>
        </View>
    )
}