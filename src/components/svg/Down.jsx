import React from "react";
import { IoIosArrowDropdown } from 'react-icons/io';

const Down = (props) => {
	return (
		<div className={props.holderClass}>
			<IoIosArrowDropdown className={props.iconClass} alt={props.alt} />
		</div>
	);
};

export default Down;
