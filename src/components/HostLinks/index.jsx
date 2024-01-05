import React from 'react'
import GitHubIcon from '@material-ui/icons/GitHub'
import LanguageIcon from '@material-ui/icons/Language'
import { useStyles } from './styles'

const HostLinks = ({ github, site }) => {
  const classes = useStyles() // Déplacez cette ligne à l'intérieur du composant

  return (
    <div className={classes.linkContainer}>
      <a
        href={github}
        target="_blank"
        rel="noopener noreferrer"
        title={github}
        aria-label="Lien vers GitHub"
        className={classes.link}
      >
        <GitHubIcon className={classes.linkIcon} titleAccess="Lien GitHub" />
      </a>
      <a
        href={site}
        target="_blank"
        rel="noopener noreferrer"
        title={site}
        aria-label="Lien vers le site"
        className={classes.link}
      >
        <LanguageIcon
          className={classes.linkIcon}
          titleAccess="Lien du site web"
        />
      </a>
    </div>
  )
}

export default HostLinks
