import React from "react";
import { MdAddAlarm } from 'react-icons/md';

const AlarmClock = (props) => {
	return (
		<div className={props.holderClass}>
			<MdAddAlarm className={props.iconClass} alt={props.alt} />
		</div>
	);
};

export default AlarmClock;
