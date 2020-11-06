import React, { useEffect, useContext, useState } from 'react'
import { Text, View, ScrollView, TouchableOpacity } from 'react-native'
import { Context as PrepContext } from '../context/PrepContext'
import { FontAwesome, MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons'
import { Context as CommunicationContext } from '../context/CommunicationContext'
import ErrorMessage from '../components/ErrorMessage'
import BottomTabNavigator from '../components/BottomTabNavigator'
import Spacer from '../components/Spacer'
import Background from '../components/Background'
import WideButton from '../components/WideButton'
import Input from '../components/Input'
import Form from '../components/Form'

const HomePage = ({ navigation }) => {
    const { state, clearErrorMessage, newConversation, removeResponse, reportMessage, saveConversation, saveUsername, sendMessage } = useContext(CommunicationContext)
    const { state: color, setInitialTheme } = useContext(PrepContext)
    
    const [ reportingIndex, setReportingIndex ] = useState(null)
    const [ hasAcceptedRules, setHasAcceptedRules ] = useState(false)
    const [ message, setMessage ] = useState('')
    const [ username, setUsername ] = useState('')

    useEffect(() => {
        clearErrorMessage()
        setInitialTheme()
    }, [])

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
                    {!state.username 
                    ? <Form 
                        color={color.secondary} 
                        borderColor={color.theme == 'dark' ? '#28282a' : '#d7d7d7'}
                    >
                        {!!state.errorMessage
                        && <ErrorMessage>
                            {state.errorMessage}
                        </ErrorMessage>}

                        <Spacer>
                            <Input 
                                color={color.contrast}
                                Icon={FontAwesome} 
                                iconName='user-circle-o' 
                                placeholder='Username' 
                                value={username}
                                onChange={setUsername} 
                            />
                        </Spacer>
                    
                        <WideButton 
                            color={color.tertiary} 
                            title='Accept username &rarr;' 
                            onPress={() => saveUsername({ username })} 
                        />

                        <Spacer />
                    </Form>
                    : !hasAcceptedRules
                    ? <Form 
                        color={color.secondary} 
                        borderColor={color.theme == 'dark' ? '#28282a' : '#d7d7d7'}
                    >
                        <Text style={{ color: color.contrast, paddingHorizontal: 20, paddingVertical: 10, fontSize: 18 }}>
                            Please don't say anything offensive.
                        </Text>

                        <Text style={{ color: color.contrast, paddingHorizontal: 20, paddingVertical: 10, fontSize: 18 }}>
                            Please don't just type nonsense, because the bot will concider what you say in it's future conversations.
                        </Text>
                        
                        <Text style={{ color: color.contrast, paddingHorizontal: 20, paddingVertical: 10, fontSize: 18 }}>
                            Enjoy :).
                        </Text>
                    
                        <WideButton 
                            color={color.tertiary} 
                            title='Accept rules &rarr;' 
                            onPress={() => setHasAcceptedRules(true)} 
                        />

                        <Spacer />
                    </Form>
                    : <View>
                        <Form 
                            color={color.secondary} 
                            borderColor={color.theme == 'dark' ? '#28282a' : '#d7d7d7'}
                        >
                            {!!state.errorMessage
                            && <ErrorMessage>
                                {state.errorMessage}
                            </ErrorMessage>}

                            <Spacer>
                                <Input 
                                    color={color.contrast}
                                    Icon={MaterialCommunityIcons} 
                                    iconName='comment-text' 
                                    placeholder='Message' 
                                    value={message}
                                    onChange={setMessage} 
                                />
                            </Spacer>
        
                            <WideButton 
                                color={color.tertiary} 
                                title='Send message' 
                                onPress={() => {
                                    sendMessage({ username: state.username, message, conversation: state.conversation })
                                    setMessage('')
                                }} 
                            />

                            <Spacer />
                            
                            {state.conversation.slice(0).reverse().map((messageItem, messageIndex) => {
                                return (
                                    <View key={messageIndex} style={{
                                        flexDirection: 'row',
                                        flexGrow: 1,
                                        paddingVertical: 10,
                                        paddingHorizontal: 10,
                                        marginHorizontal: 15,
                                        borderTopColor: '#777',
                                        borderTopWidth: messageIndex == 0 ? 0 : 1
                                    }}>
                                        {messageIndex == reportingIndex
                                        ? <View style={{
                                            flexDirection: 'row',
                                            justifyContent: 'space-between',
                                            flexGrow: 1
                                        }}>
                                            <View style={{
                                                flexDirection: 'column',
                                                justifyContent: 'flex-start',
                                                width: messageItem.username === 'Bot' && messageItem.text !== 'I don\'t know how to respond to that. What do you think I should say?' ? 270 : 330
                                            }}>
                                                <WideButton 
                                                    color={color.tertiary} 
                                                    title='This is offensive to me' 
                                                    onPress={() => {
                                                        removeResponse({ text: messageItem.text })
                                                        setReportingIndex(null)
                                                    }} 
                                                />

                                                <WideButton 
                                                    color={color.tertiary} 
                                                    title='There is a better response' 
                                                    onPress={() => {
                                                        reportMessage({ text: messageItem.text })
                                                        setReportingIndex(null)
                                                    }} 
                                                />
                                            </View>
                                            
                                            <TouchableOpacity 
                                                onPress={() => setReportingIndex(null)}
                                            >
                                                <MaterialIcons 
                                                    name='cancel' 
                                                    style={{ color: '#a01515', fontSize: 30 }} 
                                                />
                                            </TouchableOpacity>
                                        </View>
                                        : <View style={{
                                            flexDirection: 'row',
                                            justifyContent: 'space-between',
                                            flexGrow: 1
                                        }}>
                                            <View style={{
                                                flexDirection: 'column',
                                                justifyContent: 'flex-start',
                                                width: messageItem.username === 'Bot' && messageItem.text !== 'I don\'t know how to respond to that. What do you think I should say?' ? 270 : 330
                                            }}>
                                                <TouchableOpacity onPress={() => navigation.navigate('User', { username: commentItem.user })}>
                                                    <Text style={{
                                                        fontSize: 17,
                                                        color: color.contrast,
                                                        fontWeight: 'bold'
                                                    }}>
                                                        {messageItem.username}:
                                                    </Text>
                                                </TouchableOpacity> 
                                                
                                                <Text style={{
                                                    fontSize: 17,
                                                    color: color.contrast
                                                }}>
                                                    {messageItem.text}
                                                </Text>
                                            </View>

                                            
                                            {messageItem.username === 'Bot' && messageItem.text !== 'I don\'t know how to respond to that. What do you think I should say?'
                                            && <View style={{
                                                flexDirection: 'column',
                                                justifyContent: 'flex-start'
                                            }}>
                                                <TouchableOpacity 
                                                    onPress={() => setReportingIndex(messageIndex)}
                                                >
                                                    <MaterialIcons 
                                                        name='report' 
                                                        style={{ color: '#af671a', fontSize: 30 }} 
                                                    />
                                                </TouchableOpacity>
                                            </View>}
                                        </View>}
                                    </View>
                                )
                            })}
                        </Form>

                        {state.conversation.length > 2
                        && <Form 
                            color={color.secondary} 
                            borderColor={color.theme == 'dark' ? '#28282a' : '#d7d7d7'}
                        >
                            <Text style={{ color: color.contrast, padding: 20, fontSize: 18 }}>If you think that the bot could learn from this conversation please click save conversation before you leave!</Text>

                            <WideButton 
                                color={color.tertiary} 
                                title='Save conversation' 
                                onPress={() => {
                                    saveConversation({ conversation: state.conversation })
                                }} 
                            />
                            
                            <WideButton 
                                color={color.tertiary} 
                                title='New conversation' 
                                onPress={() => {
                                    newConversation()
                                }} 
                            />

                            <Spacer />
                        </Form>}
                    </View>}
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

export default HomePage