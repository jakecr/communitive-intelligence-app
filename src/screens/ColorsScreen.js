import React, { useContext, useState, useEffect } from 'react'
import { Text, View, ScrollView, Switch, Picker, AsyncStorage } from 'react-native'
import { Context as PrepContext } from '../context/PrepContext'
import Background from '../components/Background'
import BottomTabNavigator from '../components/BottomTabNavigator'
import Form from '../components/Form'
import Header from '../components/Header'
import Spacer from '../components/Spacer'

const ColorsScreen = ({ navigation }) => {
    const { state: color, changeAccentColor, changeTheme, setInitialTheme } = useContext(PrepContext)

    const [ accentColor, setAccentColor ] = useState('')
    const [ theme, setTheme ] = useState(color.theme)

    useEffect(() => {
        setInitialTheme()
        setInitialAccentColor()
    }, [])

    const setInitialAccentColor = async () => {
        const initialAccentColor = await AsyncStorage.getItem('accentColor')
        setAccentColor(initialAccentColor)
    }

    return (
        <View style={{
            flex: 1
        }}>
            <Background 
                color={color.primary} 
                theme={color.theme} 
            >
                <ScrollView 
                    contentContainerStyle={{ flexGrow: 1 }} 
                    indicatorStyle={color.theme == 'light' ? 'black' : 'white'}
                >
                    <Form 
                        color={color.secondary} 
                        borderColor={color.theme == 'dark' ? '#28282a' : '#d7d7d7'}
                    >
                        <Header color={color.contrast}>
                            Color settings:
                        </Header>

                        <Spacer />

                        <Text
                            style={{
                                fontSize: 18,
                                textAlign: 'center',
                                color: '#777',
                                marginBottom: 5
                            }}
                        >
                            Dark mode:
                        </Text>
                        <Switch 
                            onValueChange={(value) => {
                                if(value) {
                                    setTheme('dark')
                                    changeTheme({ theme: 'dark' })
                                }else {
                                    setTheme('light')
                                    changeTheme({ theme: 'light' })
                                }
                            }}
                            trackColor={{ false: '#a01515', true: color.tertiary }}
                            value={theme == 'dark'}
                            style={{
                                alignSelf: 'center'
                            }}
                        />

                        <Spacer />

                        <Text
                            style={{
                                fontSize: 18,
                                textAlign: 'center',
                                color: '#777'
                            }}
                        >
                            Accent color:
                        </Text>

                        <Picker 
                            selectedValue={accentColor}
                            onValueChange={(itemValue, itemIndex) => {
                                setAccentColor(itemValue)
                                changeAccentColor({ color: itemValue })
                            }}
                            mode='dialog'
                            style={{
                                width: 120,
                                alignSelf: 'center'
                            }}
                        >
                            <Picker.Item color={color.contrast} label='Blue' value='blue'/>
                            <Picker.Item color={color.contrast} label='Pink' value='pink'/>
                            <Picker.Item color={color.contrast} label='Purple' value='purple'/>
                            <Picker.Item color={color.contrast} label='Red' value='red'/>
                            <Picker.Item color={color.contrast} label='Orange' value='orange'/>
                            <Picker.Item color={color.contrast} label='Teal' value='teal'/>
                        </Picker>
                    </Form>
                </ScrollView>
            </Background>

            <BottomTabNavigator 
                backgroundColor={color.tertiary} 
                navigate={navigation.navigate} 
                currentRoute={navigation.state.routeName}
                borderColor={color.theme == 'dark' ? '#28282a' : '#d7d7d7'}
            />
        </View>
    )
}

export default ColorsScreen