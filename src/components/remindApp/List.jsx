import React from 'react';
import PropTypes from 'prop-types';
import Card from './Card';
import { ReminderContext } from './RemindApp';
import { ListType } from '../../utils/Constants';
import { FaWindowClose } from 'react-icons/fa';

function List(props) {
	const { reminders, setReminders } = React.useContext(ReminderContext);

	/**
	 *  TBW
	 */
	let name = "";
	if (props.listType === ListType.expired) {
		name = "Expired";
	}
	if (props.listType === ListType.running) {
		name = "Running";
	}
	if (props.listType === ListType.done) {
		name = "Done";
	}

	/**
	 *	Delete selected part by selecting the rest and saving it.
	 *	We do this by filtering the reminders by their done and expired properties.
	 */
	function deleteList(what) {
		if (what === ListType.done) {
			const newList = reminders.list.filter((x) => x.done === false) ?? [];
			setReminders({update: !reminders.update, list: newList});
		}
		if (what === ListType.expired) {
			const newList = reminders.list.filter((x) => (x.done === true || (x.done === false && x.expired === false))) ?? [];
			setReminders({update: !reminders.update, list: newList});
		}
		if (what === ListType.running) {
			const newList = reminders.list.filter((x) => (y.done === true || (x.done === false && x.expired === true))) ?? [];
			setReminders({update: !reminders.update, list: newList});
		}
	}

	return (
		<>
		{(props.list.length > 0) && 
			<div className={`list-container list-${props.listType}`}>
				<div className="list-heading">
					<label className="list-label">{name}</label>
					<FaWindowClose className="del-list" onClick={() => deleteList(props.listType)} />
				</div>
				<div className="card">
					{props.list.map((item) => (
						<Card key={item.id} id={item.id} />
					))}
				</div>
			</div>
		}
		</>
	);
}

List.propTypes = {
	list: PropTypes.array.isRequired,
	listType: PropTypes.string.isRequired
};

export default List;
