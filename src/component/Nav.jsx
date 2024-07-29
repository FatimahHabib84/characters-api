import React from 'react'
import { Link } from 'react-router-dom'
function Nav() {
  return (
    <div className='flex flex-row gap-4 bg-emerald-950 text-white w-full col-span-3 py-2 shadow-md shadow-emerald-950 items-center mb-8'>
        <Link to={'/'}><img className='h-12 w-12 ml-14 max-sm:ml-4 rounded-full' src='https://finalspaceapi.com/api/character/avatar/mooncake.jpg'/></Link>
        <Link to={'/'}><p className='font-bold'>Sweet Characters</p></Link>
    </div>
  )
}

export default Nav