import React from 'react'
import { createAppContainer, createSwitchNavigator } from 'react-navigation'
import ColorsScreen from './src/screens/ColorsScreen'
import HomeScreen from './src/screens/HomeScreen'
import { Provider as PrepProvider } from './src/context/PrepContext'
import { Provider as CommunicationProvider } from './src/context/CommunicationContext'
import { setNavigator } from './src/navigationRef'
 
const switchNavigator = createSwitchNavigator({
  Colors: ColorsScreen,
  Home: HomeScreen
})

const App = createAppContainer(switchNavigator)

export default () => {
  return (
    <PrepProvider>
      <CommunicationProvider>
        <App ref={(navigator) => { setNavigator(navigator) }}/>
      </CommunicationProvider>
    </PrepProvider>
  )
}

