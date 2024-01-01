import React, { useState } from 'react'
import { Button, TextField, Typography, Paper, Box } from '@material-ui/core'
import { useStyles } from './styles'
import Picture from '../../assets/contact.jpeg'

const ContactForm = () => {
  const classes = useStyles()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()

    // Vérifiez si l'email est valide
    const emailRegex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/
    if (!emailRegex.test(email)) {
      alert('Veuillez entrer un email valide.')
      return
    }

    // Vérifiez si le nom est valide
    if (name.trim() === '') {
      alert('Veuillez entrer votre nom.')
      return
    }

    // Vérifiez si le message est valide
    if (message.trim() === '') {
      alert('Veuillez entrer un message.')
      return
    }

    window.location.href = `mailto:poque.landon.natacha@plnwebdev.tech?subject=Message de ${name}&body=${message}`
  }

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      className={classes.contact}
    >
      <div className={classes.title}>
        <Typography variant="h4" component="h2">
          Contactez-moi
        </Typography>
        <Typography variant="body1">
          Vous avez un projet en tête ou vous souhaitez simplement discuter ?
        </Typography>
        <Typography variant="body1">
          N'hésitez pas à me contacter. J'ai hâte de lire votre message !
        </Typography>
        <img
          className={classes.picture}
          src={Picture}
          alt="Illustration de contact"
        />
      </div>
      <Paper className={classes.paper}>
        <form onSubmit={handleSubmit} className={classes.form}>
          <TextField
            label="Votre nom"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            fullWidth
            margin="normal"
          />
          <TextField
            label="Votre email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            fullWidth
            margin="normal"
          />
          <TextField
            label="Votre message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
            multiline
            rows={4}
            fullWidth
            margin="normal"
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            className={classes.button}
            title="Bouton envoyer"
          >
            Envoyer
          </Button>
        </form>
      </Paper>
    </Box>
  )
}

export default ContactForm
