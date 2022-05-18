import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { Typography, Avatar, Card, CardContent, Button } from '@mui/material'
import { borderLeft } from '@mui/system'
import HrefButton from '../Components/Reusables/HrefButton'
import { useState } from 'react'

export default function Home() {

  const [reflexion, setReflexion] = useState(undefined)

  return (
    <main>
    <Typography variant="h1" align="center">Bienvenido al Portafolio</Typography>

    <Typography  style={{fontSize:"1.2rem"}}>
      En la parte superior izquierda encontraras un menú, en el cual hacer click abrirá el menu de navegación.
      Estos estan puestos en orden cronológico segun lo visto en la materia de Cálculo II del profesor Andrés Gutierrez Ramos.
      En cada apartado encontraras una descripción del tema, el cual debería ser suficiente para comprender el metodo de integración.
      Al igual que encontraras ejercicios resueltos por los autores de este protafolio. En Dado caso que se encuentre con un error 404 regrese a la página principal
      o escoge una página del menú lateral. 
    </Typography>
    <Typography  style={{fontSize:"1.2rem"}}>
      En el menú lateral notarás una división. La primera parte son explicaciones de temas vistos en clase, mientras que la segunda parte son lo que llamamos recursos.
      En ellos encontraras un formulario de integrales, la lista de los ejercicios del semestre y la explicación de como funciona el graficador.
    </Typography>
    <br></br>
    <center><a  href="https://github.com/Scripter-Automation/portafolio">
      <br></br>
    <Button variant="contained" color="primary">
      Ver Codigo del proyecto
    </Button>
    </a></center>
    <br></br>


    <Card sx={{ minWidth: 275, backgroundColor:"#1976d2" }}>
      <CardContent>
      <Typography color="white" align='center' variant="h3">
      Acerca de este sitio web
    </Typography>
    <br></br>
      <div style={{display:"flex", justifyContent:"center"}}>
        <div style={{display:"flex", justifyContent:"center", border:"2px solid white", borderRadius:10, width:"fit-content", padding:"20px"}}>
          <div style={{margin:2, paddingRight:5}}>
          <Typography color="white" sx={{ fontSize: 14 }}  gutterBottom>
            Instructor: Andres Gutierrez Ramos
          </Typography>
          <Typography color="white" sx={{ fontSize: 14 }}  gutterBottom>
            Curso: Calculo 2
          </Typography>
          </div>
          
          <div style={{margin:2, paddingLeft:5 , borderLeft:"2px solid white"}}>
          <Typography color="white" sx={{ fontSize: 14 }}  gutterBottom>
            Escuela: Universidad Anahuac México Norte
          </Typography>
          <Typography color="white" sx={{ fontSize: 14 }}  gutterBottom>
            Facultad: Ciencias Actuariales
          </Typography>
          </div>
        </div>
        </div>
        <br></br>

        <Typography variant="h4" color="white">
          Desarolladores:
        </Typography>
        <br></br>

        <div style={{display:"flex", justifyContent:"space-around", flexWrap:"wrap"}}>

        <Card sx={{padding:"20px", maxWidth:"600px", m:5}}>
        <div style={{display:"flex",}}>
        <Avatar sx={{width:100, height:100, alignSelf:"center"}} src="/avatar.jpeg"></Avatar>
        <Typography  sx={{ fontSize: 14, m:2 }}  gutterBottom>
            <b style={{fontSize:"20px"}}>Jesús Gómez-Braña González</b> <br></br>
            A lo largo de este curso hemos aprendido los diferentes métodos de integración, desde simples hasta complejos. Obteniendo  una clara idea de como conseguir la antiderivada de casi cualquier ecuación.
            Tambien fuimos introducidos a las funciones trigonometricas hiperbólicas y sus inversas. Entre los métodos de integración que aprendimos estaba el metodo por sustitución, por partes, por 
            sustitución trigonométrica, mediante resolver el trinomio, mediante fracciones parciales, por regla de Simpson, Series de Taylor, por limites, por discos y por arandelas. 
        </Typography>
        </div>
       <center> <Button onClick={()=>{setReflexion("Jesus")}} variant="contained" color="primary">
          Ver Reflexion
        </Button>
        </center>
        </Card>

        <Card sx={{padding:"20px", maxWidth:"600px", m:5}}>
        <div style={{display:"flex",}}>
        <Avatar sx={{width:100, height:100, alignSelf:"center"}} src="/avatarAlonso.jpeg"></Avatar>
        <Typography  sx={{ fontSize: 14, m:2 }}  gutterBottom>
            <b style={{fontSize:"20px"}}>Alonso Rivera De Valle</b> <br></br>
            A lo largo del curso hemos visto varios métodos de integración, de tal forma que según hemos avanzado hemos visto como algunos se entrelazan y como en ciertos casos es necesario usar 2 o mas técnicas para un problema. Trabajamos de tal forma que entendimos de forma visual y práctica que es una integral y que es lo que vemos con el uso de esta.
        </Typography>
        </div>
        <center> <Button onClick={()=>{setReflexion("Alonso")}} variant="contained" color="primary">
          Ver Reflexion
        </Button>
        </center>
        </Card>
        {reflexion === "Jesus" && <iframe src="https://drive.google.com/file/d/1cOlbKsRt32X--CulB_Pd5KEVH34s2rXi/preview" style={{width:"100%", height:"100vh", marginBottom:"20px"}} allow="autoplay"></iframe> }
        {reflexion === "Alonso" && <iframe src="https://drive.google.com/file/d/1Im6PUoubLjDDPfJdJfJ9fUExSvEUPf9M/preview" style={{width:"100%", height:"100vh", marginBottom:"20px"}} allow="autoplay"></iframe>}
        </div>
        <Card sx={{p:2}}>
          <Typography variant="h3" align="center" >Recursos</Typography>
          <br></br>
          <div style={{display:"flex", justifyContent:"space-evenly", flexWrap:"wrap"}}>
          <HrefButton href="https://github.com/">Github</HrefButton>
          <HrefButton href="https://mui.com/">Material Ui</HrefButton>
          <HrefButton href="https://nextjs.org/">Next.js</HrefButton>
          <HrefButton href="https://reactjs.org/">React.js</HrefButton>
          <HrefButton href="https://firebase.google.com/">Firebase</HrefButton>
          <HrefButton href="https://react-chartjs-2.js.org/">React Chartjs 2</HrefButton>
          </div>
        </Card>
      </CardContent>
    </Card>
    


  </main>  )
}
