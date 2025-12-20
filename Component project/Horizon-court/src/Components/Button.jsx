import React from 'react'

function Button({ text, icon, size }) {
    return (
        <button 
        className={`flex items-center text-${size} gap-2 bg-black text-white py-2 px-5 rounded-full hover:scale-[1.03] active:scale-[0.95] cursor-pointer duration-100`}
        >
            {text}{icon}
        </button>
    )
}

export default Button
