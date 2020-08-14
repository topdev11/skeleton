import React, {useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Fab from '@material-ui/core/Fab';
import Badge from '@material-ui/core/Badge';


const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  label : {
    fontSize : '14px'
  }
}));


export default function ButtonGroups(){

  const classes = useStyles();

  return(
    <div className={classes.root}>
      <Fab variant="extended" aria-label="Delete" className={classes.label} color="secondary">
        Demographic
      </Fab>
      <Fab variant="extended" aria-label="Delete" className={classes.label} color="secondary">
        New <br/> Message/Task
      </Fab>
      <Fab variant="extended" aria-label="Delete" className={classes.label} color="secondary">
        Plan/Orders
      </Fab>
      <Fab variant="extended" aria-label="Delete" className={classes.label} color="secondary">
        Documents
      </Fab>
      <Fab variant="extended" aria-label="Delete" className={classes.label} color="secondary">
        Flowsheets
      </Fab>
      <Fab variant="extended" aria-label="Delete" className={classes.label} color="secondary">
        Health <br/>Maintenance
      </Fab>
      <Fab variant="extended" aria-label="Delete" className={classes.label} color="secondary">
        Summary
      </Fab>
      {/* <Badge badgeContent={'Demographic'} color="primary">
      </Badge>
      <Badge badgeContent={'New Message/Task'} color="primary">
      </Badge>
      <Badge badgeContent={'Plan/Orders'} color="primary">
      </Badge>
      <Badge badgeContent={'Documents'} color="primary">
      </Badge>
      <Badge badgeContent={'Flowsheets'} color="primary">
      </Badge>
      <Badge badgeContent={'Health Maintenance'} color="primary">
      </Badge>
      <Badge badgeContent={'Summary'} color="primary">
      </Badge> */}

    </div>
  )
}