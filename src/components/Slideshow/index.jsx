import React, { useState } from 'react'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos'
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos'
import CloseIcon from '@material-ui/icons/Close'
import Modal from 'react-modal'
import { useStyles } from './styles'

Modal.setAppElement('#root')

function Slideshow({ images, alt }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [modalIsOpen, setModalIsOpen] = useState(false)
  const classes = useStyles()

  function previousImage() {
    setCurrentImageIndex((currentIndex) =>
      currentIndex === 0 ? images.length - 1 : currentIndex - 1,
    )
  }

  function nextImage() {
    setCurrentImageIndex((currentIndex) =>
      currentIndex === images.length - 1 ? 0 : currentIndex + 1,
    )
  }

  function openModal() {
    setModalIsOpen(true)
  }

  function closeModal() {
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
      <Modal isOpen={modalIsOpen} onRequestClose={closeModal}>
        <button onClick={closeModal}>
          <CloseIcon />
        </button>{' '}
        {/* Bouton de fermeture avec une croix */}
        <img
          src={images[currentImageIndex]}
          alt="Selected"
          style={{ display: 'block', marginLeft: 'auto', marginRight: 'auto' }}
        />{' '}
        {/* Image centrée */}
        <button onClick={previousImage}>
          <ArrowBackIosIcon />
        </button>{' '}
        {/* Bouton pour l'image précédente */}
        <button onClick={nextImage}>
          <ArrowForwardIosIcon />
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
