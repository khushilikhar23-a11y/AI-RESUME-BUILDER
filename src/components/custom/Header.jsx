import React from 'react'
import { Button } from '../ui/button'
import { Link } from 'react-router-dom'
import { UserButton, useUser } from '@clerk/clerk-react'

function Header() {
  const { user, isSignedIn } = useUser();
  return (
    <div className='p-3 px-5 flex justify-between items-center shadow-md'>
      <img src='/logo.svg' width={100} height={100} />

      {isSignedIn ? 
        <div className='flex gap-2 items-center'>
          <Link to={'/dashboard'}>
          <Button variant="outline" className='text-white'>Dashboard</Button>
          </Link>
          <UserButton />
        </div> : 
        <Link to={'/auth/sign-in'}>
          <Button className='bg-purple text-white'>Get Started</Button>
        </Link>
      }
{/* khushi@123H&.....--password */}
    </div>
  )
}

export default Header
