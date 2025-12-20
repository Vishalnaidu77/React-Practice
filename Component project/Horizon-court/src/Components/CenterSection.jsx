import React from 'react'
import Button from './Button'

function CenterSection() {
    return (
         <div className="center w-[70%] mx-auto flex flex-col items-center text-center gap-5 text-white">
                <h1 className='text-7xl'>
                    Unleash Your Inner Champion Today. <br />
                    All In One Place.
                </h1>
                <h5 className='text-2xl tracking-wider font-light'>Join the ultimate tennis experience - where passion meets performance, <br /> and every swing brings you closer to victory.</h5>
                <Button text="Start your own journey" size="xl"/>
            </div>
    )
}

export default CenterSection
