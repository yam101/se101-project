import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import { Link } from "react-router-dom";

const pages = [{ name: 'Dashboard', link: "" }];
const settings = [{ name: 'Profile', link: "profile" }, { name: 'Sign up', link: "signup" }, { name: 'Login', link: "login" }];

function ResponsiveAppBar() {
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

import { Link } from 'react-router-dom';
import React from 'react';
import Button from '@mui/material/Button';


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
                    <Link to='/signup' className='navlink'>Sign Up</Link>
                </li>
                <li>
                    <Link to='/login' className='navlink'>Login</Link>
                </li>
                <li>
                    <Link to='/profile' className='navlink'>Profile</Link>
                </li>
            </ul>
        </div>
    );
}
export default ResponsiveAppBar;