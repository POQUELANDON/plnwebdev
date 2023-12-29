import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import IconButton from '@material-ui/core/IconButton'
import WbSunny from '@material-ui/icons/WbSunny'
import NightsStay from '@material-ui/icons/NightsStay'
import MenuIcon from '@material-ui/icons/Menu'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import { useStyles } from '../../util/styles'
import logo from '../../assets/PLN.png'

function Header({ darkMode, setDarkMode }) {
  const handleThemeChange = () => {
    setDarkMode(!darkMode)
  }
  const classes = useStyles()

  const [anchorEl, setAnchorEl] = useState(null)

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <header className={classes.header}>
      <img className={classes.logo} src={logo} alt="Logo" />
      <nav className={classes.nav}>
        <IconButton onClick={handleClick} className={classes.menuButton}>
          <MenuIcon />
        </IconButton>
        <Menu
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <MenuItem onClick={handleClose} component={NavLink} to="/">
            Accueil
          </MenuItem>
          <MenuItem onClick={handleClose} component={NavLink} to="/about">
            A Propos
          </MenuItem>
          <MenuItem onClick={handleClose} component={NavLink} to="/portfolio">
            Portfolio
          </MenuItem>
          <MenuItem onClick={handleClose} component={NavLink} to="/contactfrom">
            Me contacter
          </MenuItem>
        </Menu>
        <div className={classes.navLink}>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? classes.btnLinkActive : classes.btnLink
            }
          >
            Accueil
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? classes.btnLinkActive : classes.btnLink
            }
          >
            A Propos
          </NavLink>
          <NavLink
            to="/portfolio"
            className={({ isActive }) =>
              isActive ? classes.btnLinkActive : classes.btnLink
            }
          >
            Portfolio
          </NavLink>
          <NavLink
            to="/contactfrom"
            className={({ isActive }) =>
              isActive ? classes.btnLinkActive : classes.btnLink
            }
          >
            Me contacter
          </NavLink>
        </div>
        <IconButton onClick={handleThemeChange}>
          {darkMode ? <WbSunny /> : <NightsStay />}
        </IconButton>
      </nav>
    </header>
  )
}

export default Header