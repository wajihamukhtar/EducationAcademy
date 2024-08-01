import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import WifiCalling3Icon from '@mui/icons-material/WifiCalling3';
const pages = ['home', 'pages', 'mega menu', 'about us', 'course', 'contact'];
const settings = ['Logout'];

function NavbarLayout() {
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
  return (
    <AppBar position="static" >
      <Container maxWidth="xl" sx={{boxShadow: '5px 5px 5px 2px #00000040',position:'absolute', top:0,position:'fixed', backgroundColor: 'common.white', pr: { xl: "0", lg: '0', xs: '0' } }}>
        <Toolbar disableGutters>
          {/* <Typography
            variant="h6"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
             Academy
          </Typography> */}
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none', }}}>
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
                display: { xs: 'block', md: 'none'  },
              }}
            >
              {pages.map((page) => (
                <Typography sx={{border:'1px solid  #207ce5',
                  paddingLeft: '20px',
                  paddingRight:' 20px',
                  paddingTop: '5px',
                  paddingBottom: '5px'}} component={'li'} key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page.toUpperCase()}</Typography>
                </Typography>
              ))}
            </Menu>
          </Box>
         {/* <img src={img} alt='' sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} /> */} 
          {/* <Typography
            variant="h5"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
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
           Academy
          </Typography>  */}
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'center', gap: { lg: 5, md: 2 } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{
                  color: 'common.black', fontWeight: 'bold',
                  '&:hover': {
                    background:'none',
                    color: '#6d47ff',
                  },
                  display: 'block'
                }}
              >
                {page.toUpperCase()}
              </Button>
            ))}
          </Box>
          {/* <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
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
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box> */}
          <Box sx={{
            minHeight: "10vh",
            height:'12vh',
            minWidth: '30%',
            alignItems: 'center',
            justifyContent: 'center',
            display: "flex",
            background: 'linear-gradient(to bottom right, #e100ff , #207ce5)',
          }}>
         <Typography component={'span'} sx={{
          borderRadius:"50%",
          backgroundColor:'white',
          padding:'25px',
         ml:7,
         mr:2,
         position:'relative'
         }}><Typography component={'div'} sx={{
          borderRadius:"50%",
          background: 'linear-gradient(to bottom right, #e100ff , #207ce5)',
          display:'flex',
          justifyContent:'center',
          position:'absolute',
          top:'5px',
          left:'5px',
          paddingX:'8px',
          paddingY:'8px'
         }}>
          <WifiCalling3Icon/>
          </Typography>
          </Typography>
          <Typography sx={{fontSize:{lg:"15px",xs:'10px',md:'12px',sm:'12px'},pr:7}} variant={'p'}>(+65)456 332 5568 889</Typography>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default NavbarLayout;
