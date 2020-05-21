import React from "react";
import PropTypes from "prop-types";
import Countdown from "./Countdown";
import { ReminderContext } from "./RemindApp";
import { useOnClickOutside } from "../../utils/ClickOutside";
import { Complete, Close } from "../svg";

import "./Card.css";

const Card = (props) => {
	const { reminders, setReminders } = React.useContext(ReminderContext);

	const newList = reminders.list;
	const item = newList.find((x) => x.id === props.id);
	const created = new Date(item.created);
	const expires = new Date(item.expires);

	const cardRef = React.useRef(null);
	const [showName, setShowName] = React.useState(false);
	useOnClickOutside(cardRef, () => setShowName(false));

	function cardDelete() {
		const index = newList.findIndex((x) => x.id === props.id);
		newList.splice(index, 1);
		setReminders({ update: !reminders.update, list: newList });
	}

	function cardComplete() {
		const index = newList.findIndex((x) => x.id === props.id);
		newList[index].expires = Date.now();
		newList[index].expired = true;
		newList[index].done = true;
		newList.sort(function (a, b) {
			return a.expires - b.expires;
		});
		setReminders({ update: !reminders.update, list: newList });
	}

	return (
		<>
			<div className="card__container">
				<p className="card__heading">Name:</p>
				<p
					className="card__name card__content"
					onClick={() => setShowName(true)}
				>
					{item.name}
				</p>
				<div></div>
				<p className="card__heading">Created on:</p>
				<p className="card__date card__content">
					{created.toLocaleString([], {
						year: "numeric",
						month: "numeric",
						day: "numeric",
						hour: "2-digit",
						minute: "2-digit",
					})}
				</p>
				<div></div>
				{!item.done && !item.expired && (
					<p className="card__heading">Expires in: </p>
				)}
				{item.done && <p className="card__heading">Done: </p>}
				{!item.done && item.expired && (
					<p className="card__heading">Expired on: </p>
				)}
				<div className="card__content">
					{!item.done && !item.expired && (
						<Countdown
							totalSeconds={Math.floor(
								(item.expires - Date.now()) / 1000
							)}
							id={item.id}
						/>
					)}
					{!item.done &&
						item.expired &&
						expires.toLocaleString([], {
							year: "numeric",
							month: "numeric",
							day: "numeric",
							hour: "2-digit",
							minute: "2-digit",
						})}
					{item.done &&
						expires.toLocaleString([], {
							year: "numeric",
							month: "numeric",
							day: "numeric",
							hour: "2-digit",
							minute: "2-digit",
						})}
				</div>
				<div></div>
				{!item.done && (
					<div
						className="card__complete-btn"
						onClick={() => cardComplete()}
					>
						<Complete
							holderClass="card__icon-container"
							iconClass="card__icon"
							alt="Complete"
						/>
					</div>
				)}
				<div className="card__delete-btn" onClick={() => cardDelete()}>
					<Close
						holderClass="card__icon-container"
						iconClass="card__icon"
						alt="Delete"
					/>
				</div>
				<div
					ref={cardRef}
					className={showName ? "card__full-name" : "hidden"}
				>
					{item.name}
				</div>
			</div>
		</>
	);
};

Card.propTypes = {
	id: PropTypes.string.isRequired,
};

export default Card;
