import React, {useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import FormatAlignLeftIcon from '@material-ui/icons/FormatAlignLeft';
import FormatTextdirectionRToLIcon from '@material-ui/icons/FormatTextdirectionRToL';
import FullscreenIcon from '@material-ui/icons/Fullscreen';
import BookIcon from '@material-ui/icons/Book';
import FullscreenExitIcon from '@material-ui/icons/FullscreenExit';
import AddIcon from '@material-ui/icons/Add';
import EditIcon from '@material-ui/icons/Edit';
import AutorenewIcon from '@material-ui/icons/Autorenew';
import PostAddIcon from '@material-ui/icons/PostAdd';

import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

import Button from '@material-ui/core/Button';

import withReducer from 'app/store/withReducer';
import { useDispatch, useSelector } from 'react-redux';
import * as Actions from '../store/actions';
import reducer from '../store/reducers';

import draftToHtml from 'draftjs-to-html';

import Chip from '@material-ui/core/Chip';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      // margin: theme.spacing(1),
    },
  },
  accordion_detail : {
    display : 'block',
  },
  autochip : {
    width : 350,
    display : 'inline-block'
  },
  item : {
    display : 'flex',
    alignItems : 'center'
  },
  chip_list : {
    display: 'flex',
    flexWrap: 'wrap',
    listStyle: 'none',
    margin: 0,
  }
}));

//index for list chip
let chip_index;

