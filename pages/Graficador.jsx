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
        <a target="_blank" style={{color:"blue"}} href="https://github.com/Scripter-Automation/portafolio/tree/main/Components/Graphs/Dynamic%20Graphs"> https://github.com/Scripter-Automation/portafolio/tree/main/Components/Graphs/Dynamic%20Graphs</a>
        <br></br>
        Para ver el codigo de los algoritmos de la calculadora de integrales haga click en el siguiente link <br></br>
        <a target="_blank" style={{color:"blue"}} href="https://github.com/Scripter-Automation/portafolio/blob/main/Components/Utils/Integrales/Algoritmos.js">https://github.com/Scripter-Automation/portafolio/blob/main/Components/Utils/Integrales/Algoritmos.js</a>
    </Typography>
    <br></br>
    <Typography variant="h3">
        Algoritmos del Graficador
    </Typography>
    <Typography variant="body1" color="initial">
        El graficador esta dividido en 2 partes, 1 la grafica como tal bajo el archivo DynamicGraph.jsx y los algoritmos que crean la información para la grafica bajo el archivo
        Algoritmos.js. Estos son diferentes tipos de archivos, el .jsx es un tipo de archivo de React, el cual se usa para renderizar la interfaz grafica utilizando logica, y el .js 
        es unicamente javascript, con el proposito de llevar acabo los calculos correspondientes. Al abrir el archivo de la interfaz grafica notras los hooks useState y useEffect.
        useState nos deja definir una variable, la cual al ser cambiada volvera a renderizar el contenido, por mientras que useEffect nos permite correr codigo unicamente 1 vez, cuando
        el componente es renderizado por primera vez.<br></br><br></br>

        En este caso el estado esta indefinido al inicio, y consigue su valor dentro del useState, como el contenido se renderiza despues de un cambio de estado, si no fuera por el useEffect, tendriamos
        un loop infinito, el cual ocacionaria que cada vez que se asigne los valores de la grafica se vuelva a renderizar el componente, causando que todo el proceso se vuelva a reptetir.
        Al usar el uesEffect solo sucede esto 1 vez. Ahora dentro de este useEffect, se puede ver que se corre el metodo setdisplayData despues de correr los metodos ExpresionSolver y HilightSolver.
        Estos metodos fueron importados del Archivo de algoritmos, los cuales toman los valores que el usuario ingresa para asi tomar esos valores y convertirlos en una expresion matematica que pueda devolver un resultado.
        <br></br><br></br>

        Si abre ahora el archivo de algoritmos podra ver los metodos de los Solvers, como tal el ExpresionSolver solo corre el algoritmo que convierte los valores ingresados por el usuario a información para la grafica.
        Por mientras que el HilightSolver corre el mismo metodo pero actua como filtro a travez del forEach. En el cual revisa que los valores que se van a pasar a la grafica para ser sombreados esten dentro del intervalo
        especificado entre a y b por el usuario. Cualquier otro valor es convertido a nulo para que no sea sombreado.
        <br></br> <br></br>
        Ahora si observas el valor de la respuesta del solucionador de expresiones, notaras que esta definido como var responseArray = [] , esto significa que cada vez que se corre el for correspondiente a la expresión,
        un objeto con la infomación es ingresado al areglo. El objeto tiene la siguiente estructura [id as Int, x as Int, y as Int]. Al meterlo como objetos, podmos conseguir 1 sola dato, que contiene consigomismo otros datos
        necesarios para la grafica. Por eso cuando los valores son regresados a las variables que lo invocaron en la interfaz grafica, podemos hacer un loop con los arreglos de los objetos. Eso es lo que se ve dontro de los metodos
        data.map y hilight.map los cuales nos regresan un arreglo con los valores x o y depende de cual le solicitemos. Estos al correr le entregan los datos a la grafica para ser graficados.
    </Typography>
    </>
  )
}
