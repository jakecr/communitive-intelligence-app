import React from 'react'
import { Text } from 'react-native'

export default ({ children, size = 20, color }) => {
    return (
        <Text
            style={{
                fontSize: size,
                marginTop: 15,
                textAlign: 'center',
                color: color,
                fontWeight: 'bold'
            }}
        >
            {children}
        </Text>
    )
}