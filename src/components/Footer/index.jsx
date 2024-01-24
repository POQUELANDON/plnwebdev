import React from 'react'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import GitHubIcon from '@material-ui/icons/GitHub'
import MailIcon from '@material-ui/icons/Mail'
import { useStyles } from '../../util/styles'
import { JsonLd } from 'react-schemaorg'
import BackgroundImage from '../../assets/backgroundHFooter.svg'

function Footer() {
  const classes = useStyles()

  return (
    <footer
      className={classes.footer}
      style={{ backgroundImage: `url(${BackgroundImage})` }}
    >
      <JsonLd
        itemScope
        itemType="http://schema.org/Person"
        item={{
          '@context': 'https://schema.org',
          '@type': 'Person',
          name: 'Natacha Poque Landon',
          url: 'https://www.linkedin.com/in/natacha-poque-landon-b57930247',
          sameAs: [
            'https://github.com/POQUELANDON',
            'mailto:poque.landon.natacha@plnwebdev.tech',
          ],
          jobTitle: 'Développeur Full-stack',
          worksFor: {
            '@type': 'Organization',
            name: 'OpenClassrooms',
          },
          alumniOf: {
            '@type': 'EducationalOrganization',
            name: 'OpenClassrooms',
          },
          knowsAbout: [
            'Développement web frontend et backend',
            'Gestion de projet',
            'Bases de données',
            'Conception et architecture de logiciels',
            'Résolution de problèmes complexes',
            'SEO',
            'Publication de sites web',
          ],
          hasOccupation: {
            '@type': 'Occupation',
            name: 'Développeur Intégrateur Web',
            skills:
              'HTML5, CSS3, JavaScript Natif, React, NodeJS, Git / GitHub, MongoDB',
            occupationLocation: {
              '@type': 'City',
              name: 'ÉPÔNE',
            },
            description:
              'En tant que développeuse web passionnée, mon parcours s’est construit autour de l’univers dynamique et en constante évolution du développement web. Forte d’une formation solide chez OpenClassrooms et d’une expérience industrielle de 15 ans, j’ai acquis une expertise approfondie dans les technologies frontend et backend.',
          },
          address: {
            '@type': 'PostalAddress',
            streetAddress: '6 rue de la ferme',
            addressLocality: 'ÉPÔNE',
            postalCode: '78680',
          },
          email: 'poque.landon.natacha@plnwebdev.tech',
          telephone: '0619174679',
          mainEntityOfPage: {
            '@type': 'WebPage',
            '@id': 'https://www.linkedin.com/in/natacha-poque-landon-b57930247',
          },
        }}
      />

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
