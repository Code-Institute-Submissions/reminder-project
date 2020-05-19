import React from 'react';
import PropTypes from 'prop-types';
import { FaWindowClose } from 'react-icons/fa';
import DatePicker from 'react-datepicker';

import 'react-datepicker/dist/react-datepicker.css';
import './Datepicker.css';

function Form(props) {
	const [reminderName, setReminderName] = React.useState('');
	const [reminderTime, setReminderTime] = React.useState(new Date());
	const [showError, setShowError] = React.useState(false);

	function handleAdd() {
		setShowError(false);
		const selectedTime = Date.parse(reminderTime);
		if (!reminderName || !reminderTime || reminderName.length < 1 || selectedTime <= Date.now()) {
			setShowError(true);
			return;
		}

		/**
		 *  Sets both the form and form inputs back to default state after a reminder was added or the form was closed.
		 */
		props.addReminder({reminderName, selectedTime});
		setReminderName('');
		setReminderTime(null);
		props.handleForm(false);
	}

	return (
		<form className='container form-container'>
			<label htmlFor='name' className='form-label'>
				Set a name:
			</label>
			<input 
				className='form-input'
				type='text'
				name='name'
				placeholder='Reminder name...'
				onChange={(e) => setReminderName(e.target.value)}
			/>

			<label htmlFor='expTime' className='form-label'>
				Select expiration time:
			</label>
			<DatePicker 
				selected={reminderTime}
				onChange={(date) => setReminderTime(date)}
				onSelect={(date) => setReminderTime(date)}
				showTimeSelect
				timeFormat='HH:mm'
				timeIntervals={15}
				timeCaption='Time'
				dateFormat='yyyy-MM-dd h:mm aa'
				minDate={new Date()}
				name='expTime'
			/>
			<button 
				className='form-btn' 
				type='submit' 
				onClick={() => handleAdd()}
			>
				Add
			</button>
			<div className={showError ? 'error-msg' : 'hidden'}>
				Error: Cannot add reminder with an empty input field!
			</div>
			<FaWindowClose 
				className='close-form' 
				onClick={() => props.handleForm(false)}
			/>
		</form>
	);
}

Form.propTypes = {
	addReminder: PropTypes.func.isRequired,
	handleForm: PropTypes.func.isRequired
};

export default Form;
