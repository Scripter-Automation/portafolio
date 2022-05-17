import React from 'react'
import { Card, Button } from '@mui/material'
import { Box } from '@mui/system'

export default function IntextModule({children, code}) {


  return (
    <>
    <Card sx={{padding: "20px"}}>
        {children}
    </Card>
    </>
  )
}
