import { createTheme } from '@material-ui/core/styles'

export const lightTheme = createTheme({
  palette: {
    type: 'light',
    background: {
      default: 'linear-gradient(#F2F2F2, #d6d6d621)', // dégradé de couleur pour le thème clair
      link: 'linear-gradient(to bottom, #e176478f, #FED9B7, #e176478a), radial-gradient(circle, #fff2e7, #FED9B7, #e176478a)',
      hover: 'rgba(255, 95, 16, 0.3)', // couleur au survol
      filter: 'rgba(242, 242, 242, 0.5)',
      backgroundImage: 'url(/plnwebdevlight.jpg)',
    },
    text: {
      primary: '#001F3D', // couleur de la police pour le thème clair
      secondary: '#1C191A', // couleur secondaire de la police pour le thème clair
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
      link: 'linear-gradient(to bottom, #f149029e, #f7b16c, #e176478a), radial-gradient(circle, #FED9B7, #FED9B7, #e176478a)', // Dégradé de couleur
      hover: 'rgba(242, 77, 5, 0.3)', // couleur au survol
      filter: 'rgb(177 177 177 / 50%)',
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
