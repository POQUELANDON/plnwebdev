import React, { useState, useContext, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { ProjetContext } from '../../components/Router/'
import Rating from '@material-ui/lab/Rating'
import { useStyles } from './styles'
import Slideshow from '../../components/Slideshow'
import Tag from '../../components/Tag'
import HostLinks from '../../components/HostLinks'
import Collapse from '@material-ui/core/Collapse'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import ExpandLess from '@material-ui/icons/ExpandLess'
import ExpandMore from '@material-ui/icons/ExpandMore'

const Projet = () => {
  const classes = useStyles()
  const { id } = useParams()
  const navigate = useNavigate()
  const projetsData = useContext(ProjetContext)
  const [projets, setProjets] = useState(null)
  const [open, setOpen] = useState(false)

  const handleClick = () => {
    setOpen(!open)
  }

  useEffect(() => {
    const foundProjets = projetsData.find((projets) => projets.id === id)

    if (projetsData.length === 0) {
      return
    } else if (!foundProjets) {
      navigate('/error')
      console.log("le projet n'existe pas")
    } else {
      setProjets(foundProjets)
      console.log(foundProjets)
    }
  }, [id, navigate, projetsData])

  if (!projets) {
    return <p>Chargement...</p>
  }

  return (
    <div className={classes.projetContainer}>
      <Slideshow images={projets.pictures} alt={projets.title} />
      <section className={classes.projetContent}>
        <h2 className={classes.h1}>{projets.titleH1}</h2>
        <article className={classes.projetTitle}>
          <h3 className={classes.h2}>{projets.description}</h3>
          <div className={classes.projetHostContainer}>
            <section className={classes.projetHost}>
              <HostLinks
                github={projets.host[0].github}
                site={projets.host[1].site}
                className={classes.projetHostLinks}
              />
            </section>
            <div className={classes.projetTagContainer}>
              <Rating name="read-only" value={projets.rating} readOnly />
              {projets.tags.map((tag) => (
                <Tag
                  key={tag}
                  tagName={tag}
                  className={classes.projetTagStars}
                />
              ))}
            </div>
          </div>
        </article>
        <div className={classes.projetDescription}>
          <ListItem button onClick={handleClick}>
            <ListItemText primary="Déscription" />
            {open ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              {projets.competences.map((competence, index) => (
                <ListItem key={index}>
                  <ListItemText primary={competence} />
                </ListItem>
              ))}
            </List>
          </Collapse>
        </div>
      </section>
    </div>
  )
}

export default Projet
