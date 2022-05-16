import React from 'react'
import { Card, Button } from '@mui/material'
import { Box } from '@mui/system'

export default function IntextModule({children, code}) {

    const [open, setOpen] = React.useState(false)

  return (
    <>
    <Card sx={{padding: "20px"}}>
        {children}
    </Card>
    <Card>
        <Button onClick={()=>setOpen(true)} variant="contained" color="secondary">
          Observar Codigo
        </Button>
        <Box>
            {/**Aqui ira el text hilighing */
                code
            }
        </Box>
    </Card>
    </>
  )
}
