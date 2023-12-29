import DefaultPicture from '../../assets/plnme.png'
import { useStyles } from '../../util/styles'

function Home() {
  const classes = useStyles()
  return (
    <article className={classes.home}>
      <img className={classes.photoHome} src={DefaultPicture} alt="pln" />
      <h1 className={classes.titleH1}>
        Natacha Poque Landon - Développeuse Frontend.
      </h1>
      <h2 className={classes.titleH2}>
        Passionnée par le développement web et le design.
      </h2>
      <h3 className={classes.titleH3}>Découvrez mon portfolio.</h3>
    </article>
  )
}

export default Home