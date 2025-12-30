import React, { useState } from 'react'
import Input from './Components/Input';
import Card from './Components/Card';

const App = () => {

  const [name, setName] = useState('')  
  const [imageURL, setImageURL] = useState('')
  const [position, setPosition] = useState('')
  const [description, setDescription] = useState('')

  const [allUser, setAllUser] = useState(JSON.parse(localStorage.getItem('all-user')) || [])
  
  const submitHandler = (e) => {
    e.preventDefault()

    const oldUser = [...allUser]
    oldUser.push({ name, imageURL, position, description })

    setAllUser(oldUser)
    localStorage.setItem('all-user', JSON.stringify(oldUser))
    
    setName('')    
    setImageURL('')
    setPosition('')
    setDescription('')
  }

  return (
    <div className='h-screen'>
      <form 
      className='flex flex-wrap p-2 justify-center'
      onSubmit={(e) => {
        submitHandler(e)
      }}
      >
      
        <Input 
        type='text'
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        />
        
        <Input 
        type='text'
        placeholder="Enter mage URL"
        value={imageURL}
        onChange={(e) => setImageURL(e.target.value)}
        />

        <Input 
        type='text'
        placeholder="Enter position"
        value={position}
        onChange={(e) => setPosition(e.target.value)}
        />

        <Input 
        type='text'
        placeholder="Enter description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        />

        <button 
        className='px-5 py-2 bg-[royalblue] rounded m-2 w-[90%] active:scale-98 duration-100'
        
        >Create User</button>
      </form>

      <div className='flex flex-wrap px-2 py-10 gap-3'>
        {allUser && allUser.map((user, idx) => (
          <Card 
          key={idx}
          id={idx}
          name={user.name} 
          imageURL={user.imageURL} 
          position={user.position} 
          description={user.description}
          allUser={allUser}
          setAllUser={setAllUser}
          />
        ))}
      </div>
    </div>
  )
}

export default App;


