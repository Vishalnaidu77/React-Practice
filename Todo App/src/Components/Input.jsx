import React from 'react'

const Input = ({ placeholder, type = "text", value, onChange}) => {
  return (
      <input 
      value={value}
      onChange={onChange}
      className='border-2 text-xl font-semibold px-5 py-2 rounded m-2 w-[45%]' 
      type={type} 
      placeholder={placeholder}
      />
  )
}

export default Input;
