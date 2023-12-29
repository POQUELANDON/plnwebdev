import { createTheme } from '@material-ui/core/styles'

export const lightTheme = createTheme({
  palette: {
    type: 'light',
    background: {
      default: 'linear-gradient(#F2F2F2, #d6d6d621)', // dégradé de couleur pour le thème clair
      link: 'linear-gradient(to right, #A70192, #D73CBE)', // Dégradé de couleur
      hover: 'rgba(167, 1, 146, 0.3)', // couleur au survol
      filter: 'rgba(242, 242, 242, 0.5)',
      backgroundImage: 'url(/plnwebdevlight.jpg)',
    },
    text: {
      primary: '#170833', // couleur de la police pour le thème clair
      secondary: '#251633', // couleur secondaire de la police pour le thème clair
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
      default: 'linear-gradient(#5E417F, #391f592b)', // dégradé de couleur pour le thème sombre
      link: 'linear-gradient(to right, #A70192, #D73CBE)', // Dégradé de couleur
      hover: 'rgba(167, 1, 146, 0.3)', // couleur au survol
      filter: 'rgba(242, 242, 242, 0.5)',
      backgroundImage: 'url(/plnwebdevdark.jpg)',
    },
    text: {
      primary: '#D73CBE', // couleur de la police pour le thème sombre
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