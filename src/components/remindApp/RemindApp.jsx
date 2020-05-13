import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { ListType } from '../../utils/Constants';
import { uuidv4 } from '../../utils/HandleUUID';
import { loadFromLocalStorage, saveToLocalStorage } from '../../utils/HandleLocalStorage';
import Form from './Form';
import List from './List';

export const ReminderContext = React.createContext({});

function RemindApp(props) {
	const [reminders, setReminders] = React.useState(() => InitialLoad());

	function InitialLoad() {
		const list = loadFromLocalStorage("reminder") ?? [];
		const updatedList = list.map((x) => {
			if (x.expires <= Date.now()) {
				x.expired = true;
			}
			return x;
		});
		saveToLocalStorage("reminder", updatedList);
		return {
			update: false,
			list: updatedList
		}
	}
	
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

		const newList = reminders.list;
		newList.push(newReminder);
		newList.sort(function (a, b) {
			return a.expires - b.expires;
		});
	}

	return (
		<>
			<ReminderContext.Provider value={contextValues}>
				{props.formActive && <Form addReminder={addReminder} handleForm={props.handleForm} />}
				<List key="expired" listType={ListType.expired} list={reminders.list.filter((x) => (x.done === false && x.expired === true))} />
				<List key="running" listType={ListType.running} list={reminders.list.filter((x) => (x.done === false && x.expired === false))} />
				<List key="done" listType={ListType.done} list={reminders.list.filter((x) => (x.done === true))} />
			</ReminderContext.Provider>
		</>
	);
};

RemindApp.propTypes = {
	formActive: PropTypes.bool.isRequired,
	handleForm: PropTypes.func.isRequired
}

export default RemindApp;
