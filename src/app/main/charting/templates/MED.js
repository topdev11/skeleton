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

import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import BookIcon from '@material-ui/icons/Book';

import Icon from '@material-ui/core/Icon';
import Input from '@material-ui/core/Input';
import Paper from '@material-ui/core/Paper';
import ForwardIcon from '@material-ui/icons/Forward';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      // margin: theme.spacing(1),
    },
  },
}));

export default function MED(){

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
            <div className="w-1/6">
              <Typography className={classes.heading} color="primary" variant="h6">Medication</Typography>
            </div>

            <div className="w-2/6 flex items-center">
              <Paper className="flex items-center h-36 px-16 w-full mr-6">
                <Input
                  placeholder="Search..."
                  disableUnderline
                  fullWidth
                  inputProps={{
                    'aria-label': 'Search'
                  }}
                />
                <Icon color="action">search</Icon>
              </Paper>
              <Button variant="outlined" className="mr-16">T</Button>
              <AddIcon />
            </div>

            <div className="w-2/6 text-right">
              <Button variant="outlined" className="mr-8">
                History
              </Button>
              <Button variant="outlined" className="mr-8">
                E-Prescribe
              </Button>
              <Button variant="outlined" className="mr-8">
                Refill All
              </Button>
              <ForwardIcon></ForwardIcon>
            </div>


            <div className="w-1/6 text-right">
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