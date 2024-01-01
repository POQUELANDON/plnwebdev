import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import IconButton from '@material-ui/core/IconButton'
import WbSunny from '@material-ui/icons/WbSunny'
import NightsStay from '@material-ui/icons/NightsStay'
import MenuIcon from '@material-ui/icons/Menu'
import HomeIcon from '@material-ui/icons/Home'
import InfoIcon from '@material-ui/icons/Info'
import PortfolioIcon from '@material-ui/icons/Work'
import ContactIcon from '@material-ui/icons/Mail'
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
            <IconButton aria-label="Accueil">
              <HomeIcon />
            </IconButton>
            Accueil
          </MenuItem>
          <MenuItem onClick={handleClose} component={NavLink} to="/about">
            <IconButton aria-label="A Propos">
              <InfoIcon />
            </IconButton>
            A Propos
          </MenuItem>
          <MenuItem onClick={handleClose} component={NavLink} to="/portfolio">
            <IconButton aria-label="Portfolio">
              <PortfolioIcon />
            </IconButton>
            Portfolio
          </MenuItem>
          <MenuItem onClick={handleClose} component={NavLink} to="/contactfrom">
            <IconButton aria-label="Me contacter">
              <ContactIcon />
            </IconButton>
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
            <IconButton aria-label="Accueil">
              <HomeIcon />
            </IconButton>
            Accueil
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? classes.btnLinkActive : classes.btnLink
            }
          >
            <IconButton aria-label="A Propos">
              <InfoIcon />
            </IconButton>
            A Propos
          </NavLink>
          <NavLink
            to="/portfolio"
            className={({ isActive }) =>
              isActive ? classes.btnLinkActive : classes.btnLink
            }
          >
            <IconButton aria-label="Portfolio">
              <PortfolioIcon />
            </IconButton>
            Portfolio
          </NavLink>
          <NavLink
            to="/contactfrom"
            className={({ isActive }) =>
              isActive ? classes.btnLinkActive : classes.btnLink
            }
          >
            <IconButton aria-label="Me contacter">
              <ContactIcon />
            </IconButton>
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
