import React from 'react'

const headerStyle = {
  backgroundColor: 'skyBlue',
  height: '10vh',
  width: '100vw',
  display: 'flex',
  justifyContent: 'space-between'
};

const Header = () => {
    return(
        <>
          <div style={headerStyle}>
            <div className='logo'>logo</div>
            <div className='hamburger'>hamburger</div>
          </div>
        </>
    )
}



export default Header