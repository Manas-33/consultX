import React from 'react';
import {SignIn} from '@clerk/clerk-react'

import Header from '../partials/Header';
function SignInPage() {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">

      {/*  Site header */}
      <Header />

      {/*  Page content */}
      <div style={{width:'fit-content',margin:'auto',marginTop:'100px'}}>
      <SignIn /> 
      </div>
       
    </div>
  );
}

export default SignInPage;