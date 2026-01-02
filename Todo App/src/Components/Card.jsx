import React from 'react'

const Card = ({ name, imageURL, position, description, id, allUser, setAllUser }) => {

    const deleteElem = () => {
        const copyUser = [...allUser]
        copyUser.splice(id, 1)
        localStorage.setItem('all-user', JSON.stringify(copyUser))
        setAllUser(copyUser)
    }

  return (
    <div className='w-[15vw] p-7 text-center flex flex-col items-center gap-3 bg-white text-black rounded-lg'>
      {imageURL && (
        <img className='h-30 w-30 rounded-full object-cover' src={imageURL} alt="" />
      )}
      <h1 className='text-2xl font-semibold'>{name}</h1>
      <h1 className='text-base text-blue-500 font-semibold'>{position}</h1>
      <p className='text-sm font-medium leading-tight'>{description}</p>
      <button 
      onClick={() => {
        deleteElem()
      }}
      className='px-4 py-2 rounded bg-red-600 text-white font-semibold cursor-pointer text-xs active:scale-95'>Remove</button>
    </div>
  )
}

export default Card
