// eslint-disable-next-line no-unused-vars
import React from 'react';
import { SignIn } from '@clerk/clerk-react';

const SigningIn = () => {
  return (
    <div className='flex h-screen justify-center items-center bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16'>
      <SignIn 
        signUpUrl="/CSignup"
       forceRedirectUrl={'/dashboard'}
      />
    </div>
  );
};

export default SigningIn;