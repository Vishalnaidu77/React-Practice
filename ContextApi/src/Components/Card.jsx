import React, { useContext } from 'react'
import { userDataContext } from '../Context/UserContext'

const Card = () => {

  const data = useContext(userDataContext)
  

  return (
    <div className='flex gap-4'>
        {data.map((user, idx) => (
            <div key={idx} className='bg-[#333] h-72 w-56 rounded-lg p-5'>
                <h1 className='text-white'>{user.name}</h1>
            </div>
        ))}
    </div>
  )
}

export default Card
