import { createTheme } from '@material-ui/core/styles'

export const lightTheme = createTheme({
  palette: {
    type: 'light',
    background: {
      default: 'linear-gradient(#F2F2F2, #d6d6d621)', // dégradé de couleur pour le thème clair
      link: 'linear-gradient(to right, #FF5F10, #c6a294)', // Dégradé de couleur
      hover: 'rgba(255, 95, 16, 0.3)', // couleur au survol
      filter: 'rgba(242, 242, 242, 0.5)',
      backgroundImage: 'url(/plnwebdevlight.jpg)',
    },
    text: {
      primary: '#1C191A', // couleur de la police pour le thème clair
      secondary: '#001F3D', // couleur secondaire de la police pour le thème clair
    },
    // ...
  },
  typography: {
    fontFamily: '"Titillium Web", Arial, sans-serif',
    h1: {
      fontFamily: '"Poppins", Arial, sans-serif',
    },
    h2: {
      fontFamily: '"Poppins", Arial, sans-serif',
    },
  },
})

export const darkTheme = createTheme({
  palette: {
    type: 'dark',
    background: {
      default: 'rgba(167, 1, 146, 0.3)', // dégradé de couleur pour le thème sombre
      link: 'linear-gradient(to right, #F14902, #FA9939)', // Dégradé de couleur
      hover: 'rgba(242, 77, 5, 0.3)', // couleur au survol
      filter: 'rgba(242, 242, 242, 0.5)',
      backgroundImage: 'url(/plnwebdevdark.jpg)',
    },
    text: {
      primary: '#F6E7D8', // couleur de la police pour le thème sombre
      secondary: '#FFFFFF', // couleur secondaire de la police pour le thème clair
    },
    // ...
  },
  typography: {
    fontFamily: '"Titillium Web", Arial, sans-serif',
    h1: {
      fontFamily: '"Poppins", Arial, sans-serif',
    },
    h2: {
      fontFamily: '"Poppins", Arial, sans-serif',
    },
  },
})
