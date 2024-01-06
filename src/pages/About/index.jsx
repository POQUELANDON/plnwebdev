import { Card, CardContent, Typography } from '@material-ui/core'
import WebIcon from '@material-ui/icons/Web'
import DeveloperModeIcon from '@material-ui/icons/DeveloperMode'
import BugReportIcon from '@material-ui/icons/BugReport'
import CodeIcon from '@material-ui/icons/Code'
import { FaReact } from 'react-icons/fa'
import StorageIcon from '@material-ui/icons/Storage'
import PublicIcon from '@material-ui/icons/Public'
import { useStyles } from './styles'
import { Button } from '@material-ui/core'
import GetAppIcon from '@material-ui/icons/GetApp'
import DefaultPicture from '../../assets/plnwebdevlogo.png'
import MiroFrame from '../../components/MiroFrame'

const skills = [
  {
    Icon: WebIcon,
    title: 'Intégration web HTML - CSS',
    description:
      'Création de pages web accessible et responsive desktop, tablette et mobile.',
  },
  {
    Icon: DeveloperModeIcon,
    title: 'Gestion de projet et outils de développeurs',
    description:
      "Gestion efficace des projets de développement web, y compris la planification, la coordination des équipes, le suivi des progrès et l'utilisation d'outils spécifiques pour faciliter ces tâches.",
  },
  {
    Icon: BugReportIcon,
    title: 'SEO',
    description:
      "Optimisation et debug d'un site. Identification et résolution des problèmes de performance et de fonctionnalité sur un site web.",
  },
  {
    Icon: CodeIcon,
    title: 'Développement web avec JavaScript Natif',
    description:
      'Communication API et intégration de fonctionnalités interactives sur les sites web en utilisant le langage de programmation JavaScript natif.',
  },
  {
    Icon: FaReact,
    title: 'Développement front-end avec React',
    description:
      "Intégration d'interfaces utilisateur dynamiques et réactives en utilisant la framework React.",
  },
  {
    Icon: StorageIcon,
    title: 'Développement back-end avec NodeJS',
    description:
      "Création de serveurs web et d'APIs en utilisant l'environnement de runtime JavaScript Node.js.",
  },
  {
    Icon: PublicIcon,
    title: "Publication d'un site web",
    description: "Mise en ligne d'un site web sur un serveur public.",
  },
]

function About() {
  const classes = useStyles()
  return (
    <Card className={classes.cardContainer}>
      <CardContent className={classes.cardContent}>
        <div className={classes.flexContainer}>
          <h2 className={classes.titleH2}>Mon parcours</h2>
          <section className={classes.me}>
            <div className={classes.description}>
              <h3 className={classes.titleH3}>
                Passionnée par le développement web, j’ai acquis une solide
                expertise dans ce domaine grâce à une formation de développeur
                intégrateur web chez OpenClassrooms de 2023 à 2024.
              </h3>
              <p className={classes.descriptionP}>
                Au cours de cette période, j’ai eu l’occasion de travailler sur
                divers projets stimulants qui m’ont permis de maîtriser les
                technologies clés du développement web.
              </p>
              <p>
                Fort d’un BTS en automatisme et d’une expérience en maintenance
                industrielle et pyrométrie, j’ai développé une solide expertise
                en résolution de problèmes et en automatisation. Mon rôle de
                chef de projet pour la Gestion de Maintenance Assistée par
                Ordinateur (GMAO) a renforcé ma capacité à gérer des projets
                techniques de grande envergure et à améliorer l’efficacité des
                processus. Ces compétences, combinées à ma créativité, font de
                moi un développeur web efficace, polyvalent et prêt à relever de
                nouveaux défis.
              </p>
              <p>
                Je suis fier de pouvoir partager avec vous certains de ces
                projets qui témoignent de mon engagement à fournir des solutions
                web de haute qualité.
              </p>
            </div>
            <div className={classes.cvContent}>
              <img
                className={classes.photoHome}
                src={DefaultPicture}
                alt="pln"
              />
              <Button
                variant="contained"
                className={classes.button}
                startIcon={<GetAppIcon />}
                href="PLNwebdevCV.pdf"
                download
                title="Télécharger PDF CV PLNWEBDEV"
              >
                Télécharger mon CV
              </Button>
            </div>
          </section>
          <section className="skills">
            <h3 className="subTitle">Ce que je fais et que j’adore faire !</h3>
            <div className={classes.gridContainer}>
              {skills.map((skill, index) => (
                <Card key={index} className={classes.card}>
                  <CardContent>
                    <div className={classes.iconContainer}>
                      <skill.Icon className={classes.icon} />
                      <Typography
                        variant="h5"
                        component="h2"
                        className={classes.centerText}
                      >
                        {skill.title}
                      </Typography>
                    </div>
                    <Typography variant="body2" component="p">
                      {skill.description}
                    </Typography>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
          <MiroFrame />
        </div>
      </CardContent>
    </Card>
  )
}

export default About
