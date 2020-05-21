import React from "react";
import { IoIosArrowDropup } from 'react-icons/io';

const Up = (props) => {
	return (
		<div className={props.holderClass}>
			<IoIosArrowDropup className={props.iconClass} alt={props.alt} />
		</div>
	);
};

export default Up;
