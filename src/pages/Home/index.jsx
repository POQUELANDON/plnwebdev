import React from 'react'
import DefaultPicture from '../../assets/plnme.jpg'
import { NavLink } from 'react-router-dom'
import { Button } from '@material-ui/core'
import { useStyles } from './styles'
import WebIcon from '@material-ui/icons/Web' // Importez les icônes appropriées
import CodeIcon from '@material-ui/icons/Code'
import TrendingUpIcon from '@material-ui/icons/TrendingUp'

function Home() {
  const classes = useStyles()
  return (
    <section className={classes.home} aria-label="Accueil">
      <div className={classes.homeTitle}>
        <h1 className={classes.titleH1}>Natacha Poque Landon</h1>
        <h2 className={classes.titleH2}>
          Développement web front-end et back-end
        </h2>
        <h3 className={classes.titleH3}>
          Création de sites web fonctionnels et agréables.
        </h3>
        <div className={classes.skills}>
          <div className={classes.skillsItem}>
            <WebIcon aria-hidden="true" /> Intégration web avec HTML et CSS
          </div>
          <div className={classes.skillsItem}>
            <CodeIcon aria-hidden="true" /> Développement avec React et NodeJS
          </div>
          <div className={classes.skillsItem}>
            <TrendingUpIcon aria-hidden="true" /> SEO et gestion de projet
          </div>
        </div>
        <p className={classes.description}>
          Passionnée par le web et le design, avec une formation solide et une
          expérience industrielle de 15 ans, je suis parfaitement équipée pour
          transformer vos idées en réalité.
        </p>
        <p className={classes.description}>
          Que vous soyez un recruteur à la recherche d'un développeur web
          compétent ou un client ayant besoin d'une solution web innovante, je
          vous invite à explorer mon portfolio.
        </p>
      </div>
      <div className={classes.homeMe}>
        <img
          className={classes.photoHome}
          src={DefaultPicture}
          alt="Natacha Poque Landon"
        />
        <Button variant="contained" className={classes.btn}>
          <NavLink to="/portfolio" className={classes.btnLink}>
            Découvrez mon travail
          </NavLink>
        </Button>
        <Button variant="contained" className={classes.btn}>
          <NavLink to="/contactfrom" className={classes.btnLink}>
            Contactez-moi
          </NavLink>
        </Button>
      </div>
    </section>
  )
}

export default Home
