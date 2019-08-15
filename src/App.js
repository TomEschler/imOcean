import React from 'react'
import Header from './Header'
import Content from './Content'
import Footer from './Footer'
import About from './About'
import './CSS/content.css'



const App = () => {
    return(
        <>
            <div className='title'>ImOcean</div>
            <Header />
            <Content />
            <Footer className="footer" />
        </>
    )
}

export default App