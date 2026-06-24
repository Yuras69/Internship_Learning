import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
    const { id } = useParams()
  return (
    <div className='bg-green-400 flex justify-center items-center h-screen text-2xl font-bold text-white px'>
      <h1>User: {id}</h1>
    </div>
  )
}

export default User
