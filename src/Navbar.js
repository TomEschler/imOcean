import React from 'react'
import './CSS/navbar.css'


const Navbar = () => {
    return(
        <>
            <div className='logo-header'>LOGO</div>
            <div className='nav'>
            <div className="waveWrapper waveAnimation">
  <div className="waveWrapperInner bgTop">
    <div className="wave waveTop" style={{backgroundImage: 'url( "http://front-end-noobs.com/jecko/img/wave-top.png" )'}}></div>
  </div>
  <div className="waveWrapperInner bgMiddle">
    <div className="wave waveMiddle" style={{backgroundImage: 'url( "http://front-end-noobs.com/jecko/img/wave-mid.png" )'}}></div>
  </div>
  <div className="waveWrapperInner bgBottom">
    <div className="wave waveBottom" style={{backgroundImage: 'url( "http://front-end-noobs.com/jecko/img/wave-bot.png" )'}}></div>
  </div>
</div>
            </div>
        </>
    )
}


export default Navbar