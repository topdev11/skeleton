//basic imports
import FusePageSimple from '@fuse/core/FusePageSimple';
import { makeStyles } from '@material-ui/core/styles';
import React from 'react';
import { useTranslation } from 'react-i18next';

//components



const useStyles = makeStyles(theme => ({
  layoutRoot: {},
  toolbar: {
    width : '100%'
  },
}));

function DynamicElement(props) {
	const classes = useStyles(props);

	const { t } = useTranslation('adminPage');

	return (
		<FusePageSimple
			classes={{
				root: classes.layoutRoot
			}}
			header={
				<div className="p-24">
					<h4>{t('TITLE')}</h4>
				</div>
			}
			contentToolbar={
				<div className="px-24">
					<h4>Admin Toolbar</h4>
				</div>
			}
			content={
				<div className="p-24">
					<h4>Content</h4>
					<br />
					Admin DynamicElement
				</div>
			}
		/>
	);
}

export default DynamicElement;
