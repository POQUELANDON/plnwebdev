import { useStyles } from '../../util/styles'

function About() {
  const classes = useStyles()

  return (
    <article className="About">
      <h2 className="title">Mon parcours</h2>
      <img className="me" src="" alt="" />
      <a href="mon_cv.pdf" download className="btn">
        Télécharger mon CV
      </a>
      <section className="me">
        <h3 className="subTitle">Passionnée par le développement web, j'ai suivi une formation de développeur intégrateur web chez OpenClassrooms de 2023 à 2024.</h3>
        <p className={classes.description}>Découvrez quelques-uns des projets sur lesquels j'ai travaillé et qui m’ont permis de maîtriser les technologies clés du développement web.</p>
      </section>
      <section className="skills">
        <h3 className="subTitle">Mes compétences</h3>
        <ul className="description">
          <li>Intégration web HTML - CSS</li>
          <li>Gestion de projet et outils de développeurs</li>
          <li>Optimisation et debug d'un site</li>
          <li>Développement web avec JavaScript</li>
          <li>Développement front-end avec React</li>
          <li>Développement back-end avec NodeJS</li>
          <li>Publication d'un site web</li>
          </ul>
      </section>
    </article>
  )
}

export default About
