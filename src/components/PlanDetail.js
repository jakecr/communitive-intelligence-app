import React from 'react'
import { View, Text } from 'react-native'

export default ({ label, text, notLast = true }) => {
    return (
        <View>
            {
                <View
                    style={{
                        borderBottomWidth: 
                        notLast 
                        ? 2
                        : 0,
                        borderBottomColor: '#f7f7f7',
                        paddingVertical: 7.5
                    }}
                >
                    {label
                    ? <Text
                        style={{
                            color: '#f7f7f7',
                            fontSize: 17.5,
                            fontWeight: 'bold'
                        }}
                    >
                        {label}: {text}
                    </Text>
                    : <Text
                        style={{
                            color: '#f7f7f7',
                            fontSize: 17.5,
                            fontWeight: 'bold'
                        }}
                    >
                        {text}
                    </Text>}
                </View>
            }
        </View>
    )
}