import React, { useState } from 'react'
import DefaultMiro from '../../assets/Poque_Landon_Natacha_1_competences_122023.png'

const MiroFrame = () => {
  const [isError, setIsError] = useState(false)

  const handleError = () => {
    setIsError(true)
  }

  return isError ? (
    <img src={DefaultMiro} alt="Default" />
  ) : (
    <iframe
      title="Mon tableau Miro"
      paddings="5px"
      width="100%"
      height="480"
      src="https://miro.com/app/embed/uXjVNM9OMOU=/"
      frameBorder="0"
      scrolling="no"
      allowFullScreen
      onError={handleError}
    ></iframe>
  )
}

export default MiroFrame
