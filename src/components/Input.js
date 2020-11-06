import React from 'react'
import { View, TextInput } from 'react-native'

export default ({ placeholder = '', value, onChange, keyboardType = 'default', Icon = null, iconName, secureTextEntry = false, color, onFocus = null, onBlur = null, onSubmitEditing = null }) => {
    return (
        <View style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            marginHorizontal: 10
        }}>
            {!!Icon
            && <View style={{
                width: 40,
                flexDirection: 'row',
                justifyContent: 'center'
            }}>
                <Icon 
                    name={iconName}
                    style={{
                        fontSize: 30,
                        paddingTop: 7.5,
                        paddingRight: 10,
                        color: color
                    }} 
                />
            </View>}
            
            <TextInput 
                keyboardType={keyboardType}
                secureTextEntry={secureTextEntry}
                placeholderTextColor={color} 
                style={{
                    color: color,
                    borderBottomWidth: 1,
                    borderBottomColor: color,
                    paddingVertical: 5,
                    paddingHorizontal: 10,
                    marginHorizontal: 5,
                    flex: 1,
                    fontSize: 18
                }} 
                autoCapitalize='none' 
                autoCorrect={false} 
                placeholder={placeholder} 
                value={value} 
                onChangeText={onChange} 
                returnKeyLabel='Done' 
                returnKeyType='done' 
                onFocus={onFocus}
                onBlur={onBlur}
                onSubmitEditing={onSubmitEditing}
            />
        </View>
    )
}