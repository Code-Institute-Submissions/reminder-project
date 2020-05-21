import React from "react";
import { IoIosCloseCircleOutline } from 'react-icons/io';

const Close = (props) => {
	return (
		<div className={props.holderClass}>
			<IoIosCloseCircleOutline className={props.iconClass} alt={props.alt} />
		</div>
	);
};

export default Close;
