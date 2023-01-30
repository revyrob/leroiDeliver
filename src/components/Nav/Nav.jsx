import * as React from "react";
import { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import MenuItem from "@mui/material/MenuItem";
import logo from '../../assets/logo/whiteLogo.png';


function Nav() {
  const [anchorElNav, setAnchorElNav] = useState(null);
 
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="static" className="bg-red-900 max-w-screen-xl mx-auto">
      <Container maxWidth="2xl" className="bg-red-900">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            <a href="/" className="flex items-center">
              <img
                src={logo}
                className="h-8 mr-3 "
                alt="delivery service logo"
              />
            </a>
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
              className="hover:text-red-900"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              <MenuItem onClick={handleCloseNavMenu}>
                <a href="#services">
                  <Typography className="text-slate-100" sx={{ minWidth: 100 }}>
                    Services
                  </Typography>
                </a>
              </MenuItem>
             
              <MenuItem onClick={handleCloseNavMenu}>
                <a href="#about">
                  <Typography className="text-slate-100" sx={{ minWidth: 100 }}>
                    About
                  </Typography>
                </a>
              </MenuItem>
             
            </Menu>
          </Box>
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            <a href="/" className="flex items-center">
              <img
                src={logo}
                className="h-8 mr-3 "
                alt="delivery logo"
              />
            </a>
          </Typography>
          <Box
            className="flex justify-left items-center"
            sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}
          >
            <a href="#services">
              <Typography className="text-white" sx={{ minWidth: 100 }}>
                Services
              </Typography>
            </a>

            <a href="#about">
              <Typography className="text-white" sx={{ minWidth: 100 }}>
                About
              </Typography>
            </a>
          
          </Box>

          

          <a href="#contact">
            <Box sx={{ flexGrow: 0 }}>
              <button
                type="button"
                className=" border-solid border-white border-2 text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-lg px-2 py-1.5 text-center mx-4 md: dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
              >
                Contact
              </button>
            </Box>
          </a>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Nav;
