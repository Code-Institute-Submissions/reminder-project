import React from 'react';
import PropTypes from 'prop-types';
import Card from './Card';
import { ReminderContext } from './RemindApp';
import { ListType } from '../../utils/Constants';
import { MdAssignment } from 'react-icons/md';
import {
	IoIosArrowDropup,
	IoIosArrowDropdown,
	IoIosCloseCircleOutline,
} from 'react-icons/io';

import {
	loadFromLocalStorage,
	saveToLocalStorage,
} from '../../utils/HandleLocalStorage';

import './List.css';

function List(props) {
	const { reminders, setReminders } = React.useContext(ReminderContext);

	const [aysIsHidden, setAysIsHidden] = React.useState(true);

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

	const [isShown, setIsShown] = React.useState(
		() => loadFromLocalStorage(`list-${name}`) ?? true
	);

	function handleShown(show) {
		setIsShown(show);
		saveToLocalStorage(`list-${name}`, show);
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

	function areYouSure() {
		deleteList(props.listType);
		setAysIsHidden(true);
	}

	/**
	 *	Delete selected part by selecting the rest and saving it.
	 */
	function deleteList(what) {
		if (what === ListType.done) {
			const newList =
				reminders.list.filter((x) => x.done === false) ?? [];
			setReminders({ update: !reminders.update, list: newList });
		}
		if (what === ListType.expired) {
			const newList =
				reminders.list.filter(
					(x) =>
						x.done === true ||
						(x.done === false && x.expired === false)
				) ?? [];
			setReminders({ update: !reminders.update, list: newList });
		}
		if (what === ListType.running) {
			const newList =
				reminders.list.filter(
					(x) =>
						x.done === true ||
						(x.done === false && x.expired === true)
				) ?? [];
			setReminders({ update: !reminders.update, list: newList });
		}
	}

	return (
		<section className={`list list__${props.listType}`} id='list__id'>
			<div className={aysIsHidden ? 'hidden' : 'ays'}>
				<div className='ays__container'>
					<h2>Are You Sure?</h2>
					<p>This action cannot be undone!</p>
					<div className='ays__btn-container'>
						<button
							className='ays__btn ays__btn-yes'
							onClick={() => areYouSure(props.listType)}
						>
							Yes
						</button>
						<button
							className='ays__btn'
							onClick={() => setAysIsHidden(true)}
						>
							No
						</button>
					</div>
				</div>
			</div>
			<div className='section__heading'>
				<div className='section__icon-container'>
					<MdAssignment className='section__icon' alt='Remainders' />
				</div>
				<h2 className='section__title list__title'>
					<span>{name}</span>
					{props.list.length > 0 && (
						<div
							className='list__delete'
							onClick={() => setAysIsHidden(false)}
						>
							<div className='list__icon-container'>
								<IoIosCloseCircleOutline
									className='list__icon'
									alt='Delete list items'
								/>
							</div>
						</div>
					)}
				</h2>
				<div onClick={() => handleShown(!isShown)}>{showMore()}</div>
			</div>
			<div className={isShown ? 'list__container' : 'hidden'}>
				{props.list.length > 0 && (
					<div className='list__cards'>
						{props.list.map((item) => (
							<Card key={item.id} id={item.id} />
						))}
					</div>
				)}
				{props.list.length < 1 && (
					<div className='list__no-data'>The list is empty!</div>
				)}
			</div>
		</section>
	);
}

List.propTypes = {
	list: PropTypes.array.isRequired,
	listType: PropTypes.string.isRequired,
};

export default List;
