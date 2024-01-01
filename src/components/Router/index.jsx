import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ThemeProvider } from '@material-ui/core/styles'
import Fade from '@material-ui/core/Fade'
import { Paper } from '@material-ui/core'
import { lightTheme, darkTheme } from '../../util/theme'
import { useStyles } from '../../util/styles'
import Header from '../Header/'
import Footer from '../Footer/'
import Home from '../../pages/Home/'
import Portfolio from '../../pages/Portfolio/'
import About from '../../pages/About/'
import ContactForm from '../../pages/Contact/'
import Projet from '../../pages/Projet/'
import Error from '../../pages/Error/'

// Créer un contexte pour les données du projet
export const ProjetContext = React.createContext()

function App() {
  const [projetsData, setProjetsData] = useState([])
  const [darkMode, setDarkMode] = useState(getInitialMode())
  const classes = useStyles()

  useEffect(() => {
    fetch('/projets.json')
      .then((response) => response.json())
      .then((data) => setProjetsData(data))
  }, [])

  useEffect(() => {
    localStorage.setItem('dark', JSON.stringify(darkMode))
  }, [darkMode])

  useEffect(() => {
    const theme = darkMode ? darkTheme : lightTheme
    document.body.style.fontFamily = theme.typography.fontFamily
    document.body.style.backgroundImage =
      theme.palette.background.backgroundImage
    document.body.style.backgroundRepeat = 'no-repeat'
    document.body.style.backgroundSize = 'cover'
    document.body.style.backgroundPosition = 'center'
    document.body.style.backgroundColor = theme.palette.background.filter
    document.body.style.backgroundBlendMode = 'multiply'
    document.body.style.color = theme.palette.text.primary
    document.body.style.width = '100%'
    document.body.style.height = '100%'
    document.body.style.margin = '0'
    document.body.style.backgroundAttachment = 'fixed'
  }, [darkMode])

  function getInitialMode() {
    const savedMode = JSON.parse(localStorage.getItem('dark'))
    return savedMode || false
  }

  return (
    <ProjetContext.Provider value={projetsData}>
      <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
        <Router>
          <Header
            darkMode={darkMode}
            setDarkMode={setDarkMode}
            theme={darkMode ? darkTheme : lightTheme}
          />
          <main className={classes.main}>
            <Paper className={classes.paper}>
              <Routes>
                <Route
                  path="/"
                  element={
                    <Fade in={true} timeout={1000}>
                      <Home />
                    </Fade>
                  }
                />
                <Route
                  path="/portfolio"
                  element={
                    <Fade in={true} timeout={1000}>
                      <Portfolio />
                    </Fade>
                  }
                />
                <Route
                  path="/about"
                  element={
                    <Fade in={true} timeout={1000}>
                      <About />
                    </Fade>
                  }
                />
                <Route
                  path="/contactfrom"
                  element={
                    <Fade in={true} timeout={1000}>
                      <ContactForm />
                    </Fade>
                  }
                />
                <Route
                  path="/projet/:id"
                  element={
                    <Fade in={true} timeout={1000}>
                      <Projet />
                    </Fade>
                  }
                />
                <Route
                  path="*"
                  element={
                    <Fade in={true} timeout={1000}>
                      <Error />
                    </Fade>
                  }
                />
              </Routes>
            </Paper>
          </main>
          <Footer />
        </Router>
      </ThemeProvider>
    </ProjetContext.Provider>
  )
}

export default App
