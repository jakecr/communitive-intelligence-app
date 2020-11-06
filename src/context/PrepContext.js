import { AsyncStorage } from 'react-native'
import createDataContext from './createDataContext'
const tertiaryColors = [
    { color: 'blue', light: '#1d63b5', dark: '#1254a1' },
    { color: 'green', light: '#539c49', dark: '#3b7534' },
    { color: 'pink', light: '#cf7a9c', dark: '#a15f79' },
    { color: 'purple', light: '#9c62cc', dark: '#894abd' },
    { color: 'red', light: '#cf4015', dark: '#8f3114' },
    { color: 'orange', light: '#cc7e1f', dark: '#a36315' },
    { color: 'teal', light: '#10b09c', dark: '#0e8071' }
]

const authReducer = (state, action) => {
    switch(action.type) {
        case 'SET_ACCENT_COLOR':
            return { ...state, tertiary: action.payload }
        case 'SET_THEME':
            return { ...state, ...action.payload }
        default:
            return state
    }
}

const changeAccentColor = dispatch => async ({ color }) => {
    await AsyncStorage.setItem('accentColor', color)

    const theme = await AsyncStorage.getItem('theme')
    const accentColor = tertiaryColors.find((item) => item.color == color)[theme ? theme : 'light']

    dispatch({ type: 'SET_ACCENT_COLOR', payload: accentColor })
}

const changeTheme = dispatch => async ({ theme }) => {
    await AsyncStorage.setItem('theme', theme)

    const acccentColorName = await AsyncStorage.getItem('accentColor')
    const accentColor = tertiaryColors.find((item) => item.color == acccentColorName)

    if(theme == 'dark') {
        dispatch({ type: 'SET_THEME', payload: { theme: 'dark', primary: '#030304', secondary: '#161618', tertiary: accentColor ? accentColor[theme] : '#043166', contrast: '#cdd1d4' } })
    }
    else {
        dispatch({ type: 'SET_THEME', payload: { theme: 'light', primary: '#efefef', secondary: '#ffffff', tertiary: accentColor ? accentColor[theme] : '#155eb0', contrast: '#16181b' } })
    }
}

const setInitialTheme = dispatch => async () => {
    const theme = await AsyncStorage.getItem('theme')
    
    const acccentColorName = await AsyncStorage.getItem('accentColor')
    const accentColor = tertiaryColors.find((item) => item.color == acccentColorName)

    if(theme == 'dark') {
        dispatch({ type: 'SET_THEME', payload: { theme: 'dark', primary: '#030304', secondary: '#161618', tertiary: accentColor ? accentColor[theme] : '#043166', contrast: '#cdd1d4' } })
    }
    else {
        dispatch({ type: 'SET_THEME', payload: { theme: 'light', primary: '#efefef', secondary: '#ffffff', tertiary: accentColor ? accentColor[theme] : '#155eb0', contrast: '#16181b' } })
    }
}

export const { Provider, Context } = createDataContext(
    authReducer,
    { changeAccentColor, changeTheme, setInitialTheme },
    { theme: 'light', primary: '#efefef', secondary: '#ffffff', tertiary: '#155eb0', contrast: '#16181b' }
)