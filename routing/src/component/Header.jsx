import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Link, NavLink } from 'react-router';

export default function Header() {
      return (
            <Box sx={{ flexGrow: 1 }}>
                  <AppBar position="static">
                        <Toolbar>
                              <Typography variant="h6" component="div" sx={{ flexGrow: 3 }}>
                                    router
                              </Typography>
                              <Box>
                                    {/* link */}
                                    {/* <Button color="inherit" component={Link} to='/'>Home</Button>
                                    <Button color="inherit" component={Link} to='/about'>About</Button> */}

                                    {/* NavLink */}
                                    <Button component={NavLink} to="/" color="inherit" style={({ isActive }) => isActive ? { color: 'red', background: 'wheat' } : { color: 'white' }} sx={{ mr: 1 }}>Home</Button>
                                    <Button component={NavLink} color="inherit" to='/about' style={({ isActive }) => isActive ? { color: 'red', background: 'wheat' } : { color: 'white' }}>About</Button>
                                    {/* <Link to='/contact'> */}
                                    {/* <Button sx={{ mx: 1 }} color="inherit" component={Link}>Contact Us</Button> */}
                                    <Button sx={{ mx: 1 }} color="inherit" component={NavLink} to="/contact" style={({ isActive }) => isActive ? { color: 'red', background: 'wheat' } : { color: '#fff' }} >Contact Us</Button>
                                    {/* </Link> */}
                                    {/* <a href="/about">About</a> */}
                                    {/* <Link to='/about'>
                                          <Button color="inherit" >About</Button>
                                    </Link> */}
                              </Box>
                        </Toolbar>
                  </AppBar>
            </Box >
      );
}
