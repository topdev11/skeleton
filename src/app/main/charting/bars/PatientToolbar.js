import React, {useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';

import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

import PatientAvatar from './PatientAvatar';
import ButtonGroups from './ButtonGroups';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
}));

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography component="div">{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function PatientToolbar(){

  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return(
    <div className={classes.root}>
      <AppBar position="static">
        <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
          <Tab label="Person One" {...a11yProps(0)} />
          <Tab label="Person Two" {...a11yProps(1)} />
          <Tab label="Person Three" {...a11yProps(2)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <div className="flex">
          <div className="w-2/6">
            <PatientAvatar name="Amenorrhea, Emily" birthday="12/23/1984" age="31 y/o" gender="female" require="Amil $ 20 100% X-Rays Requirments"/>
          </div>
          <div className="w-4/6 mt-12">
            <ButtonGroups />
          </div>
        </div>
        
      </TabPanel>
      <TabPanel value={value} index={1}>
        <div className="flex">
          <div className="w-2/6">
            <PatientAvatar name="David Oliver" birthday="12/13/1964" age="51 y/o" gender="male" require="Amil $ 20 100% X-Rays Requirments"/>
          </div>
          <div className="w-4/6 mt-12">
            <ButtonGroups />
          </div>
        </div>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <div className="flex">
          <div className="w-2/6">
            <PatientAvatar name="John Smith" birthday="06/23/1979" age="40 y/o" gender="male" require="Amil $ 20 100% X-Rays Requirments"/>
          </div>
          <div className="w-4/6 mt-12">
            <ButtonGroups />
          </div>
        </div>
      </TabPanel>
    </div>
  )
}