import React from 'react'
import Button from './Button'
import { MdArrowOutward } from "react-icons/md";

const links = ["About Us", "Services", "Coaches", "Events", "Contacts"]

function Navbar() {
    const icon = <MdArrowOutward />
    return (
        <nav className='flex py-6 justify-between items-center'>
            <div className="logo text-3xl font-semibold">Horizon Courts</div>
            <div className="links flex gap-16">
                {links.map((link, idx) => (
                    <a href="#" key={idx} className='text-lg '>{link}</a>
                ))}
            </div>
            <Button text="Book now" icon={icon}/>
        </nav>
    )
}

export default Navbar
