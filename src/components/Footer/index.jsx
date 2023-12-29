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
        >
          <LinkedInIcon className={classes.footerIcone} />
        </a>
        <a
          href="https://github.com/POQUELANDON"
          target="_blank"
          rel="noopener noreferrer"
        >
          <GitHubIcon className={classes.footerIcone} />
        </a>
        <a href="mailto:poque.landon.natacha@plnwebdev.tech">
          <MailIcon className={classes.footerIcone} />
        </a>
      </section>
      <section className={classes.footerSection}>
        <p>Copyright © POQUE LANDON Natacha</p>
      </section>
    </footer>
  )
}

export default Footer