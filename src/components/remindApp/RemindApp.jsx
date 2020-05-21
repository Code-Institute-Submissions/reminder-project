import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Notification from 'react-web-notification';
import { ListType } from '../../utils/Constants';
import { uuidv4 } from '../../utils/HandleUUID';
import { loadFromLocalStorage, saveToLocalStorage } from '../../utils/HandleLocalStorage';
import Form from './Form';
import List from './List';

export const ReminderContext = React.createContext({});

function RemindApp(props) {
	const [reminders, setReminders] = React.useState(() => InitialLoad());
	const [notificationIgnore, setNotificationIgnore] = React.useState(true);
	const [notificationData, setNotificationData] = React.useState({title: ''});

	function InitialLoad() {
		const list = loadFromLocalStorage('reminder') ?? [];
		const updatedList = list.map((x) => {
			if (x.expires <= Date.now()) {
				x.expired = true;
			}
			return x;
		});
		saveToLocalStorage('reminder', updatedList);
		return {
			update: false,
			list: updatedList
		}
	}
	
	const contextValues = {
		reminders: reminders,
		setReminders: setReminders,
		notificationIgnore: notificationIgnore,
		setNotificationIgnore: setNotificationIgnore,
		notificationData: notificationData,
		setNotificationData: setNotificationData
	}

	useEffect(() => {
		function updateTitle() {
			const expired = reminders.list.filter(x => (x.expired === true && x.done === false));
			if (expired.length > 0) {
				document.title = `(${expired.length}) Task Meister`;
			} else {
				document.title = 'Task Meister';
			}
		}
		saveToLocalStorage('reminder', reminders.list);
		updateTitle();
	}, [reminders.update]);

	/**
	 *  Creates a reminder and sets its based properties.
	 */
	function addReminder(data) {
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
		setReminders({update: !reminders.update, list: newList});
	}

	function handlePermissionGranted() {
		if (notificationIgnore) {
			setNotificationIgnore(false);
		}
	}

	function handlePermissionDenied() {
		if (!notificationIgnore) {
			setNotificationIgnore(true);
		}
	}

	function handleNotSupported() {
		if (!notificationIgnore) {
			setNotificationIgnore(true);
		}
	}

	return (
		<>
			<ReminderContext.Provider value={contextValues}>
				<Form addReminder={addReminder} handleForm={props.handleForm} />
				<List key='expired' listType={ListType.expired} list={reminders.list.filter((x) => (x.done === false && x.expired === true))} />
				<List key='running' listType={ListType.running} list={reminders.list.filter((x) => (x.done === false && x.expired === false))} />
				<List key='done' listType={ListType.done} list={reminders.list.filter((x) => (x.done === true))} />
			</ReminderContext.Provider>
			<Notification 
				ignore={notificationIgnore && notificationData.title !== ''}
				notSupported={handleNotSupported}
				onPermissionGranted={handlePermissionGranted}
				onPermissionDenied={handlePermissionDenied}
				timeout={5000}
				title={notificationData.title}
				options={notificationData.options}
			/>
		</>
	);
}

RemindApp.propTypes = {
	formActive: PropTypes.bool.isRequired,
	handleForm: PropTypes.func.isRequired
};

export default RemindApp;
