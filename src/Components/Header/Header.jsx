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
import AddBusinessOutlinedIcon from '@mui/icons-material/AddBusinessOutlined';
import StorefrontOutlinedIcon from '@mui/icons-material/StorefrontOutlined';
import { Link } from 'react-router-dom';
import { userLoginContext } from '../../Context/Context';
import { cartItemContext } from '../../Context/Context';
import { useContext } from 'react';
function Header() {
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

    const [menu, setMenu] = React.useState('Home')
    const { setAddTocart } = useContext(cartItemContext)
    // handle logout button
    const { setUserLoginInfo } = React.useContext(userLoginContext)
    const handleLogOut = () => {
        setUserLoginInfo('');
        setAddTocart('');
    }
    return (
        <AppBar position="static" sx={{ bgcolor: '#fde1ff', color: 'black' }}>
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <StorefrontOutlinedIcon sx={{ display: { xs: 'none', md: 'flex' }, fontSize: '2.3rem', mr: 1, paddingRight: '1rem' }} />
                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        href='/'
                        sx={{
                            mr: 2,
                            display: { xs: 'none', md: 'flex' },
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        AKUA
                    </Typography>

                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: 'block', md: 'none' },
                            }}
                        >
                            <Link to='/' style={{ textDecoration: 'none', color: 'black' }}> <MenuItem onClick={handleCloseNavMenu}>
                                <Typography textAlign="center">Home</Typography>
                            </MenuItem></Link>
                            <Link to='/mens' style={{ textDecoration: 'none', color: 'black' }}> <MenuItem onClick={handleCloseNavMenu}>
                                <Typography textAlign="center">Mans</Typography>
                            </MenuItem></Link>
                            <Link to='/womens' style={{ textDecoration: 'none', color: 'black' }}> <MenuItem onClick={handleCloseNavMenu}>
                                <Typography textAlign="center">Womans</Typography>
                            </MenuItem></Link>
                            <Link to='/login' style={{ textDecoration: 'none', color: 'black' }}> <MenuItem onClick={handleCloseNavMenu}>
                                <Typography textAlign="center">Login</Typography>
                            </MenuItem></Link>

                        </Menu>
                    </Box>
                    <StorefrontOutlinedIcon sx={{ display: { xs: 'flex', md: 'none' }, fontSize: '2.3rem', mr: 1 }} />
                    <Typography
                        variant="h5"
                        noWrap
                        component="a"
                        href="/"
                        sx={{
                            mr: 2,
                            display: { xs: 'flex', md: 'none' },
                            flexGrow: 1,
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        AKUA
                    </Typography>
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, color: 'black' }}>

                        <Button onClick={handleCloseNavMenu} sx={{ my: 2, color: 'white', display: 'block' }}
                        >
                            <Link to='/' onClick={() => { setMenu('Home') }} style={{ color: 'black', textDecoration: 'none' }}> Home</Link>
                            {menu === 'Home' && <hr style={{ border: 'none', backgroundColor: '#ff4141', height: '3px', width: '100%' }} />}
                        </Button>
                        <Button onClick={handleCloseNavMenu} sx={{ my: 2, color: 'white', display: 'block' }}
                        >
                            <Link to='/mens' onClick={() => { setMenu('mans') }} style={{ color: 'black', textDecoration: 'none' }}> Mans</Link>
                            {menu === 'mans' && <hr style={{ border: 'none', backgroundColor: '#ff4141', height: '3px', width: '100%' }} />}
                        </Button>
                        <Button onClick={handleCloseNavMenu} sx={{ my: 2, color: 'white', display: 'block' }}
                        >
                            <Link to='/womens' onClick={() => { setMenu('woman') }} style={{ color: 'black', textDecoration: 'none' }}> Womans</Link>
                            {menu === 'woman' && <hr style={{ border: 'none', backgroundColor: '#ff4141', height: '3px', width: '100%' }} />}
                        </Button>
                        <Button onClick={handleCloseNavMenu} sx={{ my: 2, color: 'white', display: 'block' }}
                        >
                            <Link to='/login' onClick={() => { setMenu('login') }} style={{ color: 'black', textDecoration: 'none' }}> Login</Link>
                            {menu === 'login' && <hr style={{ border: 'none', backgroundColor: '#ff4141', height: '3px', width: '100%' }} />}
                        </Button>

                    </Box>

                    <Box sx={{ flexGrow: 0 }}>
                        <Tooltip title="Open settings">
                            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                <Avatar alt='' src="/static/images/avatar/2.jpg" />
                            </IconButton>
                        </Tooltip>
                        <Menu
                            sx={{ mt: '45px' }}
                            id="menu-appbar"
                            anchorEl={anchorElUser}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            open={Boolean(anchorElUser)}
                            onClose={handleCloseUserMenu}
                        >
                            <Link to='/profile' style={{ textDecoration: 'none', color: 'black' }}> <MenuItem onClick={handleCloseUserMenu}>
                                <Typography textAlign="center">Profile</Typography>
                            </MenuItem></Link>
                            <Link to='/login' style={{ textDecoration: 'none', color: 'black' }}> <MenuItem onClick={handleCloseUserMenu}>
                                <Typography textAlign="center">Login</Typography>
                            </MenuItem></Link>
                            <Link to='/cart' style={{ textDecoration: 'none', color: 'black' }}><MenuItem onClick={handleCloseUserMenu}>
                                <Typography textAlign="center">Cart</Typography>
                            </MenuItem></Link>
                            <Link to='/' style={{ textDecoration: 'none', color: 'black' }}> <MenuItem onClick={handleCloseUserMenu}>
                                <Typography textAlign="center" onClick={handleLogOut}>Log Out</Typography>
                            </MenuItem></Link>
                        </Menu>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}
export default Header;
