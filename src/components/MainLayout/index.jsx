import React, { useState, useEffect } from 'react'
import { Paper } from '@material-ui/core'
import { useStyles } from '../../util/styles'
import { Fade } from '@mui/material'

function MainLayout({ children, backgroundImage }) {
  const classes = useStyles()
  const [checked, setChecked] = useState(false)

  useEffect(() => {
    setChecked(true)
  }, [])
  return (
    <main
      className={classes.main}
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      {/* <Slide
        direction="up"
        in={checked}
        timeout={500}
        className={classes.paperSlide}
      > */}
      <Fade orientation="horizontal" in={checked} timeout={300}>
        <Paper className={classes.paper}>{children}</Paper>
      </Fade>
      {/* </Slide> */}
    </main>
  )
}

export default MainLayout
