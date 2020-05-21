import React from "react";
import { MdBrightness2 } from 'react-icons/md';

const Moon = (props) => {
	return (
		<div className={props.holderClass}>
			<MdBrightness2 className={props.iconClass} alt={props.alt} />
		</div>
	);
};

export default Moon;
