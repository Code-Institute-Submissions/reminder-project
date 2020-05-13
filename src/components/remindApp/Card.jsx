import React from 'react';
import PropTypes from 'prop-types';
import Countdown from './Countdown';
import { ReminderContext } from './RemindApp';
import { FaCheckSquare, FaWindowClose } from 'react-icons/fa';

const Card = (props) => {
	const { reminders, setReminders } = React.useContext(ReminderContext);

	const newList = reminders.list;
	const item = newList.find((x) => x.id === props.id);
	const created = new Date(item.created);
	const expires = new Date(item.expires);

	function cardDelete() {
		const index = newList.findIndex((x) => x.id === props.id);
		newList.splice(index, 1);
		setReminders({update: !reminders.update, list: newList});
	}

	function cardComplete() {
		const index = newList.findIndex((x) => x.id === props.id);
		newList[index].expires = Date.now();
		newList[index].expired = true;
		newList[index].done = true;
		newList.sort(function (a, b) {
			return a.expires - b.expires;
		});
		setReminders({update: !reminders.update, list: newList});
	}

	return (
		<div className='card-container'>
			<FaWindowClose className='card-delete-btn' onClick={() => cardDelete()} />
			<p className='name-heading card-heading'>Name:</p> <p className='card-name card-content'>{item.name}</p>
			<p className='date-heading card-heading'>Created on:</p> <p className='card-date card-content'>{created.toLocaleString([], {year: 'numeric', month: 'numeric', day: 'numeric', hour: '2-digit', minute: '2-digit'})}</p>
			{!item.done && <FaCheckSquare className='card-complete-btn' onClick={() => cardComplete()} />}
			{!item.done && !item.expired && <p className='countdown-heading card-heading'>Expires in: </p>}
			{item.done && <p className='countdown-heading card-heading'>Done: </p>}
			{!item.done && item.expired && <p className='countdown-heading card-heading'>Expired on: </p>}
			<div className='countdown card-content'>
				{!item.done && !item.expired && <Countdown totalSeconds={Math.floor((item.expires - Date.now()) / 1000)} id={item.id} />}
				{/* Checks each items property states and writes down when the reminder expired */}
				{!item.done && item.expired && expires.toLocaleString([], {year: 'numeric', month: 'numeric', day: 'numeric', hour: '2-digit', minute: '2-digit'})}
				{item.done && expires.toLocaleString([], {year: 'numeric', month: 'numeric', day: 'numeric', hour: '2-digit', minute: '2-digit'})}
			</div>
		</div>
	);
}

Card.propTypes = {
	id: PropTypes.string.isRequired
};

export default Card;
