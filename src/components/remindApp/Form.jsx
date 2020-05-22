import React from 'react';
import PropTypes from 'prop-types';
import DatePicker from 'react-datepicker';
import {
	loadFromLocalStorage,
	saveToLocalStorage,
} from '../../utils/HandleLocalStorage';
import { MdAddAlarm } from 'react-icons/md';
import { IoIosArrowDropup, IoIosArrowDropdown } from 'react-icons/io';

import './Form.css';
import 'react-datepicker/dist/react-datepicker.css';
import './Datepicker.css';

function Form(props) {
	const [isShown, setIsShown] = React.useState(
		() => loadFromLocalStorage('addForm') ?? false
	);
	const [reminderName, setReminderName] = React.useState('');
	const [reminderTime, setReminderTime] = React.useState(new Date());
	const [showError, setShowError] = React.useState(false);

	function handleShown(show) {
		setIsShown(show);
		saveToLocalStorage('addForm', show);
	}

	const showMore = () => {
		if (isShown) {
			return (
				<div className='section__toggle'>
					<IoIosArrowDropup className='section__btn' alt='show' />
				</div>
			);
		}
		return (
			<div className='section__toggle'>
				<IoIosArrowDropdown className='section__btn' alt='hide' />
			</div>
		);
	};

	function handleAdd(event) {
		setShowError(false);
		const selectedTime = Date.parse(reminderTime);
		if (
			!reminderName ||
			!reminderTime ||
			reminderName.length < 1 ||
			selectedTime <= Date.now()
		) {
			event.preventDefault();
			setShowError(true);
			return;
		}

		/**
		 *  Sets both the form and form inputs back to default state after a reminder was added.
		 */
		props.addReminder({ reminderName, selectedTime });
		setReminderTime(new Date());
		setReminderName('');
	}

	return (
		<section className='form' id='form__id'>
			<div className='section__heading'>
				<div className='section__icon-container'>
					<MdAddAlarm className='section__icon' alt='Add new reminder' />
				</div>
				<h2 className='section__title'>Add new reminder</h2>
				<div onClick={() => handleShown(!isShown)}>{showMore()}</div>
			</div>
			<form className={isShown ? 'form__container' : 'hidden'}>
				<label htmlFor='name' className='form__label'>
					Set a name:
				</label>
				<input
					className='form__input'
					type='text'
					name='name'
					placeholder='Reminder name...'
					onChange={(e) => setReminderName(e.target.value)}
				/>

				<label htmlFor='expTime' className='form__label'>
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
					className='form__btn'
					type='submit'
					onClick={(event) => handleAdd(event)}
				>
					Add
				</button>
				<div className={showError ? 'form__error' : 'hidden'}>
					Error: Cannot add reminder with an empty input field!
				</div>
			</form>
		</section>
	);
}

Form.propTypes = {
	addReminder: PropTypes.func.isRequired,
	handleForm: PropTypes.func.isRequired
};

export default Form;
