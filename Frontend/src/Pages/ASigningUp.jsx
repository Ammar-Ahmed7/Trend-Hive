// eslint-disable-next-line no-unused-vars
import React from 'react';
import { SignUp } from '@clerk/clerk-react';


const SigningUp = () => {
  return (
    <div className='flex h-screen justify-center items-center bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16'>
      <SignUp 
        signInUrl="/Alogin"
        forcedRedirectUrl={'/admin'}
      />
    </div>
  );
};

export default SigningUp;