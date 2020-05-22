import React from 'react';
import { FaRegBell } from 'react-icons/fa';
import { MdInfoOutline } from 'react-icons/md';
import { IoIosArrowDropup, IoIosArrowDropdown } from 'react-icons/io';

import {
	loadFromLocalStorage,
	saveToLocalStorage,
} from '../utils/HandleLocalStorage';

import './HowToUse.css';

const HowToUse = () => {
	const [isShown, setIsShown] = React.useState(
		() => loadFromLocalStorage('howToUse') ?? true
	);

	function handleShown(show) {
		setIsShown(show);
		saveToLocalStorage('howToUse', show);
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

	return (
		<section className='htu' id='htu__id'>
			<div className='section__heading'>
				<div className='section__icon-container'>
					<MdInfoOutline className='section__icon' alt='How to use' />
				</div>
				<h2 className='section__title'>How To Use</h2>
				<div onClick={() => handleShown(!isShown)}>{showMore()}</div>
			</div>
			<div className={isShown ? 'htu__container' : 'hidden'}>
				<FaRegBell className='htu__background' />
				<div className='htu__content'>
					<p>
						Task Meister is an alert website which will notify you
						when a reminder you have set expires.
					</p>
					<p>
						In order to create a reminder you first have to navigate 
						to the 'Add Reminder' section by either scrolling down or 
						clicking the alarm icon in the header.
					</p>
					<p>
						After that, you will see the add form in which you will 
						need to set both a reminder name and an expiration date.
					</p>
					<p>
						The time table is divided into fifteen minute intervals,
						but if you desire for the reminder to expire sooner or
						later, then you can manually delete the minutes portion
						the time and write your own desired time.
					</p>
					<p>
						<strong>
							Note! You need to fill in both the name or time,
							otherwise a reminder will not be made.
						</strong>
					</p>
					<p>
						Regardless if the reminder has expired or not, you are
						able to remove any reminder you no longer want or have a
						need for by clicking the remove button which can be
						found on every individual reminder. The same goes if you 
						wish to remove all reminders from any of the lists.
					</p>
					<p>
						Clicking on the delete entire list button will prompt an 
						"Are you sure?" popout asking you to confirm. This is 
						noteworthy as the same confirmation popout will not open 
						on deleting individual reminders.
					</p>
					<p>
						I recommend removing all the expired and non-needed
						reminders at a regular interval as to free up space for
						additional reminders.
					</p>
					<p>
						In addition to removing reminders, you can also mark a
						reminder as done. This is a great way to have a
						comprehensive catalogue of which tasks you completed
						versus which you have not. Like with the expired
						reminders, removal of any non-needed done reminders is
						encouraged.
					</p>
					<p>
						<strong>
							Note! The web notification will not show up if you
							have the tab closed! In order to circumvent this, I
							suggest keeping the tab containing the site open
							when running a reminder.
						</strong>
					</p>
				</div>
			</div>
		</section>
	);
};

export default HowToUse;
