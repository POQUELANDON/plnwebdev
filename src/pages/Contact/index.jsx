import React, { useState } from 'react'

const ContactForm = () => {
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
    <div>
      <h2>Contactez-moi</h2>
      <p>
        Vous avez un projet en tête ou vous souhaitez simplement discuter ?
        N'hésitez pas à me contacter. J'ai hâte de lire votre message !
      </p>
      <form onSubmit={handleSubmit}>
        <label>
          Votre nom:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Votre nom"
            required
          />
        </label>
        <label>
          Votre email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Votre email"
            required
          />
        </label>
        <label>
          Votre message:
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Votre message"
            required
          ></textarea>
        </label>
        <input type="submit" value="Envoyer" />
      </form>
    </div>
  )
}

export default ContactForm