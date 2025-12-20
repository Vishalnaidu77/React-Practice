import React from 'react'
import Button from './Button'
import BottomSection from './BottomSection'
import CenterSection from './CenterSection'

function Section() {
    return (
        <div className='section h-[88vh] bg-[url("/Hero.png")] bg-cover bg-center py-24 relative rounded-2xl'>
            <CenterSection />
            <div className="bottom absolute w-full bottom-0">
                <BottomSection />
            </div>
        </div>
    )
}

export default Section
