import React, { createContext } from 'react'

export const userDataContext = createContext()

const UserContext = ({ children }) => {

  const data = [
    {
      "id": 1,
      "name": "Alice Johnson",
      "email": "alice.johnson@example.com",
      "age": 28,
      "role": "admin",
      "isActive": true
    },
    {
      "id": 2,
      "name": "Brian Smith",
      "email": "brian.smith@example.com",
      "age": 34,
      "role": "user",
      "isActive": true
    },
    {
      "id": 3,
      "name": "Carla Martinez",
      "email": "carla.martinez@example.com",
      "age": 25,
      "role": "editor",
      "isActive": false
    },
    {
      "id": 4,
      "name": "David Lee",
      "email": "david.lee@example.com",
      "age": 41,
      "role": "user",
      "isActive": true
    },
    {
      "id": 5,
      "name": "Emma Wilson",
      "email": "emma.wilson@example.com",
      "age": 30,
      "role": "user",
      "isActive": false
    }
  ]


  return (
    <div>
      <userDataContext.Provider value={data}>
        {children}
      </userDataContext.Provider>
    </div>
  )
}

export default UserContext
