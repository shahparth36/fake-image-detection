import React from 'react';

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

import logo from'./logo.JPG';
import { Stack } from '@mui/material';

const pages = ['Home', 'Analytics'];

function Home() {
  return (
    <div>
        <ResponsiveAppBar />
        <div style={{ backgroundColor: '#52B58812', paddingTop: '3rem', paddingBottom: '1rem', height: '100%' }}>
            <Container style = {{ display: 'flex' }}>
				<div>
                    <div>
                        <h1 style={{ fontSize: '4rem', fontWeight: 600, lineHeight: "1.2em", color: '#212123', fontFamily: 'Montserrat', letterSpacing: '.2rem', marginBottom: '1rem' }}>Spot the Fake: Image Verification Tool</h1>
                    </div>
                    <div>
                        <p style={{ fontSize: '1rem', fontWeight: 300, fontFamily: 'Montserrat', lineHeight: '1.5em' }}>Discover the truth behind any image with TruthLens &#8211; upload your photo and find out if it&#8217;s been tampered with using our advanced ml technology.</p>
                    </div>
                    <Box sx={{ mt: 3 }}>
                        <Button style={{ backgroundColor: '#14985C', color: 'white', textTransform: 'none', fontFamily: 'Montserrat' }} variant='contained'>
                            Get Started
                        </Button>
                    </Box>
                </div>
                <div style={{ paddingLeft: '70px', alignSelf: 'flex-end' }}>
                    <img src="https://10web-site.ai/98/wp-content/uploads/sites/110/2023/05/dose-juice-sTPy-oeA3h0-unsplash_Yiy9SCjz.webp" width="80%" alt="" loading="lazy" />
                </div>
            </Container>
        </div>
    </div>
  )
}

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="static" sx= {{ backgroundColor: 'white', boxShadow: 'none' }}>
      <Container maxWidth="lg" sx= {{ color: 'black' }}>
        <Toolbar disableGutters>
          <Stack sx={{ display: { xs: 'none', md: 'flex' } }} direction="row" spacing={1}>
            <img src={logo} width="10%" />
            <Typography
                    variant="h6"
                    noWrap
                    component="a"
                    href="/"
                    sx={{
                    ml: 1,
                    fontFamily: 'Montserrat',
                    fontWeight: 600,
                    letterSpacing: '.1rem',
                    color: 'inherit',
                    textDecoration: 'none',
                    }}
                >
                    TruthLens
            </Typography>
          </Stack>
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
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Stack sx={{ display: { xs: 'flex', md: 'none' }, justifyContent: 'center' }} direction="row" spacing={1}>
            <img src={logo} width="15%" />
            <Typography
                    variant="h6"
                    noWrap
                    component="a"
                    href="/"
                    sx={{
                    ml: 1,
                    mb: 0,
                    fontFamily: 'Montserrat',
                    fontWeight: 600,
                    letterSpacing: '.1rem',
                    color: 'inherit',
                    textDecoration: 'none',
                    }}
                >
                    TruthLens
            </Typography>
          </Stack>
          <Box sx={{ flexGrow: 1, justifyContent: 'flex-end', display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: '#212123', display: 'block', textTransform: 'none', fontFamily: 'Montserrat', fontSize: 16, mx: 1 }}
              >
                {page}
              </Button>
            ))}
          </Box>

          <Box sx={{ ml: 3 }}>
            <Button style={{ backgroundColor: '#14985C', color: 'white', textTransform: 'none', fontFamily: 'Montserrat' }} variant='contained'>
                Get Started
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Home;