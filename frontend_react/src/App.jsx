import React from 'react'
import AppStyled from './App.styled'
import { Navbar } from './components'
import { About, Footer, Header, Skills, Testimonial, Work } from './containers'

const App = () => {
    return (
        <AppStyled className="app">
            <Navbar />
            <Header />
            <About />
            <Work />
            <Skills />
            <Testimonial />
            <Footer />
        </AppStyled>
    )
}

export default App
