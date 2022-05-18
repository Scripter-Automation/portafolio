import React from 'react'
import HomeIcon from '@mui/icons-material/Home';
import FlagIcon from '@mui/icons-material/Flag';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import Link from "next/link"
import LinkedLi from './LinkedLi';
import FunctionsRoundedIcon from '@mui/icons-material/FunctionsRounded';
import AssessmentIcon from '@mui/icons-material/Assessment';
import CalculateIcon from '@mui/icons-material/Calculate';
import AutoGraphIcon from '@mui/icons-material/AutoGraph';

export default function CostumList() {
  return (
    <>
    <List>
    <LinkedLi href="/" icon={<HomeIcon/>} text="Inicio"></LinkedLi>
    <LinkedLi href="/Introduccion" icon={<FlagIcon></FlagIcon>} text="Introducción y Sumas de Riemann"></LinkedLi>
    <LinkedLi href="/PorPartes" icon={<AssessmentIcon></AssessmentIcon>} text="Integración Basica, Por Sustitución y Por Partes"></LinkedLi>

  </List>
  <Divider />
  <List>
  <LinkedLi href="/Formulario" icon={<FunctionsRoundedIcon></FunctionsRoundedIcon>} text="Formulario"></LinkedLi>
  <LinkedLi href="/Ejercicios" icon={<CalculateIcon></CalculateIcon>} text="Listas de Ejercicios en Limpio"></LinkedLi>
  <LinkedLi href="/Graficador" icon={<AutoGraphIcon></AutoGraphIcon>} text="Graficador"></LinkedLi>
  </List>
  <Divider />
  <List>

  <LinkedLi href="/EjerciciosJesus" icon={<CalculateIcon></CalculateIcon>} text="Listas de Ejercicios Jesus"></LinkedLi>
  <LinkedLi href="/EjerciciosAlonso" icon={<CalculateIcon></CalculateIcon>} text="Listas de Ejercicios Alonso"></LinkedLi>

  </List>
  </>
  )
}
