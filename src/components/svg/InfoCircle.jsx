import React from "react";
import { MdInfoOutline } from 'react-icons/md';

const InfoCircle = (props) => {
	return (
		<div className={props.holderClass}>
			<MdInfoOutline className={props.iconClass} alt={props.alt} />
		</div>
	);
};

export default InfoCircle;
