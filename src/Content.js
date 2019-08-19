import React from 'react'
import Articles from './Articles'

const Content = () => {
    return(
        <>
            <div className='container'>
                <div className='slide-show'>
                    <h2 style={{textShadow: '2px 2px #000000'}}>Curabitur sit amet elementum</h2>
                </div>
                <div className='top-text'>
                    In hac habitasse platea dictumst. Aenean commodo, arcu a commodo efficitur, libero dolor mollis turpis, non posuere orci leo
                </div>
                <div className='item-1'>
                    <div className='title1'>EDUCATION</div>
                </div>
                <div className='item-2'>
                    <div className='title2'>EVENTS</div>
                </div>
                <div className='info'>
                    <h2>Aliquam erat volutpat</h2>
                    <p>
                    <br></br>
                    In hac habitasse platea dictumst. Aenean commodo, arcu a commodo efficitur, libero dolor mollis turpis, non posuere orci leo eget enim. Curabitur sit amet elementum orci, pulvinar dignissim urna.
                    <br></br>
                    <br></br>
                    </p> 
                </div>
                <div className='info-image'></div>
                <div className='info2'>
                        <p>
                        Morbi id ex eu ex congue laoreet. Aenean tincidunt dolor justo, semper pretium libero luctus nec. Ut vulputate metus accumsan leo imperdiet tincidunt. Phasellus nec rutrum dolor.
                        </p>
                        <br></br>
                        <br></br>
                </div>
                <Articles />
                <div className='info3'>
                    <br></br>
                    <br></br>
                    <h2>Aliquam erat volutpat.</h2>
                    <br></br>
                    <p>
                    In hac habitasse platea dictumst. Aenean commodo, arcu a commodo efficitur, libero dolor mollis turpis, non posuere orci leo eget enim. Curabitur sit amet elementum orci, pulvinar dignissim urna. Morbi id ex eu ex congue laoreet. Aenean tincidunt dolor justo, semper pretium libero luctus nec.
                    </p>
                </div>
                <div className='contact'>CONTACT-component inside</div>
            </div>
        </>
    )
}



export default Content