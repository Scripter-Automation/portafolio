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
        Decidimos hacer un graficador para poder mostrar como el área debajo de la curva se ve dentro de una integral. La idea surgió tras intentar 
        mostrar las sumas de Riemann, pero tras tratar de incrustar GeoGebra al proyecto, encontramos que no tenían buen soporte para el framework que
        estábamos usando. Por no querer usar imágenes para las gráficas, decidimos utilizar una librería de graficas. Fue difícil encontrar una que fuera fácil de usar.
        Pero el problema principal era que ninguna era fácil de usar, en todas tenías que ingresar un arreglo de datos, tanto para la variable x como para la variable y.
        El hacer eso era complicado y tardado, por lo tanto decidimos crear un motor mediante algoritmos para así tener nuestro propio graficador como GeoGebra.<br></br>
        A continuación, puede utilizarlo, este de igual manera le entregara la integral indefinida y definida, pero es importante que entienda las variables.
        Debido a que no tenemos el tiempo ni los recursos de GeoGebra tuvimos que definir parámetros para el graficador, estos son:

    </Typography>
    <List>
        <ListItem>Lower Bound: El valor del cual quieres que inicie la gráfica</ListItem>
        <ListItem>Upper Bound: El valor del cual quieres que termine la gráfica</ListItem>
        <ListItem>M: La pendiente de la gráfica</ListItem>
        <ListItem>Y-int: El valor en el que la gráfica intercepta el eje y</ListItem>
        <ListItem>a: El valor del cual quieres que inicie la integral definida</ListItem>
        <ListItem>b: El valor del cual quieres que termine la integral definida</ListItem>
        <ListItem>N: El valor del escalar de x en la ecuación exponencial</ListItem>
        <ListItem>A: El escalar de la función</ListItem>
    </List>

        <IntextModule>
          <GraficadorElement></GraficadorElement>
        </IntextModule>
    <br></br>

    <Typography variant="h2" color="initial">
        ¿Cómo funciona?
    </Typography>

    <Typography variant="body1" color="initial">
    Para ver el código de los algoritmos que crea la información para el graficador haga click en el siguiente link <br></br>
        <a  style={{color:"blue"}} href="https://github.com/Scripter-Automation/portafolio/tree/main/Components/Graphs/Dynamic%20Graphs"> https://github.com/Scripter-Automation/portafolio/tree/main/Components/Graphs/Dynamic%20Graphs</a>
        <br></br><br></br>
        Para ver el código de los algoritmos de la calculadora de integrales haga click en el siguiente link <br></br>
        <a  style={{color:"blue"}} href="https://github.com/Scripter-Automation/portafolio/blob/main/Components/Utils/Integrales/Algoritmos.js">https://github.com/Scripter-Automation/portafolio/blob/main/Components/Utils/Integrales/Algoritmos.js</a>
    </Typography>
    <br></br>
    <Typography variant="h3">
        Algoritmos del Graficador
    </Typography>
    <Typography variant="body1" color="initial">
    El graficador está dividido en 2 partes, 1 la gráfica como tal bajo el archivo DynamicGraph.jsx y los algoritmos que crean la información para la gráfica bajo el archivo
        Algoritmos.js. Estos son diferentes tipos de archivos, el .jsx es un tipo de archivo de React, el cual se usa para renderizar la interfaz gráfica utilizando lógica, y el .js 
        es únicamente JavaScript, con el propósito de llevar a cabo los cálculos correspondientes. Al abrir el archivo de la interfaz gráfica notras los hooks useState y useEffect.
        useState nos deja definir una variable, la cual al ser cambiada volverá a renderizar el contenido, por mientras que useEffect nos permite correr código únicamente 1 vez, cuando
        el componente es renderizado por primera vez.<br></br><br></br>

        En este caso el estado esta indefinido al inicio, y consigue su valor dentro del useState, como el contenido se renderiza después de un cambio de estado, si no fuera por el useEffect, tendríamos
        un loop infinito, el cual ocasionaría que cada vez que se asigne los valores de la gráfica se vuelva a renderizar el componente, causando que todo el proceso se vuelva a repetir.
        Al usar el uesEffect solo sucede esto 1 vez. Ahora dentro de este useEffect, se puede ver que se corre el método setdisplayData después de correr los métodos ExpresionSolver y HilightSolver.
        Estos métodos fueron importados del Archivo de algoritmos, los cuales toman los valores que el usuario ingresa para así tomar esos valores y convertirlos en una expresión matemática que pueda devolver un resultado.
        <br></br><br></br>

        Si abre ahora el archivo de algoritmos podrá ver los métodos de los Solvers, como tal el ExpresionSolver solo corre el algoritmo que convierte los valores ingresados por el usuario a información para la gráfica.
        Por mientras que el HilightSolver corre el mismo método, pero actúa como filtro a través del forEach. En el cual revisa que los valores que se van a pasar a la gráfica para ser sombreados estén dentro del intervalo
        especificado entre a y b por el usuario. Cualquier otro valor es convertido a nulo para que no sea sombreado.
        <br></br> <br></br>
        Ahora si observas el valor de la respuesta del solucionador de expresiones, notaras que está definido como var responseArray = [] , esto significa que cada vez que se corre el for correspondiente a la expresión,
        un objeto con la información es ingresado al arreglo. El objeto tiene la siguiente estructura [id as Int, x as Int, y as Int]. Al meterlo como objetos, podemos conseguir 1 sola dato, que contiene consigo mismo otros datos
        necesarios para la gráfica. Por eso cuando los valores son regresados a las variables que lo invocaron en la interfaz gráfica, podemos hacer un loop con los arreglos de los objetos. Eso es lo que se ve dentro de los métodos
        data.map y hilight.map los cuales nos regresan un arreglo con los valores x o y depende de cual le solicitemos. Estos al correr le entregan los datos a la gráfica para ser graficados.
    </Typography>
    </>
  )
}
