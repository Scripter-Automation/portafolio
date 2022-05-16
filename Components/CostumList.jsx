import React from 'react'
import HomeIcon from '@mui/icons-material/Home';
import FlagIcon from '@mui/icons-material/Flag';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import Link from "next/link"
import LinkedLi from './LinkedLi';
import FunctionsRoundedIcon from '@mui/icons-material/FunctionsRounded';
import AssessmentIcon from '@mui/icons-material/Assessment';

export default function CostumList() {
  return (
    <>
    <List>
    <LinkedLi href="/" icon={<HomeIcon/>} text="Inicio"></LinkedLi>
    <LinkedLi href="/Introduccion" icon={<FlagIcon></FlagIcon>} text="Introducción y Sumas de Riemann"></LinkedLi>
    <LinkedLi href="/PorPartes" icon={<AssessmentIcon></AssessmentIcon>} text="Integración Basica y Por Sustitución"></LinkedLi>

  </List>
  <Divider />
  <List>
  <LinkedLi href="/Formulario" icon={<FunctionsRoundedIcon></FunctionsRoundedIcon>} text="Formulario"></LinkedLi>
  </List>
  </>
  )
}