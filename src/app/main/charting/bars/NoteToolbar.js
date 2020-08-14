import React, {useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
}));

export default function NoteToolbar(){

  const classes = useStyles();

  const [age, setAge] = useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return(
    <div>
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-simple-select-label">Order of Items</InputLabel>
        <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={age}
            onChange={handleChange}
          >
            <MenuItem value={10}>Location</MenuItem>
            <MenuItem value={20}>SOMR/POMR</MenuItem>
            <MenuItem value={30}>Free Text</MenuItem>
            <MenuItem value={40}>Type of Note</MenuItem>
            <MenuItem value={50}>New Note</MenuItem>
            <MenuItem value={60}>Load Notes</MenuItem>
            <MenuItem value={70}>Date</MenuItem>
            <MenuItem value={80}>Save</MenuItem>
            <MenuItem value={90}>Preview</MenuItem>
            <MenuItem value={100}>Send</MenuItem>
            <MenuItem value={110}>PSG</MenuItem>
            <MenuItem value={120}>Template</MenuItem>

        </Select>
      </FormControl>
      
    </div>
  )
}