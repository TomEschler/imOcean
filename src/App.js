import React from 'react'
import Header from './Header'
import Content from './Content'
import Footer from './Footer'
import './CSS/content.css'



const App = () => {
    return(
        <>
            <Header className="header" />
            <Content />
            <Footer className="footer" />
        </>
    )
}

export default App