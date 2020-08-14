import React, {useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import FullscreenIcon from '@material-ui/icons/Fullscreen';
import EditIcon from '@material-ui/icons/Edit';
import AutorenewIcon from '@material-ui/icons/Autorenew';

import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      // margin: theme.spacing(1),
    },
  },
}));

export default function DD(){

  const classes = useStyles();

  return(
    <div className={classes.root}>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <div className="flex w-full">
            <div className="w-2/6">
              <Typography className={classes.heading} color="primary" variant="h6">Diagnostic Data</Typography>
            </div>

            <div className="w-2/6 text-center">
              <BusinessCenterIcon />
            </div>


            <div className="w-2/6 text-right">
              <EditIcon className="mr-16" />
              <AutorenewIcon className="mr-16" color="secondary"/>
              <FullscreenIcon className="float-right"/>
            </div>

          </div>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
            sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  )
}