import React from 'react'
import Button from '@mui/material/Button'

export default function HrefButton({href, children}) {
  return (
    <a href={href} target="_blank">
    <Button variant="contained" color="primary">
      {children}
    </Button>
    </a>
  )
}