function CC(){

  const classes = useStyles();

  const dispatch = useDispatch();

  const redux_free_text_data = useSelector(({cc}) => cc.chartings.free_text_data);
  const [free_text_data, setFree_text_data] = useState('');
  useEffect(() => {
    if(!redux_free_text_data){
      return;
    }
    if(redux_free_text_data.data != undefined){
      setFree_text_data(draftToHtml(redux_free_text_data.data));
    }
  },[redux_free_text_data]);

  const redux_simple_text = useSelector(({cc}) => cc.chartings.simple_text);
  const [simple_text, setSimple_text] = useState([]);
  useEffect(() => {
    if(!redux_simple_text){
      return;
    }
    setSimple_text(redux_simple_text.data);
  },[redux_simple_text]);

  const redux_list_item = useSelector(({cc}) => cc.chartings.list_item);
  const [list_item0,setList_item0] = useState('');
  useEffect(() => {
    if(!redux_list_item){
      return;
    }
    if(chip_index == 0) setList_item0(redux_list_item.data);
    
  },[redux_list_item]);



  const [list_item1,setList_item1] = useState('');
  useEffect(() => {
    if(!redux_list_item){
      return;
    }
    if(chip_index == 1) setList_item1(redux_list_item.data);
    
  },[redux_list_item]);

  const [list_item2,setList_item2] = useState('');
  useEffect(() => {
    if(!redux_list_item){
      return;
    }
    if(chip_index == 2) setList_item2(redux_list_item.data);
    
  },[redux_list_item]);

  const [list_item3,setList_item3] = useState('');
  useEffect(() => {
    if(!redux_list_item){
      return;
    }
    if(chip_index == 3) setList_item3(redux_list_item.data);
    
  },[redux_list_item]);
  
  const [expanded, setExpanded] = useState('panel');
  
  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  //set paragraph mode
  const paraMode = (e) => {
    e.stopPropagation();
  }

  //set line mode
  const lineMode = (e) => {
    e.stopPropagation();
  }

  //open free text dialogue
  const openFreeTextDialogue = (e) => {
    e.stopPropagation();
    dispatch(Actions.openFreeTextDialogue());
  }

  //open simple text dialogue essential for index(i)
  const openSimpleTextDialogue = (e,i) => {
    dispatch(Actions.openSimpleTextDialogue(i));
  }

  //open insert macro dialogue
  const openMacroDialogue = (e) => {
    e.stopPropagation();
    dispatch(Actions.openMacroDialogue());
  }

  //open cc dialogue
  const openCCDialogue = (e,i) => {
    chip_index = i;
    dispatch(Actions.openCCDialogue());
  }

  //toggle bold text
  const toggleBold = (e) => {
    console.log('toggle');
    console.log(e);
  }

  //open full screen dialogue
  const openFullScreenDialogue = (e) => {
    e.stopPropagation();
    dispatch(Actions.openFullScreenDialogue());
  }

  return(
    <div className={classes.root}>
      <Accordion expanded={expanded === 'panel'} onChange={handleChange('panel')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <div className="flex w-full">
            <div className="w-2/6">
              <Typography className={classes.heading} color="primary" variant="h6">Chief Complaints</Typography>
            </div>

            <div className="w-2/6 text-center">
              <Button className="mr-16" variant="outlined" onClick={(e) => paraMode(e)}>P</Button>
              <Button className="mr-16" variant="outlined" onClick={(e) => lineMode(e)}>L</Button>
              <Button className="mr-16" variant="outlined" onClick={(e) => openFreeTextDialogue(e)}>T</Button>
              <BookIcon className="mr-16" color="secondary" onClick={(e) => openMacroDialogue(e)}/>
            </div>

            <div className="w-2/6 text-right">
              <EditIcon className="mr-16" />
              <AutorenewIcon className="mr-16" color="secondary"/>
              <FullscreenIcon className="float-right" onClick={(e) => {openFullScreenDialogue(e)}}/>
            </div>

          </div>
          
        </AccordionSummary>
        <AccordionDetails className={classes.accordion_detail}>
          <div className={["mt-12 mb-12",classes.item].join(' ')}>
            <Tags/>
            <div className="ml-24">
              <span onClick={(e) => toggleBold(e)}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.
              </span>
              
              <span dangerouslySetInnerHTML={{ __html: simple_text[0]}} className="mr-12 mb-12 ml-12 text-green-800"></span>
              <PostAddIcon onClick={(e) => openSimpleTextDialogue(e,0)}/>
              <ChipList data={list_item0}/>
              <AddIcon onClick={(e) => openCCDialogue(e,0)}/>
            </div>
            
          </div>
          <hr />
          <div className={["mt-12 mb-12",classes.item].join(' ')}>
            <Tags/>
            <div className="ml-24">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.
              <span dangerouslySetInnerHTML={{ __html: simple_text[1]}} className="mr-12 mb-12 ml-12 text-green-800"></span>
              <PostAddIcon onClick={(e) => openSimpleTextDialogue(e,1)}/>
              <ChipList data={list_item1}/>
              <AddIcon onClick={(e) => openCCDialogue(e,1)}/>
            </div>
            
          </div>
          <hr />
          <div className={["mt-12 mb-12",classes.item].join(' ')}>
            <Tags/>
            <div className="ml-24">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.
              <span dangerouslySetInnerHTML={{ __html: simple_text[2]}} className="mr-12 mb-12 ml-12 text-green-800"></span>
              <PostAddIcon onClick={(e) => openSimpleTextDialogue(e,2)}/>
              <ChipList data={list_item2}/>
              <AddIcon onClick={(e) => openCCDialogue(e,2)}/>
            </div>
            
          </div>
          <hr />
          <div className={["mt-12 mb-12",classes.item].join(' ')}>
            <Tags/>
            <div className="ml-24">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.
              <span dangerouslySetInnerHTML={{ __html: simple_text[3]}} className="mr-12 mb-12 ml-12 text-green-800"></span>
              <PostAddIcon onClick={(e) => openSimpleTextDialogue(e,3)}/>
              <ChipList data={list_item3}/>
              <AddIcon onClick={(e) => openCCDialogue(e,3)}/>
            </div>
            
          </div>
          <div dangerouslySetInnerHTML={{ __html: free_text_data}} className="mr-12 mb-12"></div>
        </AccordionDetails>
        
      </Accordion>
    </div>
  )
}

export default withReducer('cc',reducer)(CC);

function Tags(){
  const classes = useStyles();

  return (
    <div className={classes.autochip}>
      <Autocomplete
        multiple
        size="small"
        // id="tags-standard"
        options={top100Films}
        getOptionLabel={(option) => option.title}
        defaultValue={[top100Films[0]]}
        renderInput={(params) => (
          <TextField
            {...params}
            variant="standard"
            label="Multiple values"
            placeholder="Favorites"
          />
        )}
      />
    </div>
  );
}

const top100Films = [
  { title: 'The Shawshank Redemption', year: 1994 },
  { title: 'The Godfather', year: 1972 },
  { title: 'The Godfather: Part II', year: 1974 },
  { title: 'The Dark Knight', year: 2008 },
  { title: '12 Angry Men', year: 1957 },
  { title: "Schindler's List", year: 1993 },
  { title: 'Pulp Fiction', year: 1994 },
];

let data = [];

function ChipList(props){

  const classes = useStyles();

  const handleDelete = (e,chipToDelete) => {
    setChipData((chipData) => chipData.filter((chip) => chip.key !== chipToDelete.key));
    if(data.indexOf(chipToDelete) > -1){
      data.splice(data.findIndex(({key}) => key == chipToDelete.key), 1);
    }
  };
  const [chipData,setChipData] = useState([]);
  useEffect(() => {
    if(data.includes(props.data)){
      return;
    }
    data = [...data,props.data];
    setChipData(data);
  },[props.data]);
  return (
    <Paper component="ul" className={classes.chip_list}>
      {chipData.map((data) => {
        if(data == '') return;
        return (
          <li key={data.key}>
            <Chip
              label={data.item}
              onDelete={(e) => handleDelete(e,data)}
            />
          </li>
        );
      })}
    </Paper>
  )
}