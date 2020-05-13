import React from 'react';

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
			id: "",
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
