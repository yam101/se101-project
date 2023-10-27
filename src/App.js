import ScrollTop from './ScrollTop';
import Homepage from './Homepage';
import Loginpage from './Loginpage';
import Profile from './Profile';
import Navbar from './Navbar';
import './App.css';
import React from 'react';
import {Routes, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <ScrollTop/> {/*listens for change in route; if detected, scroll to top of page; does not render any HTML*/}
      <Navbar/>
      <div className='spacer'></div>
      <Routes>
        <Route path='/' element={<Homepage/>}/>
        <Route path='/login' element={<Loginpage/>}/>
        <Route path='/profile' element={<Profile/>}/>
      </Routes>
    </div>
  );
}

export default App;
