import React from 'react'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import GitHubIcon from '@material-ui/icons/GitHub'
import MailIcon from '@material-ui/icons/Mail'
import { useStyles } from '../../util/styles'

function Footer() {
  const classes = useStyles()

  return (
    <footer className={classes.footer}>
      <section className={classes.footerLink}>
        <a
          href="https://www.linkedin.com/in/natacha-poque-landon-b57930247"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Lien LinkedIn"
        >
          <LinkedInIcon
            className={classes.footerIcone}
            titleAccess="Icône LinkedIn"
          />
        </a>
        <a
          href="https://github.com/POQUELANDON"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Lien GitHub"
        >
          <GitHubIcon
            className={classes.footerIcone}
            titleAccess="Icône GitHub"
          />
        </a>
        <a
          href="mailto:poque.landon.natacha@plnwebdev.tech"
          aria-label="Lien Email"
        >
          <MailIcon className={classes.footerIcone} titleAccess="Icône Email" />
        </a>
      </section>
      <section className={classes.footerSection}>
        <p>Copyright © POQUE LANDON Natacha</p>
      </section>
    </footer>
  )
}

export default Footer
