import React from 'react'
import GitHubIcon from '@material-ui/icons/GitHub'
import LanguageIcon from '@material-ui/icons/Language'

const HostLinks = ({ github, site }) => (
  <div>
    <a href={github} target="_blank" rel="noopener noreferrer">
      <GitHubIcon />
    </a>
    <a href={site} target="_blank" rel="noopener noreferrer">
      <LanguageIcon />
    </a>
  </div>
)

export default HostLinks