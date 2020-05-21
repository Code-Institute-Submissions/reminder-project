import React from "react";
import PropTypes from "prop-types";
import Card from "./Card";
import { ReminderContext } from "./RemindApp";
import { ListType } from "../../utils/Constants";
import { Down, Up, Complete, Close, Reminder } from "../svg";

import {
	loadFromLocalStorage,
	saveToLocalStorage,
} from "../../utils/HandleLocalStorage";

import "./List.css";

function List(props) {
	const { reminders, setReminders } = React.useContext(ReminderContext);

	/**
	 *  TBW
	 */
	let name = "";
	if (props.listType === ListType.expired) {
		name = "Expired";
	}
	if (props.listType === ListType.running) {
		name = "Running";
	}
	if (props.listType === ListType.done) {
		name = "Done";
	}

	const [isShown, setIsShown] = React.useState(
		() => loadFromLocalStorage(`list-${name}`) ?? false
	);

	function handleShown(show) {
		setIsShown(show);
		saveToLocalStorage(`list-${name}`, show);
	}

	const showMore = () => {
		if (isShown) {
			return (
				<Up
					holderClass="section__toggle"
					iconClass="section__btn"
					alt="show"
				/>
			);
		}
		return (
			<Down
				holderClass="section__toggle"
				iconClass="section__btn"
				alt="hide"
			/>
		);
	};

	/**
	 *	Delete selected part by selecting the rest and saving it.
	 */
	function deleteList(what) {
		if (what === ListType.done) {
			const newList =
				reminders.list.filter((x) => x.done === false) ?? [];
			setReminders({ update: !reminders.update, list: newList });
		}
		if (what === ListType.expired) {
			const newList =
				reminders.list.filter(
					(x) =>
						x.done === true ||
						(x.done === false && x.expired === false)
				) ?? [];
			setReminders({ update: !reminders.update, list: newList });
		}
		if (what === ListType.running) {
			const newList =
				reminders.list.filter(
					(x) =>
						x.done === true ||
						(x.done === false && x.expired === true)
				) ?? [];
			setReminders({ update: !reminders.update, list: newList });
		}
	}

	return (
		<section className={`list list__${props.listType}`}>
			<div className="section__heading">
				<Reminder
					holderClass="section__icon-container"
					iconClass="section__icon"
					alt="Remainders"
				/>
				<h2 className="section__title list__title">
					<span>{name}</span>
					<div
						className="list__delete"
						onClick={() => deleteList(props.listType)}
					>
						<Close
							holderClass="list__icon-container"
							iconClass="list__icon"
							alt="Delete list items"
						/>
					</div>
				</h2>
				<div onClick={() => handleShown(!isShown)}>{showMore()}</div>
			</div>
			<div className={isShown ? "list__container" : "hidden"}>
				{props.list.length > 0 && (
					<div className="list__cards">
						{props.list.map((item) => (
							<Card key={item.id} id={item.id} />
						))}
					</div>
				)}
				{props.list.length < 1 && (
					<div className="list__no-data">
						The list is empty!
					</div>
				)}
			</div>
		</section>
	);
}

List.propTypes = {
	list: PropTypes.array.isRequired,
	listType: PropTypes.string.isRequired,
};

export default List;
