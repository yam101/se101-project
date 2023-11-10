import { Link } from 'react-router-dom';
import React from 'react';

function Navbar() {
    return (
        <div className="navbar">
            <ul className='pagelinks'>
                <li>
                    <Link to='/' className='navlink'>Home</Link>
                </li>
                <li>
                    <Link to='/' className='navlink'>Ur mom</Link>
                </li>
            </ul>
            <ul className='reglinks'>
                <li>
                    <Link to='/login' className='navlink'>Sign Up</Link>
                </li>
                <li>
                    <Link to='/login' className='navlink'>Login</Link>
                </li>
                <li>
                    <Link to='/profile' className='navlink'>Login</Link>
                </li>
            </ul>
        </div>
    );
};

export default Navbar;