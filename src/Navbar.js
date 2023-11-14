import { Link } from 'react-router-dom';
import React from 'react';
import Button from '@mui/material/Button';


function Navbar() {
    return (
        <div className="navbar">
            <ul className='pagelinks'>
                <li>
                    <Button variant="contained"><Link to='/' className='navlink'>Home</Link></Button> 
                </li>
                <li>
                    <Button variant="contained"><Link to='/' className='navlink'>Ur mom</Link></Button>
                </li>
            </ul>
            <ul className='reglinks'>
                <li>
                    <Button variant="contained"><Link to='/signup' className='navlink'>Sign Up</Link></Button>
                </li>
                <li>
                    <Button variant="contained"><Link to='/login' className='navlink'>Login</Link></Button> 
                </li>
                <li>
                    <Button variant="contained"><Link to='/profile' className='navlink'>Profile</Link></Button>
                </li>
            </ul>
        </div>
    );
};

export default Navbar;