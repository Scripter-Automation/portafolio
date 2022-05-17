import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { Typography, Avatar, Card, CardContent, Button } from '@mui/material'
import { borderLeft } from '@mui/system'

export default function Home() {
  return (
    <main>
    <Typography variant="h1" align="center">Bienvenido al Portafolio</Typography>

    <Typography  style={{fontSize:"1.2rem"}}>
      En la parte superior izquierda encontraras un menu, en el cual hacer click abrira todas el menu de navegación.
      Estos estan puestos en orden cronologico segun lo visto en la materia de Calculo II del profesor Andres Gutierrez Ramos.
      En cada apartado encontraras una descripción del tema, el cual deberia ser suficiente para comprender el metodo de integración.
      Al igual que encontraras ejercicios resueltos por los autores de este protafolio. En Dado caso que se encuentre con un error 404 regrese a la pagina principal
      o escoge una pagina del menu lateral 
    </Typography>
    <Typography  style={{fontSize:"1.2rem"}}>
      En el menu lateral notaras una division. La primera parte son explicaciónes de temas vistos en clase, por mientras que la segunda parte son lo que llamamos recursos.
      En ellos encontraras un formulario de integrales, la lista de los ejercicios del semestre y la explicación de como funciona el graficador.
    </Typography>
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
            A lo largo de este curso hemos aprendido los diferentes metodos de integración, desde simples hasta complejos. Obteniendo  una clara idea de como conseguir la antiderivada de casi cualquier ecuación.
            Tambien fuimos introducidos a las funciones trigonometricas hiperbolicas y sus inversas. Entre los metodos de integración que aprendimos estaba el metodo por sustitución, por partes, por 
            sustitución trigonometrica, mediante resolver el trinomio, mediante fracciónes parciales, por regla de Simpson, Series de Taylor, por limites, por discos y por arandelas. 
        </Typography>
        </div>
       <center> <Button variant="contained" color="primary">
          Ver Reflexion
        </Button>
        </center>
        </Card>

        <Card sx={{padding:"20px", maxWidth:"600px", m:5}}>
        <div style={{display:"flex",}}>
        <Avatar sx={{width:100, height:100, alignSelf:"center"}} src="/avatarAlonso.jpeg"></Avatar>
        <Typography  sx={{ fontSize: 14, m:2 }}  gutterBottom>
            <b style={{fontSize:"20px"}}>Alonso Rivera De Valle</b> <br></br>
            A lo largo de este curso hemos aprendido los diferentes metodos de integración, desde simples hasta complejos. Obteniendo  una clara idea de como conseguir la antiderivada de casi cualquier ecuación.
            Tambien fuimos introducidos a las funciones trigonometricas hiperbolicas y sus inversas. Entre los metodos de integración que aprendimos estaba el metodo por sustitución, por partes, por 
            sustitución trigonometrica, mediante resolver el trinomio, mediante fracciónes parciales, por regla de Simpson, Series de Taylor, por limites, por discos y por arandelas. 
        </Typography>
        </div>
        <center> <Button variant="contained" color="primary">
          Ver Reflexion
        </Button>
        </center>
        </Card>

        </div>
      </CardContent>
    </Card>
    


  </main>  )
}
