import React from 'react'
import ReactDOM from 'react-dom'
import { ThemeProvider } from 'styled-components'
import WebFont from 'webfontloader'
import App from './App'
import { GlobalStyled, theme } from './styles/global'

WebFont.load({
    google: {
        families: ['DM Sans', 'Chilanka'],
    },
})

ReactDOM.render(
    <ThemeProvider theme={theme}>
        <GlobalStyled />
        <App />
    </ThemeProvider>,
    document.getElementById('root')
)
