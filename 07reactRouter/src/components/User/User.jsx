import React from 'react'
import { useParams } from 'react-router-dom'
function User() {
    const {userid} = useParams();
  return (
    <div className='bg-gray-900 text-white text-3xl p-4 text-center flex items-center justify-center'>User : {userid} </div>
  )
}

export default User