//initial imports
import React, {useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';

//built-in components

//import custom components
import CC from './templates/CC';
import HPI from './templates/HPI';
import PMH from './templates/PMH';
import PSH from './templates/PSH';
import MED from './templates/MED';
import ADR from './templates/ADR';
import SH from './templates/SH';
import FH from './templates/FH';
import PE from './templates/PE';
import DD from './templates/DD';
import ASS from './templates/ASS';
import ORD from './templates/ORD';

//import dialogues
import FreeTextDialogue from './dialogues/FreeTextDialgue';
import SimpleTextDialogue from './dialogues/SimpleTextDialogue';
import MacroDialogue from './dialogues/MacroDialogue';
import CCDialogue from './dialogues/CCDialogue';
import CCFullScreenDialogue from './dialogues/CCFullScreenDialogue';

const useStyles = makeStyles((theme) => ({
  root: {
    // width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));

function ChartingApp(props){
  const classes = useStyles();

  // console.log('charting app',props);

  const section_id = props.section.location.pathname.split('/')[2];
  // console.log(section_id);

  let ccRef = React.createRef()

  return (
    <div className={classes.root}>
      <CC id="charting_cc" />
      <br/>
      <HPI id="charting_hpi"/>
      <br/>
      <PMH id="charting_pmh"/>
      <br/>
      <PSH id="charting_psh"/>
      <br/>
      <MED id="charting_med"/>
      <br />
      <ADR id="charting_adr"/>
      <br />
      <SH id="charting_sh"/>
      <br />
      <FH id="charting_fh"/>
      <br />
      <PE id="charting_pe"/>
      <br />
      <DD id="charting_dd"/>
      <br />
      <ASS id="charting_ass"/>
      <br />
      <ORD id="charting_ord"/>
      <br />
      <FreeTextDialogue />
      <SimpleTextDialogue />
      <MacroDialogue />
      <CCDialogue />
      <CCFullScreenDialogue />
    </div>
  );
}

export default ChartingApp;