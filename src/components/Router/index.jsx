import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ThemeProvider } from '@material-ui/core/styles'
import { Paper } from '@material-ui/core'
import { lightTheme, darkTheme } from '../../util/theme'
import Header from '../Header/'
import Footer from '../Footer/'
import Home from '../../pages/Home/'
import Portfolio from '../../pages/Portfolio/'
import About from '../../pages/About/'
import ContactForm from '../../pages/Contact/'
import Projet from '../../pages/Projet/'
import Error from '../../pages/Error/'
import { ParallaxProvider, Parallax } from 'react-scroll-parallax'
import { useStyles } from '../../util/styles'

// Créer un contexte pour les données du projet
export const ProjetContext = React.createContext()

function App() {
  const classes = useStyles()
  const [projetsData, setProjetsData] = useState([])
  const [darkMode, setDarkMode] = useState(getInitialMode())

  useEffect(() => {
    fetch('/projets.json')
      .then((response) => response.json())
      .then((data) => setProjetsData(data))
  }, [])

  useEffect(() => {
    localStorage.setItem('darkTheme', JSON.stringify(darkMode))
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
    const savedMode = JSON.parse(localStorage.getItem('darkTheme'))
    return savedMode || false
  }
  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <ProjetContext.Provider value={projetsData}>
        <ParallaxProvider scrollAxis="horizontal">
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
                      <Parallax speed={-5}>
                        <Home />
                      </Parallax>
                    }
                  />
                  <Route
                    path="/portfolio"
                    element={
                      <Parallax speed={-5}>
                        <Portfolio />
                      </Parallax>
                    }
                  />
                  <Route
                    path="/about"
                    element={
                      <Parallax speed={-5}>
                        <About />
                      </Parallax>
                    }
                  />
                  <Route
                    path="/contactfrom"
                    element={
                      <Parallax speed={-5}>
                        <ContactForm />
                      </Parallax>
                    }
                  />
                  <Route
                    path="/projet/:id"
                    element={
                      <Parallax speed={-5}>
                        <Projet />
                      </Parallax>
                    }
                  />
                  <Route
                    path="*"
                    element={
                      <Parallax>
                        <Error />
                      </Parallax>
                    }
                  />
                </Routes>
              </Paper>
            </main>
            <Footer />
          </Router>
        </ParallaxProvider>
      </ProjetContext.Provider>
    </ThemeProvider>
  )
}

export default App
