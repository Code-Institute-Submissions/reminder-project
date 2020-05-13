import React from 'react';
import { ListType } from '../../utils/Constants';
import { uuidv4 } from '../../utils/HandleUUID';

export const ReminderContext = React.createContext({});

function RemindApp() {
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
				<form action=""></form>
				<ul></ul>
			</ReminderContext.Provider>
		</>
	);
};

export default RemindApp;
