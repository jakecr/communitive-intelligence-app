import React from 'react'
import { Text } from 'react-native'

export default ({ children }) => {
    return (
        <Text style={{
            fontSize: 16,
            color: '#af671a',
            textAlign: 'center',
            marginTop: 10,
            marginBottom: 5,
            marginHorizontal: 20
        }}>
            {children}
        </Text>
    )
}