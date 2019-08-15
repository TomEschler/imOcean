import React from 'react'
import Menu from './Menu'
import Content from './Content'
import Footer from './Footer'
import './CSS/content.css'



const App = () => {
    return(
        <>
            <div className='title'></div>
            <Menu />
            <Content />
            <Footer />
            
        </>
    )
}

export default App