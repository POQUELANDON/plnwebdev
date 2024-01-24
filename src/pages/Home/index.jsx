import React, { useState, useEffect } from 'react'
import DefaultPicture from '../../assets/plnme.jpg'
import MainLayout from '../../components/MainLayout/'
import BackgroundImage from '../../assets/backgroundHome.svg'
import LetterAnimation from '../../components/LetterAnimation'
import { NavLink } from 'react-router-dom'
import { Button } from '@material-ui/core'
import { useStyles } from './styles'
import Devices from '@material-ui/icons/Devices'
import Storage from '@material-ui/icons/Storage'
import Speed from '@material-ui/icons/Speed'
import Assignment from '@material-ui/icons/Assignment'
import { Fade, Zoom } from '@mui/material'
import { useSpring, animated } from 'react-spring'
import Grid from '@mui/material/Unstable_Grid2'
import BackgroundImageTitle from '../../assets/backgroundTitlesvg.svg'

// Liste des compétences et des descriptions
const skills = [
  {
    Icon: Devices, // Une icône représentant plusieurs types d'appareils
    title: 'Développement front-end',
    description:
      'Création de sites web responsifs et dynamiques avec HTML, CSS, JavaScript et React.',
  },
  {
    Icon: Storage, // Une icône représentant une base de données
    title: 'Développement back-end',
    description:
      "Création d'APIs et de bases de données avec NodeJS, Express et MongoDB pour des sites web complets et dynamiques.",
  },
  {
    Icon: Speed, // Une icône représentant un compteur de vitesse
    title: 'Optimisation des performances',
    description:
      'Maintenance de sites web existants pour un fonctionnement optimal et une bonne visibilité SEO.',
  },
  {
    Icon: Assignment, // Une icône représentant un document ou un cahier
    title: 'Gestion de projet web',
    description:
      'De la planification à la présentation de la solution au client, en passant par la rédaction des spécifications techniques.',
  },
]

function Home() {
  const classes = useStyles()
  const [checked, setChecked] = useState(false)
  const [hoveredSkill, setHoveredSkill] = useState(null)

  useEffect(() => {
    setChecked(true)
  }, [])

  return (
    <MainLayout>
      {/* backgroundImage={BackgroundImage} */}
      <section className={classes.home} aria-label="Accueil">
        <Fade orientation="horizontal" in={true} timeout={5000}>
          <div className={classes.homeMe}>
            {' '}
            <img
              className={classes.photoHome}
              src={DefaultPicture}
              alt="Natacha Poque Landon"
            />
            <h1 className={classes.titleH1}>Poque Landon Natacha</h1>
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
        </Fade>
        <div className={classes.homeTitle}>
          <h2
            className={classes.titleH2}
            style={{ backgroundImage: `url(${BackgroundImageTitle})` }}
          >
            <LetterAnimation text={'Développement web front-end et back-end'} />
          </h2>
          <h3 className={classes.titleH3}>
            Création de sites web fonctionnels et agréables.
          </h3>
          <div className={classes.skills}>
            <Grid
              container
              spacing={3}
              sx={{ flexGrow: 1 }}
              className={classes.skillsGrid}
            >
              {skills.map((skill, index) => (
                <Zoom
                  in={checked}
                  style={{ transitionDelay: `${index * 500}ms` }}
                  key={index}
                >
                  <Grid
                    className={classes.skillsGridItem}
                    xs={10}
                    xsOffset={3}
                    md={2}
                    mdOffset={0}
                  >
                    <div
                      className={classes.skillsItem}
                      onMouseEnter={() => setHoveredSkill(index)}
                      onMouseLeave={() => setHoveredSkill(null)}
                    >
                      <skill.Icon
                        aria-hidden="true"
                        className={classes.skillsIcons}
                      />
                      {hoveredSkill === index ? skill.description : skill.title}
                    </div>
                  </Grid>
                </Zoom>
              ))}
            </Grid>
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
      </section>
    </MainLayout>
  )
}

export default Home
