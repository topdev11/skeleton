import i18next from 'i18next';
import ar from './navigation-i18n/ar';
import en from './navigation-i18n/en';
import tr from './navigation-i18n/tr';

i18next.addResourceBundle('en', 'navigation', en);
i18next.addResourceBundle('tr', 'navigation', tr);
i18next.addResourceBundle('ar', 'navigation', ar);

const navigationConfig = [
	{
		id : 'dashboard',
		title : 'Dashboard',
		icon : 'apps',
		type: 'collapse',
		children : [
			{
				id : 'calendar',
				title : 'Calendar',
				type : 'item',
				url : '/dashboard/calendar',
				icon : 'calendar_today'
			},
			{
				id : 'task_manager',
				title : 'Task Manager',
				type : 'item',
				url : '/dashboard/task_manager',
				icon : 'attachment'
			},
			{
				id : 'file_manager',
				title : 'File Manager',
				type : 'item',
				url : '/dashboard/file_manager',
				icon : 'folder'
			}
		]
	},
	{
		id : 'charting',
		title : 'Charting',
		icon : 'table_chart',
		type: 'collapse',
		children : [
			{
				id : 'note_sidebar',
				title : 'Note',
				type : 'collapse',
				icon : 'note',
				
				children : [
					{
						id : 'location',
						title : 'Location',
						type : 'item',
						url : '/charting/location',
						icon : 'my_location'
					},
					{
						id : 'somr_pomr',
						title : 'SOMR/POMR',
						type : 'item',
						url : '/charting/s_pomr',
						icon : 'local_hospital'
					},
					{
						id : 'free_text',
						title : 'Free Text',
						type : 'item',
						url : '/charting/free_text',
						icon : 'text_fields'
					},
					{
						id : 'type_of_note',
						title : 'Type of Note',
						type : 'item',
						url : '/charting/type_of_note',
						icon : 'speakers_note'
					},
					{
						id : 'new_notes',
						title : 'New Notes',
						type : 'item',
						url : '/charting/new_notes',
						icon : 'note_add'
					},
					{
						id : 'load_notes',
						title : 'Load Notes',
						type : 'item',
						url : '/charting/load_notes',
						icon : 'notes'
					},
					{
						id : 'dates',
						title : 'Date',
						type : 'item',
						url : '/charting/dates',
						icon : 'date_range'
					},
					{
						id : 'save_complete',
						title : 'Save Complete',
						type : 'item',
						url : 'charting/save_complete',
						icon : 'done'
					},
					{
						id : 'save_incomplete',
						title : 'Save Incomplete',
						type : 'item',
						url : '/charting/save_incomplete',
						icon : 'save'
					},
					{
						id : 'preview',
						title : 'Preview',
						type : 'item',
						url : '/charting/preview',
						icon : 'pageview'
					},
					{
						id : 'send',
						title : 'Send',
						type : 'item',
						url : '/charting/send',
						icon : 'send'
					},
					{
						id : 'psg',
						title : 'PSG',
						type : 'item',
						url : '/charting/psg',
						icon : 'warning'
					},
					{
						id : 'template',
						title : 'Template',
						type : 'item',
						url : '/charting/template',
						icon : 'filter_frames'
					}
				]
			},
			{
				id : 'note_navigation',
				title : 'Navigation',
				type : 'collapse',
				icon : 'navigation',
				children : [
					{
						id : 'cc',
						title : 'CC',
						type : 'item',
						icon : 'lens',
						url : '/charting/charting_cc'
					},
					{
						id : 'hpi',
						title : 'HPI',
						type : 'item',
						icon : 'lens',
						url : '/charting/charting_hpi'
					},
					{
						id : 'pmh',
						title : 'PMH',
						type : 'item',
						icon : 'lens',
						url : '/charting/charting_pmh'
					},
					{
						id : 'psh',
						title : 'PSH',
						type : 'item',
						icon : 'lens',
						url : '/charting/charting_psh'
					},
					{
						id : 'med',
						title : 'MED',
						type : 'item',
						icon : 'lens',
						url : '/charting/charting_med'
					},
					{
						id : 'adr',
						title : 'ADR',
						type : 'item',
						icon : 'lens',
						url : '/charting/charting_adr'
					},
					{
						id : 'sh',
						title : 'SH',
						type : 'item',
						icon : 'lens',
						url : '/charting/charting_sh'
					},
					{
						id : 'fh',
						title : 'FH',
						type : 'item',
						icon : 'lens',
						url : '/charting/charting_fh'
					},
					{
						id : 'pe',
						title : 'PE',
						type : 'item',
						icon : 'lens',
						url : '/charting/charting_pe'
					},
					{
						id : 'dd',
						title : 'DD',
						type : 'item',
						icon : 'lens',
						url : '/charting/charting_dd'
					},
					{
						id : 'ass',
						title : 'ASS',
						type : 'item',
						icon : 'lens',
						url : '/charting/charting_ass'
					},
					{
						id : 'ord',
						title : 'ORD',
						type : 'item',
						icon : 'lens',
						url : '/charting/charting_ord'
					}
				]
			},
		]
	},
	{
		id : 'reports',
		title : 'Reports',
		icon : 'report',
		type: 'collapse',
		children : [
			{
				id : 'standards',
				title : 'Standards of Care',
				type : 'item',
				url : '/reports/standards',
				icon : 'child_care'
			},
			{
				id : 'flowsheets',
				title : 'Flowsheets',
				type : 'item',
				url : '/reports/flowsheet',
				icon : 'grid_on'
			},
			{
				id : 'billing',
				title : 'Billing',
				type : 'item',
				url : '/reports/billing',
				icon : 'description'
			},
		]
	},
	{
		id : 'admin',
		title : 'Administration',
		icon : 'verified_user',
		type : 'collapse',
		children : [
			{
				id : 'macro_editor',
				title : 'Macro Editor',
				type : 'item',
				url : '/admin/macro_editor'
			},
			{
				id : 'template_editor',
				title : 'Template Editor',
				type : 'item',
				url : '/admin/template_editor'
			},
			{
				id : 'dynamic_element',
				title : 'Dynamic Element',
				type : 'item',
				url : '/admin/dynamic_element'
			},
			{
				id : 'patients',
				title : 'Patients',
				type : 'item',
				url : '/admin/patients'
			},
			{
				id : 'system_users',
				title : 'System Users',
				type : 'item',
				url : '/admin/system_users'
			},
			{
				id : 'providers',
				title : 'Providers',
				type : 'item',
				url : '/admin/providers'
			},
			{
				id : 'specialities',
				title : 'Specialities',
				type : 'item',
				url : '/admin/specialities'
			},
			{
				id : 'provider_types',
				title : 'Provider Types',
				type : 'item',
				url : '/admin/provider_types'
			},
			{
				id : 'location',
				title : 'Location(s)',
				type : 'item',
				url : '/admin/location'
			},
			{
				id : 'medications',
				title : 'Medications',
				type : 'item',
				url : '/admin/medications'
			},
			{
				id : 'adverse_drug_reaction',
				title : 'Adverse Drug Reaction',
				type : 'item',
				url : '/admin/adverse_drug_reaction'
			},
			{
				id : 'icd_10',
				title : 'ICD-10',
				type : 'item',
				url : '/admin/icd_10'
			},
			{
				id : 'cpt',
				title : 'CPT',
				type : 'item',
				url : '/admin/cpt'
			},
			{
				id : 'races',
				title : 'races',
				type : 'item',
				url : '/admin/races'
			},
			{
				id : 'substances',
				title : 'Substances',
				type : 'item',
				url : '/admin/substances'
			},
			{
				id : 'social_history',
				title : 'Social History',
				type : 'item',
				url : '/admin/social_history'
			},
			{
				id : 'ros_master',
				title : 'ROS Master',
				type : 'item',
				url : '/admin/ros_master'
			},
			{
				id : 'pem',
				title : 'Physical Exam Master',
				type : 'item',
				url : '/admin/pem'
			},
			{
				id : 'associated_diagnoses',
				title : 'Associated Diagnoses',
				type : 'item',
				url : '/admin/associated_diagnoses'
			}
		]
	}
];

export default navigationConfig;
