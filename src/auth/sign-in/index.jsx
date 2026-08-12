import { SignIn } from '@clerk/clerk-react'
import React from 'react'

function SignInPage() {
  return (
    <div className='flex justify-center min-h-[100vh] items-center'>
      <SignIn/>
    </div>
  )
}

export default SignInPage
