import React, { useContext } from 'react'
import { userDataContext } from '../Context/UserContext'

const Footer = () => {

  const data = useContext(userDataContext)

  return (
    <div className='bg-amber-900 w-screen px-8 py-4 absolute bottom-0 flex justify-between items-center'>
      <h2>This is Footer</h2>
    </div>
  )
}

export default Footer
