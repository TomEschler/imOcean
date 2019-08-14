import React from 'react'
import Header from './Header'
import Content from './Content'
import Footer from './Footer'
import './CSS/content.css'



const App = () => {
    return(
        <>
            <div className='title'>ImOcean</div>
            <Header />
            <Content />
            <Footer />
        </>
    )
}

export default App