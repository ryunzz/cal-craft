import * as React from 'react';
import { BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom';
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
import { useNavigate } from 'react-router-dom';
import LogoCalCraft from './LogoCalCraft.png';
// import logo from '/.logo.png';

import me from '../assets/me.png'
import siera from '../assets/siera.png'
import rylee from '../assets/rylee.jpg'
import sankritya from '../assets/sankritya.png'
import './HomePage.css'
const HomePage = () => {
  return (
    <div class="pageContent2">
      <div class="pageContent">
        {/* <Typography
          variant="h4"
          noWrap
          component="a"
          href="/home"
          sx={{
            mr: 2,
            display: { xs: 'none', md: 'flex' },
            fontFamily: 'monospace',
            fontWeight: 700,
            letterSpacing: '.3rem',
            color: 'inherit',
            textDecoration: 'none',
            fontSize: '50px',
          }} 
        >  
          Insulin Injestion Quantity Calculator</Typography> */}
        {/*Authored by Sierra J.*/}
        <h3> Cal Craft </h3>
        <div class="info"> 
          <p>Opt either to take a photo of the food you will eat, or select from our friendly menu, and we'll tell you how many units of fast-acting insulin to injest!</p>
        </div>
        <h2> Our team </h2>
        <div class="team">
          
        </div>
      </div>
    </div>
  );
};

export default HomePage;