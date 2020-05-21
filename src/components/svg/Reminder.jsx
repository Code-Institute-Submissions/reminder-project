import React from "react";
import { MdAssignment } from 'react-icons/md';

const Reminder = (props) => {
	return (
		<div className={props.holderClass}>
			<MdAssignment className={props.iconClass} alt={props.alt} />
		</div>
	);
};

export default Reminder;
