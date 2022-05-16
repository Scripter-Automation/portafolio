import React from 'react'
import Link from "next/link"
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

export default function LinkedLi({href,icon, text}) {
    return (
      <Link href={href}>
        <ListItem button>
          <ListItemIcon>
              {icon}
          </ListItemIcon>
          <ListItemText primary={text} />
        </ListItem>
        </Link>
    )
  }
  