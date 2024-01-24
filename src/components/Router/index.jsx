import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ThemeProvider } from '@material-ui/core/styles'
import { lightTheme, darkTheme } from '../../util/theme'
import Header from '../Header/'
import Footer from '../Footer/'
import Home from '../../pages/Home/'
import Portfolio from '../../pages/Portfolio/'
import About from '../../pages/About/'
import ContactForm from '../../pages/Contact/'
import Projet from '../../pages/Projet/'
import Error from '../../pages/Error/'
import ListeProjets from '../ListeProjets/'

export const ProjetContext = React.createContext() // Création d'un contexte pour les données du projet

function App() {
  // Déclaration du composant App
  const [darkMode, setDarkMode] = useState(getInitialMode()) // Déclaration de l'état du mode sombre, initialisé au mode sauvegardé ou à false

  useEffect(() => {
    // Hook d'effet pour sauvegarder le mode sombre
    localStorage.setItem('darkTheme', JSON.stringify(darkMode)) // Sauvegarde du mode sombre dans le stockage local
  }, [darkMode]) // Dépendances du hook d'effet (le mode sombre, donc le hook s'exécute chaque fois que le mode sombre change)

  useEffect(() => {
    // Hook d'effet pour appliquer le thème
    const theme = darkMode ? darkTheme : lightTheme // Sélection du thème en fonction du mode sombre
    // Application du thème au corps du document
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
  }, [darkMode]) // Dépendances du hook d'effet (le mode sombre, donc le hook s'exécute chaque fois que le mode sombre change)

  function getInitialMode() {
    // Fonction pour obtenir le mode initial
    const savedMode = JSON.parse(localStorage.getItem('darkTheme')) // Récupération du mode sauvegardé
    return savedMode || false // Retour du mode sauvegardé ou de false si aucun mode n'est sauvegardé
  }

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <ListeProjets url="/projets.json">
        {(projetsData, projetsUniques) => (
          <ProjetContext.Provider value={projetsData}>
            <Router>
              <Header
                darkMode={darkMode}
                setDarkMode={setDarkMode}
                theme={darkMode ? darkTheme : lightTheme}
              />

              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/portfolio" element={<Portfolio />} />
                <Route path="/portfolio" element={<Portfolio />} />
                <Route path="/contactfrom" element={<ContactForm />} />
                <Route path="/projet/:id" element={<Projet />} />
                <Route path="*" element={<Error />} />
              </Routes>
              <Footer />
            </Router>
          </ProjetContext.Provider>
        )}
      </ListeProjets>
    </ThemeProvider>
  )
}

export default App
