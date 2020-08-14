//basic imports
import FusePageSimple from '@fuse/core/FusePageSimple';
import { makeStyles } from '@material-ui/core/styles';
import React from 'react';
import { useTranslation } from 'react-i18next';

//components
import NoteSidebar from './bars/NoteSidebar';
import NoteToolbar from './bars/NoteToolbar';
import PatientToolbar from './bars/PatientToolbar';
import ChartingApp from './ChartingApp';



const useStyles = makeStyles(theme => ({
  layoutRoot: {},
  toolbar: {
    width : '100%'
  },
}));

function Charting(props) {
	const classes = useStyles(props);

	const { t } = useTranslation('chartPage');

	return (
		<FusePageSimple
			classes={{
				root: classes.layoutRoot
			}}
			content={
				<div className="p-24">
					
					<PatientToolbar />
					<br />
					<NoteToolbar />
					<br />
					<ChartingApp section={props}/>
				</div>
			}
		/>
	);
}

export default Charting;
