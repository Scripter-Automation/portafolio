import React from 'react'
import Typography from '@mui/material/Typography'
import Link from "next/link"
import Button from '@mui/material/Button'
import IntextModule from '../Components/Utils/IntextModule'
import PorPartesM1 from '../Components/Graphs/PorPartes/PorPartesM1'
import { ListItem, List } from '@mui/material'


export default function PorPartes() {
  return (
    <>
        <Typography variant="h1" color="initial">
            Propiedades de las integrales
        </Typography>
        <Typography>
        Las integrales, tienen la característica de que son la antiderivada de una función. Esto significa que, si uno sabe derivar, entonces puede integrar.
            La antiderivada, es la función que tal cual su derivada es la función original. Digamos que tenemos la función f(x)=2x su antiderivada o integral
            seria F(x)=x<sup>2</sup>. Con esta propiedad se puede comenzar a definir múltiples integrales básicas, las cuales se pueden observar en el formulario
            el cual contiene las integrales que pueden ser deducidas con facilidad y son parte fundamental para poder resolver integrales más complejas.
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
            La complejidad de las integrales puede llegar al punto en el cual la integral no se pueda definir en un punto debido a una des continuidad, esto se da mucho
            en las funciones racionales, por lo cual es importante saber que las integrales definidas pueden ser partidas en partes o modificadas para así poder realizar
            el cálculo adecuado. A continuación, podrá observar las diferentes propiedades de las integrales definidas.
        </Typography>
        <center><img src="Propiedades.png"></img></center>
        <Typography>
            Anteriormente se comentó que la antiderivada de la función en su integral, pero está en realidad es conocida como su integral indefinida. A diferencia de una integral
            definida, la indefinida obtiene la función integral de todo el dominio de la función original, por mientras que la integral definida solo busca saber el área bajo la curva
            de un intervalo [a,b]. Estas después de haber calculado la antiderivada de la función original uno tiene que hacer una resta, para así llegar al área que uno busca. Esta resta
            es la resta de la antiderivada evaluada en b menos la antiderivada evaluada en a. Utilice el siguiente formulario para ver el proceso de cómo solucionar una integral definida.
        </Typography>

        <IntextModule>
          <PorPartesM1></PorPartesM1>
        </IntextModule>
        <br></br>
        <Typography variant='h3'>Por sustitución</Typography>
        <Typography>
          El método de sustitución para integrar es uno muy simple, el cual involucra tomar una parte de la función, derivarla y hacer los ajustes necesarios para poder cambiar el diferencial.
          Esto se vuelve más fácil con ejemplos, así que tome los siguientes ejemplos como instructivos para observar cómo funciona esto.
        </Typography>
        <br></br>
        <Typography variant='h5'>Ejemplo 1</Typography>
        <center><img src="/EjemploSustitución.png"></img></center>
        <br></br>
        <Typography variant='h5'>Ejemplo 2</Typography>
        <center><img src="/EjemploSustitución2.png"></img></center>
        <br></br>
        <Typography variant='h3'>Por sustitución Trigonometrica</Typography>
        <Typography>
          La sustitución trigonométrica es más complicada, ya que requiere ver las expresiones de una manera diferente. Es importante recordar
          que un triángulo puede ser definido como a<sup>2</sup>=b<sup>2</sup>+c<sup>2</sup>. Entonces se debe estar atento a cuando esto se puede presentar
          dentro de una integral, ya que como se pueden definir como un triángulo, también se pueden usar las expresiones trigonométricas para modificar la expresión
          a una que sea más sencilla de solucionar. Tomemos la siguiente expresión como ejemplo.
        </Typography>

        <center><img src="/SustituciónTrig.png"></img></center>    
        <br />
        <Typography>
        En este caso podemos observar que tenemos el apartado de b<sup>2</sup>+c<sup>2</sup>, ya que 9 = 3<sup>2</sup> y tenemos x<sup>2</sup> por lo tanto esto es suficiente
          para crear un triángulo con las siguientes dimensiones. Con estas dimensiones podemos tomar el ángulo que se encuentra entre el lado de la hipotenusa y el
          cateto adyacente por la parte inferior del triángulo. Este ángulo será referenciado como el ángulo theta. Y basado en ese ángulo podemos hacer las siguientes definiciones.
        </Typography>
        <br />
        <center><img src="/TriangleSus.png"></img></center>
        <center><img src="/SusTrig.png"></img></center>

        <Typography variant='h3'>Por Partes</Typography>
        <br></br>
        <Typography variant="body1" color="initial">
            El proceso de sustitución por partes ocupa una ecuación muy peculiar y util, la cual requiere seguir un orden para facilitar su realización.
            Este proceso puede ser resumido con acrónimo ILATE. El primer elemento, que coincida será derivado, por mientras que el segundo será integrado.
            El acrónimo ILATE representa lo siguiente:
        </Typography>
        <List>
        <ListItem>I: Inversas</ListItem>
        <ListItem>L: Logarítmica</ListItem>
        <ListItem>A: Algebráica</ListItem>
        <ListItem>T: Trigonométrica</ListItem>
        <ListItem>E: Exponencial</ListItem>
    </List>
    <center><img src="/PorPartes.png"></img></center>
    <Typography>
      Con esto definido podemos ahora ver un ejemplo de cómo se ve la integración por partes
    </Typography>
    <center><img src="/PorPartes2.png"></img></center>
    </>
  )
}
