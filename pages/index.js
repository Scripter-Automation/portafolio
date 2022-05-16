import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { Typography, Avatar, Card, CardContent } from '@mui/material'

export default function Home() {
  return (
    <main>
    <Typography variant="h1" align="center">Bienvenido al Portafolio</Typography>

    <Typography  style={{fontSize:"1.5rem"}}>
      En la parte superior izquierda encontraras un menu, en el cual hacer click abrira todas el menu de navegación.
      Estos estan puestos en orden cronologico segun lo visto en la materia de Calculo II del profesor Andres Gutierrez Ramos.
      En cada apartado encontraras una descripción del tema, el cual deberia ser suficiente para comprender el metodo de integración.
      Al igual que encontraras ejercicios resueltos por el autor de este protafolio. 
    </Typography>
    <br></br>


    <Card sx={{ minWidth: 275, backgroundColor:"#1976d2" }}>
      <CardContent>
      <Typography color="white"  variant="h3">
      Acerca de este sitio web
    </Typography>
      <div style={{display:"flex"}}>
        <Avatar sx={{width:100, height:100}} src="/avatar.jpeg"></Avatar>
      <div style={{marginLeft:"20px"}}>
        <Typography color="white" sx={{ fontSize: 14 }}  gutterBottom>
          Desarollador: Jesús Gómez-Braña González
        </Typography>
        <Typography color="white" sx={{ fontSize: 14 }}  gutterBottom>
          Instructor: Andres Gutierrez Ramos
        </Typography>
        <Typography color="white" sx={{ fontSize: 14 }}  gutterBottom>
          Curso: Calculo 2
        </Typography>
        <Typography color="white" sx={{ fontSize: 14 }}  gutterBottom>
          Facultad: Ciencias Actuariales
        </Typography>
        </div>
      </div>
      <br></br>
        <Typography color="white" variant="body2">
          Este proyecto fue realizado 100% en codigo utilizando el framework de Next.js, siendo hosteado en firebase y utilizando la libreria de estilos
          de Material UI los cuales son proporcionados gratuitamente por Google y los algotimos estan redactados en javascript 
        </Typography>
      </CardContent>
    </Card>
    


  </main>  )
}
