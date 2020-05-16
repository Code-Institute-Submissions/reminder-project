import React from 'react';

const HowToUse = () => {
	return (
		<section className='container how-to-use--container'>
			<div className='how-to-use-container'>
				<h2 className='heading'>How To Use</h2>
				<p className='text-style'>
					Task Meister is an alert website which will notify you when a reminder you have set expires.
				</p>
				<p className='text-style'>
					In order to create a reminder you've got to click the green button in the upper right corner of the screen.
					Doing so will open a form popout. After that just give the reminder an appropriate name corresponding to the 
					task you want to be reminded of, and set at which date and time you want the reminder to go off at. 
				</p>
				<p className='text-style'>
					<b>
						Note! You need to fill in both the name or time, otherwise a reminder will not be made.
					</b>
				</p>
				<p className='text-style'>
					Regardless if the reminder has expired or not, you are able to remove any reminder you no longer want or have 
					a need for by clicking the remove button which can be found on every individual reminder. The same goes for 
					entire lists.
				</p>
				<p className='text-style'>
					I recommend removing all the expired and non-needed reminders at a regular interval as to free up space for 
					additional reminders.
				</p>
				<p className='text-style'>
					In addition to removing reminders, you can also mark a reminder as done. This is a great way to have a comprehensive 
					catalogue of which tasks you completed versus which you have not. Like with the expired reminders, removal of any 
					non-needed done reminders is encouraged.
				</p>
				<p className='text-style'>
					<b>
						Note! The web notification will not show up if you have the tab closed! In order to circumvent this, I suggest 
						keeping the tab containing the site open when running a reminder.
					</b>
				</p>
			</div>
		</section>
	);
};

export default HowToUse;
