import React from 'react';
import PropTypes from 'prop-types';
import { ReminderContext } from './RemindApp';

function Countdown(props) {
	const { reminders, setReminders, notificationIgnore, setNotificationData } = React.useContext(ReminderContext);

	const timeStates = {
		hours: 0,
		minutes: 0,
		seconds: 0
	};

	/**
	 *	Math that sets the given time, originally in ms, into a readable format.
	 */
	if (props.totalSeconds > 0) {
		let total = props.totalSeconds;
		timeStates.hours = Math.floor(total / 3600);
		total %= 3600;
		timeStates.minutes = Math.floor(total / 60);
		timeStates.seconds = total % 60;
	}

	const [countdownTimer, setCountdownTimer] = React.useState(timeStates);
	const [update, setUpdate] = React.useState(0);

	const newList = reminders.list;
	const index = newList.findIndex((x) => x.id === props.id);

	/**
	 *	Taken from https://overreacted.io/making-setinterval-declarative-with-react-hooks/
	 */
	function useInterval(callback, delay) {
		const savedCallback = React.useRef();

		// Remember the latest function.
		React.useEffect(() => {
			savedCallback.current = callback;
		}, [callback]);

		// Set up the interval.
		React.useEffect(() => {
			function tick() {
				savedCallback.current();
			}
			if (delay !== null) {
				let id = setInterval(tick, delay);
				return () => clearInterval(id);
			}
		}, [delay]);
	}

	function notifyUser() {
		if (notificationIgnore) {
			return;
		}

		const data = {
			title: "Reminder expired!",
			options: {
				body: newList[index].name,
				icon: ""
			}
		};
		setNotificationData(data);
	}

	/**
	 *	Sets the countdown to count backwards.
	 *	Checks if each time state is zero and updates the corresponding states.
	 *	If all states are zero, then sets the reminders expired property to true.
	 */
	useInterval(() => {
		if (countdownTimer.seconds > 0) {
			countdownTimer.seconds = countdownTimer.seconds - 1;
		}
		if (countdownTimer.seconds === 0) {
			if (countdownTimer.minutes === 0) {
				if (countdownTimer.hours === 0) {
					notifyUser();
					newList[index].expired = true;
					setReminders({update: !reminders.update, list: newList});
					return;
				}
				countdownTimer.hours = countdownTimer.hours - 1;
				countdownTimer.minutes = 59;
			}
			countdownTimer.minutes = countdownTimer.minutes - 1;
			countdownTimer.seconds = 59;
		}
		setCountdownTimer(countdownTimer);
		setUpdate(countdownTimer.seconds);
	}, 1000);

	return (
		<>
			{(countdownTimer.hours < 10) ? `0${countdownTimer.hours}` : countdownTimer.hours};
			{(countdownTimer.minutes < 10) ? `0${countdownTimer.minutes}` : countdownTimer.minutes};
			{(countdownTimer.seconds < 10) ? `0${countdownTimer.seconds}` : countdownTimer.seconds};
		</>
	);
}

Countdown.propTypes = {
	totalSeconds: PropTypes.number.isRequired,
	name: PropTypes.string.isRequired,
	id: PropTypes.string.isRequired
};

export default Countdown;
