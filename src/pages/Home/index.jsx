import DefaultPicture from '../../assets/plnme.png'
import { Button } from '@material-ui/core'
import { useStyles } from './styles'

function Home() {
  const classes = useStyles()
  return (
    <section className={classes.home}>
      <div className={classes.homeTitle}>
        <h1 className={classes.titleH1}>
          Natacha Poque Landon - Développeuse Frontend.
        </h1>
        <h2 className={classes.titleH2}>
          Passionnée par le développement web et le design.
        </h2>
        <p className={classes.description}>
          Avec une formation solide en développement web chez OpenClassrooms et
          une passion pour le design, je crée des sites web qui sont non
          seulement fonctionnels, mais aussi esthétiquement agréables. Découvrez
          mon travail et voyez comment je peux transformer vos idées en réalité.
        </p>
      </div>
      <div className={classes.homeMe}>
        <img className={classes.photoHome} src={DefaultPicture} alt="pln" />
        <Button variant="contained" className={classes.btn} href="/portfolio">
          Découvrez mon portfolio
        </Button>
      </div>
    </section>
  )
}

export default Home
