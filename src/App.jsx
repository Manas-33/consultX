import React, { useEffect } from 'react';
import {
  Routes,
  Route,
  useLocation
} from 'react-router-dom';

import 'aos/dist/aos.css';
import './css/style.css';

import AOS from 'aos';

import ClerkProfile from './pages/ClerkProfile';
import MainRender from './pages/MainRender';
import SignIn from './pages/SignInPage';
import SignUp from './pages/SignUpPage';
import ResetPassword from './pages/ResetPassword';
import BrowseClientList from './pages/BrowseClientList';
import FindExperts from './pages/FindExperts';

function App() {

  const location = useLocation();

  useEffect(() => {
    AOS.init({
      once: true,
      disable: 'phone',
      duration: 700,
      easing: 'ease-out-cubic',
    });
  });

  useEffect(() => {
    document.querySelector('html').style.scrollBehavior = 'auto'
    window.scroll({ top: 0 })
    document.querySelector('html').style.scrollBehavior = ''
  }, [location.pathname]); // triggered on route change

  return (
    <>
      <Routes>
        <Route exact path="/" element={<MainRender />} />
        <Route path="/find" element={<FindExperts />} />
        <Route path='/browse' element={<BrowseClientList/>}/>
        <Route path="/profile" element={<ClerkProfile />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/reset-password" element={<ResetPassword />} />
      </Routes>
    </>
  );
}

export default App;
