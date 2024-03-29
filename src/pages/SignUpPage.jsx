import React from 'react';
import { Link } from 'react-router-dom';
import { SignUp } from '@clerk/clerk-react';

import Header from '../partials/Header';

function SignUpPage() {
  return (
    <div className="flex flex-col">

      {/*  Site header */}
      <Header />

      {/*  Page content */}
      <div style={{width:'fit-content',margin:'auto',marginTop:'100px'}}>
      <SignUp  />
      </div>

    </div>
  );
}

export default SignUpPage;