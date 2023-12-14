import React, { useEffect, useState } from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SearchIcon from '@mui/icons-material/Search';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import './header.css'
import { Button } from '@mui/material';
import { logData } from '../fetch';
const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));

const Header = () => {
  const [islogin, setIslogin] = useState(false)
  const location = useLocation();
  const navigator = useNavigate()
  const logout = () => {
    localStorage.removeItem('token');
    localStorage.clear();
    navigator('/login')
  }
  useEffect(() => {
    console.log(islogin)
    if (logData()) {
      setIslogin(true);
    }else{
      setIslogin(false);
    }
  }, [location])

  return (
    <Box sx={{ flexGrow: 1, bgcolor: 'purple' }}>
      <AppBar position="static" style={{ backgroundColor: "#3f3fb4" }}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
          >
            < ShoppingCartIcon />
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ display: { xs: 'none', sm: 'block', width: '25%' } }}
          >
            upGrad E-Shop
          </Typography>
          <Search style={{ marginLeft: "300px" }}>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
          <div className='headerLinks'>
            {islogin &&
              <>
                <NavLink to='products' style={{ margin: 'auto 10px' }} >Home</NavLink>
                <NavLink to='addproduct' style={{ margin: 'auto 10px' }} >Add Product</NavLink>
                <Button className='logout' variant='container' color='secondary'onClick={logout}>Logout</Button>
              </>
            }
            {!islogin &&
              <>
                <NavLink to='login' style={{ margin: 'auto 10px' }} >Login</NavLink>
                <NavLink to='signup'>Signup</NavLink>
              </>
            }
          </div>
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default Header