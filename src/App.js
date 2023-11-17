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
  const [loginState, setLoginState] = React.useState(false);
  const handleLogin = () => {
    if (!loginState)
    setLoginState(true);
  }
  const handleLogout = () => {
    if(loginState) 
    setLoginState(false);
  }

  let AvailableRoutes;
  if (loginState) {
    AvailableRoutes = () => (
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/profile' element={<Profile />} />
      </Routes>
    );
  } else {
    AvailableRoutes = () => (
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/login' element={<Loginpage loginState={loginState} login={handleLogin} />} />
        <Route path='/signup' element={<SignUp />} />
      </Routes>
    );
  }

  return (
    <div className="App">
      <Navbar />
      <ScrollTop /> {/*listens for change in route; if detected, scroll to top of page; does not render any HTML*/}
      <div className='spacer'></div>
      <AvailableRoutes/>
    </div>
  );
}

export default App;
