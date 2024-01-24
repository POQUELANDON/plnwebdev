import React from 'react'
import { useStyles } from './styles'

function LetterAnimation({ text }) {
  const classes = useStyles()
  return (
    <div className={classes.letterAnimation}>
      {text.split('').map((char, index) => (
        <span key={index} style={{ animationDelay: `${index * 0.02}s` }}>
          {char}
        </span>
      ))}
    </div>
  )
}

export default LetterAnimation
