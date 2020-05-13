import React from 'react';
import PropTypes from 'prop-types';
import { ListType } from '../../utils/Constants';
import { uuidv4 } from '../../utils/HandleUUID';
import Form from './Form';

export const ReminderContext = React.createContext({});

function RemindApp(props) {
	const [reminders, setReminders] = React.useState();

	const contextValues = {
		reminders: reminders,
		setReminders: setReminders
	}

	/**
	 *  Creates a reminder and sets its based properties.
	 */
	function addReminder(date) {
		const newReminder = {
			id: uuidv4(),
			created: Date.now(),
			name: data.reminderName,
			expires: data.selectedTime,
			done: false,
			expired: false
		};
	}

	return (
		<>
			<ReminderContext.Provider value={contextValues}>
				{props.formActive && <Form addReminder={addReminder} handleForm={props.handleForm} />}
				<ul></ul>
			</ReminderContext.Provider>
		</>
	);
};

RemindApp.propTypes = {
	formActive: PropTypes.bool.isRequired,
	handleForm: PropTypes.func.isRequired
}

export default RemindApp;
