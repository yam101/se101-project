import ScrollTop from './ScrollTop';
import Homepage from './Homepage';
import Loginpage from './Loginpage';
import Profile from './Profile';
import ButtonAppBar from './Navbar_2';
import './App.css';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import SignUp from './SignUp';

function App() {
  return (
    <div className="App">
      <ButtonAppBar />
      <ScrollTop /> {/*listens for change in route; if detected, scroll to top of page; does not render any HTML*/}
      <div className='spacer'></div>
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/login' element={<Loginpage />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/signup' element={<SignUp />} />
      </Routes>
    </div>
  );
}

export default App;
