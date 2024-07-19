import React from 'react'
import { Link } from 'react-router-dom'
import { ModeToggle } from './mode-toggle'

function Navbar() {
  return (
    <div className='flex mb-8 mx-auto border-b border-gray-200 dark:border-gray-900 py-4 px-8 justify-between items-center'>
        <Link to='#' className='text-xl font-bold bg-white dark:bg-black'>Vite</Link>
        <ModeToggle/>
    </div>
  )
}

export default Navbar