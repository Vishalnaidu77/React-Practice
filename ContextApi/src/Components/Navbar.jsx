import React from 'react'

const Navbar = ({ children }) => {
  return (
    <div className='w-full h-16 bg-amber-700 px-8 py-4 flex justify-between items-center '>
      <h1>This is Navbar</h1>
      {children[0]}
    </div>
  )
}

export default Navbar
