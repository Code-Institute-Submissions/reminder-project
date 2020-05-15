import React from 'react';
import PropTypes from 'prop-types';
import Card from './Card';
import { ReminderContext } from './RemindApp';
import { ListType } from '../../utils/Constants';
import { FaWindowClose } from 'react-icons/fa';
import { IoMdArrowDropdown, IoMdArrowDropup } from 'react-icons/io';

import { loadFromLocalStorage, saveToLocalStorage } from '../../utils/HandleLocalStorage';

function List(props) {
	const { reminders, setReminders } = React.useContext(ReminderContext);

	const [isShown, setIsShown] = React.useState(() => (loadFromLocalStorage('isShown') ?? false));

	function handleShown(show) {
		setIsShown(show);
		saveToLocalStorage('isShown', show);
	}

	const showMore = () => {
		if (isShown) {
			return <IoMdArrowDropup className='show-more-btn' value={{ size: "50px" }} onClick={() => handleShown(!isShown)} />;
		}
		return <IoMdArrowDropdown className='show-more-btn' value={{ size: "50px" }} onClick={() => handleShown(!isShown)} />;
	};

	/**
	 *  TBW
	 */
	let name = '';
	if (props.listType === ListType.expired) {
		name = 'Expired';
	}
	if (props.listType === ListType.running) {
		name = 'Running';
	}
	if (props.listType === ListType.done) {
		name = 'Done';
	}

	/**
	 *	Delete selected part by selecting the rest and saving it.
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
			const newList = reminders.list.filter((x) => (x.done === true || (x.done === false && x.expired === true))) ?? [];
			setReminders({update: !reminders.update, list: newList});
		}
	}

	return (
		<>
		{(props.list.length > 0) && 
			<div className={`list-container list-${props.listType}`}>
				<div className='list-heading'>
					<div className='list-label'>{name}</div>
					<div className='list-delete'><FaWindowClose onClick={() => deleteList(props.listType)} /></div>
					<div className='list-toggle'>{showMore()}</div>
				</div>
				<div className="wrapper">
					<div className={isShown ? 'card' : 'hidden'}>
						{props.list.map((item) => (
							<Card key={item.id} id={item.id} />
						))}
					</div>
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
