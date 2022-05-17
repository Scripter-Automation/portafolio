import React from 'react'
import IntextModule from '../Components/Utils/IntextModule'
import GraficadorElement from '../Components/Utils/Graficador/GraficadorElement'
import Typography from '@mui/material/Typography'
import { ListItem, List } from '@mui/material'


export default function Graficador() {
  return (
    <>
    <Typography variant="h1" align='center' color="initial">
        El Graficador
    </Typography>
    <Typography variant="body1" color="initial">
        Decidimos hacer un graficador para poder mostrar como el area debajo de la curva se ve dentro de una integral. La idea surgio tras intentar 
        mostrar las sumas de Riemann, pero tras tratar de incrustrar geogebra al proyecto, encontramos que no tenian buen soporte para el framework que
        estabamos usando. Por no querer usar imagenes para las graficas, decidimos utilizar una libreria de graficas. Fue dificil encontrar una que fuera facil de usar.
        Pero el problema principal era que ninguna era facil de usar, en todas tenias que ingresar un arreglo de datos, tanto para la variable x como para la variable y.
        El hacer eso era complicado y tardado, por lo tanto decidimos crear un motor mediante algoritmos para asi tener nuestro propio graficador como geogebra.<br></br>
        A continuación puede utilizarlo, este de igual manera le entregara la integral indefinida y definida pero es importante que entienda las variables.
        Debido a que no tenemos el tiempo ni los recursos de goegebra tuvimos que definir parametros para el graficador, estos son:
    </Typography>
    <List>
        <ListItem>Lower Bound: El valor del cual quieres que inicie la grafica</ListItem>
        <ListItem>Upper Bound: El valor del cual quieres que termine la grafica</ListItem>
        <ListItem>Lower Bound: El valor del cual quieres que inicie la grafica</ListItem>
        <ListItem>M: La pendiente de la grafica</ListItem>
        <ListItem>Y-int: El valor en el que la grafica intersecta el eje y</ListItem>
        <ListItem>a: El valor del cual quieres que inicie la integral definida</ListItem>
        <ListItem>b: El valor del cual quieres que termine la integral definida</ListItem>
        <ListItem>N: El valor del escalar de x en la ecuación exponencial</ListItem>
        <ListItem>A: El escalar de la funcion</ListItem>
    </List>

        <IntextModule>
          <GraficadorElement></GraficadorElement>
        </IntextModule>
    <br></br>

    <Typography variant="h2" color="initial">
        ¿Comó funciona?
    </Typography>

    <Typography variant="body1" color="initial">
        Para ver el codigo de los algoritmos que crea la información para el graficador haga click en el siguiente link <br></br>
        <a style={{color:"blue"}}></a>
    </Typography>
    </>
  )
}
