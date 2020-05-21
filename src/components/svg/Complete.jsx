import React from "react";
import { IoIosCheckmarkCircleOutline } from 'react-icons/io';
// import { IoMdCheckmarkCircleOutline } from 'react-icons/io';

const Complete = (props) => {
	return (
		<div className={props.holderClass}>
			<IoIosCheckmarkCircleOutline className={props.iconClass} alt={props.alt} />
		</div>
	);
};

export default Complete;
