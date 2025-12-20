import React from 'react'
import { MdArrowOutward } from "react-icons/md";


const images = [
    "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1621317911160-70ee9c68750d?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"

]

const links = ["Instagram", "Facebook", "Tik Tok"]

function BottomSection() {
    return (
        <div className="bottomSection w-full flex justify-between items-center text-white px-10 py-8 rounded-2xl font-semibold">
            <div className="left flex gap-2 items-center">
                <p className='text-xl font-normal'>Train with real professionals. <br /> Get the real results</p>
                <div className="imgs flex bg-[#ffffff4a] backdrop-blur-xs items-center px-2 py-2 rounded-full h-10">
                    {images.map((img, idx) => (
                        <img src={img} alt="" key={idx} className='h-8 w-8 object-cover object-center rounded-full'/>
                    ))}
                </div>
            </div>
            <div className="right flex gap-8">
                    {links.map((link, idx) => (
                        <a href={link}key={idx} className='flex items-center gap-2 font-light text-xl underline'>{link} <MdArrowOutward /></a>
                    ))}
            </div>
        </div>
    )
}

export default BottomSection
