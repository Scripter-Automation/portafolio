import React from 'react'
import Typography from '@mui/material/Typography'
import Link from "next/link"
import Button from '@mui/material/Button'
import IntextModule from '../Components/Utils/IntextModule'
import PorPartesM1 from '../Components/Graphs/PorPartes/PorPartesM1'

export default function PorPartes() {
  return (
    <>
        <Typography variant="h1" color="initial">
            Propiedades de las integrales
        </Typography>
        <Typography>
            Las integrales, tienen la caracteristica de que son la antiderivada de una función. Esto significa que si uno sabe derivar, entonces puede integrar.
            La antiderivada, es la función que tal cual su derivada es la función original. Digamos que tenemos la función f(x)=2x su antiderivada o integral
            seria F(x)=x<sup>2</sup>. Con esta propiedad se puede comenzar a definir multiples integrales basicas, las cuales se pueden observar en el formulario
            el cual contiene las integrales que pueden ser deducidas con facilidad y son parte fundamental para poder resolver integrales mas complejas.
        </Typography>
        <br></br>
        <Link href="/Formulario">
            <Button variant="contained" color="primary">
              Ver Formulario
            </Button>
        </Link>
        <br></br>
        <br></br>
        <Typography>
            La complejidad de las integrales puede llegar al punto en el cual la integral no se pueda definir en un punto debido a una descontinuidad, esto se da mucho
            en las funciones racionales, por lo cual es importante saber que las integrales definidas pueden ser partidas en partes o modificadas para así poder realizar
            el calculo adecuado. A continuación podra observar las diferentes propiedades de las integrales definidas.
        </Typography>
        <center><img src="Propiedades.png"></img></center>
        <Typography>
            Anteriormente se comento que la antiderivada de la función en su integral, pero esta en realidad es conosida como su integral indefinida. A diferencia de una integral
            definida, la indefinida obtiene la función integral de todo el dominio de la funcion orignal, por mientras que la integral definida solo busca saber el area bajo la curva
            de un intervalo [a,b]. Estas despues de haber calculado la antiderivada de la función original uno tiene que hacer una resta, para así llegar al area que uno busca. Esta resta
            es la resta de la antiderivada evaluada en b menos la antiderivada evaluada en a. Utilice el siguiente formulario para ver el proceso de como soluciónar una integral definida.
        </Typography>

        <IntextModule>
          <PorPartesM1></PorPartesM1>
        </IntextModule>
             
    </>
  )
}
