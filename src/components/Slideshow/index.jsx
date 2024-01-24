import React, { useState } from 'react'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos'
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos'
import CloseIcon from '@material-ui/icons/Close'
import Modal from 'react-modal'
import { useStyles } from './styles'

Modal.setAppElement('#root') // Définit l'élément racine pour le rendu du modal

function Slideshow({ images, alt }) {
  // Déclaration du composant Slideshow qui prend en entrée un tableau d'images et une description alternative
  const [currentImageIndex, setCurrentImageIndex] = useState(0) // Déclaration de l'état de l'index de l'image courante, initialisé à 0
  const [modalIsOpen, setModalIsOpen] = useState(false) // Déclaration de l'état d'ouverture du modal, initialisé à false
  const classes = useStyles() // Utilisation des styles

  function previousImage() {
    // Fonction pour passer à l'image précédente
    setCurrentImageIndex((currentIndex) =>
      currentIndex === 0 ? images.length - 1 : currentIndex - 1,
    )
  }

  function nextImage() {
    // Fonction pour passer à l'image suivante
    setCurrentImageIndex((currentIndex) =>
      currentIndex === images.length - 1 ? 0 : currentIndex + 1,
    )
  }

  function openModal() {
    // Fonction pour ouvrir le modal
    setModalIsOpen(true)
  }

  function closeModal() {
    // Fonction pour fermer le modal
    setModalIsOpen(false)
  }

  return (
    <div className={classes.carrousel}>
      <img
        className={classes.carrouselImage}
        src={images[currentImageIndex]}
        alt={`${alt} n°${currentImageIndex + 1}`}
        onClick={openModal}
      />
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={{
          overlay: {
            backgroundColor: 'rgb(33 34 34 / 38%)',
          },
        }}
      >
        <button onClick={closeModal} className={classes.btnCloseModal}>
          <CloseIcon className={classes.btnCloseIcon} />
        </button>{' '}
        {/* Bouton de fermeture avec une croix */}
        <img
          src={images[currentImageIndex]}
          alt="Selected"
          style={{
            display: 'block',
            marginLeft: 'auto',
            marginRight: 'auto',
            maxWidth: '100%',
            maxHeight: '100%',
          }}
        />{' '}
        {/* Image centrée */}
        <button onClick={previousImage} className={classes.modalArrow}>
          <ArrowBackIosIcon className={classes.carrouselArrow} />
        </button>{' '}
        {/* Bouton pour l'image précédente */}
        <button onClick={nextImage} className={classes.modalArrow}>
          <ArrowForwardIosIcon className={classes.carrouselArrow} />
        </button>{' '}
        {/* Bouton pour l'image suivante */}
      </Modal>
      {images.length > 1 && (
        <div className={classes.carrouselNavigation}>
          <button
            className={classes.carrouselButton}
            aria-label="Bouton image précédente"
            onClick={previousImage}
          >
            <ArrowBackIosIcon className={classes.carrouselArrow} />
          </button>
          <span className={classes.carrouselCounter}>{`${
            currentImageIndex + 1
          } / ${images.length}`}</span>
          <button
            className={classes.carrouselButton}
            aria-label="Bouton image suivante"
            onClick={nextImage}
          >
            <ArrowForwardIosIcon className={classes.carrouselArrow} />
          </button>
        </div>
      )}
    </div>
  )
}

export default Slideshow
