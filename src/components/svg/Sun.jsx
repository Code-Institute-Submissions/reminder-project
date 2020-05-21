import React from "react";
import { MdWbSunny } from 'react-icons/md';

const Sun = (props) => {
	return (
		<div className={props.holderClass}>
			<MdWbSunny className={props.iconClass} alt={props.alt} />
		</div>
	);
};

export default Sun;
