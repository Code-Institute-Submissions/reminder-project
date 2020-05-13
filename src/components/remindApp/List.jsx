import React from 'react';
import PropTypes from 'prop-types';
import { ReminderContext } from './RemindApp';
import { ListType } from '../../utils/Constants';

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

	return (
		<>
		{(props.list.length > 0) && 
			<div className={`list-container list-${props.listType}`}>
				<div className="list-heading">
					<label className="list-label">{name}</label>
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
