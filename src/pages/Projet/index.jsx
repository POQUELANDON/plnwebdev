// Importation des hooks nécessaires de react-router-dom et react
import { useParams, useNavigate } from 'react-router-dom'
import { useContext, useEffect, useState } from 'react'
import { ProjetContext } from '../../components/Router/'
import Rating from '@material-ui/lab/Rating'
import Slideshow from '../../components/Slideshow'
import Tag from '../../components/Tag'
import Collapse from '../../components/Collapse'
import HostLinks from '../../components/HostLinks'

const Projet = () => {
  // Utilisation du hook useParams pour récupérer l'ID du logement depuis l'URL
  const { id } = useParams()

  // Utilisation du hook useNavigate pour la navigation
  const navigate = useNavigate()

  // Utilisation du contexte pour accéder aux données des logements
  const projetsData = useContext(ProjetContext)

  // Définition de l'état local pour le logement
  const [projets, setProjets] = useState(null)

  // Utilisation du hook useEffect pour effectuer des actions après le rendu du composant
  useEffect(() => {
    // Trouver le logement avec l'ID correspondant
    const foundProjets = projetsData.find((projets) => projets.id === id)

    // Si les données de logement ne sont pas encore chargées, ne rien faire
    if (projetsData.length === 0) {
      return
    }

    // Si le logement n'existe pas, rediriger vers la page d'erreur
    else if (!foundProjets) {
      navigate('/error')
      console.log("le projet n'existe pas")
    } else {
      // Sinon, mettre à jour l'état du logement
      setProjets(foundProjets)
      console.log(foundProjets)
    }
  }, [id, navigate, projetsData])

  // Si les données du logement ne sont pas encore chargées, afficher un message de chargement
  if (!projets) {
    return <p>Chargement...</p>
  }
  // Afficher les informations relatives au projet
  return (
    <section className="logement">
      <Slideshow images={projets.pictures} alt={projets.title} />
      <div className="logement-container">
        <article className="logement-title">
          <h1 className="logement-title--h1">{projets.title}</h1>
          <h2 className="logement-title--h2">{projets.location}</h2>
          <div className="tags-container">
            {projets.tags.map((tag) => (
              <Tag key={tag} tagName={tag} className="tag-name" />
            ))}
          </div>
        </article>
        <div className="host-and-rating">
          <section className="host">
            <HostLinks
              github={projets.host[0].github}
              site={projets.host[1].site}
            />
          </section>
          <Rating name="read-only" value={projets.rating} readOnly />
        </div>
      </div>
      <div className="logement-collapses">
        <Collapse title="Description" content={projets.description} />
        <Collapse title="Competences" content={projets.competences} />
      </div>
    </section>
  )
}

export default Projet