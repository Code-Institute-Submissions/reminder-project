import React from "react";
import PropTypes from "prop-types";
import "./Header.css";
import { Logo, AlarmClock, InfoCircle, Reminder, Moon, Sun } from "./svg";

const Header = (props) => {
	return (
		<header className="header">
			<div className="header__logo-container">
				<Logo />
			</div>
			<div className="header__nav-container">
				<ul className="header__nav-bar">
					<li className="header__nav-item">
						<AlarmClock
							holderClass="header__icon-holder"
							iconClass="header__icon"
							alt="Go to add reminder section"
						/>
					</li>
					<li className="header__nav-item">
						<InfoCircle
							holderClass="header__icon-holder"
							iconClass="header__icon"
							alt="Go to how to use section"
						/>
					</li>
					<li className="header__nav-item">
						<Reminder
							holderClass="header__icon-holder"
							iconClass="header__icon"
							alt="Go to list section"
						/>
					</li>
					<li
						className="header__nav-item"
						onClick={() => props.handleTheme(!props.isDark)}
					>
						{props.isDark && (
							<Sun
								holderClass="header__icon-holder"
								iconClass="header__icon"
								alt="Change into light mode"
							/>
						)}
						{!props.isDark && (
							<Moon
								holderClass="header__icon-holder"
								iconClass="header__icon"
								alt="Change into dark mode"
							/>
						)}
					</li>
				</ul>
			</div>
		</header>
	);
};

Header.propTypes = {
	isDark: PropTypes.bool.isRequired,
	handleTheme: PropTypes.func.isRequired,
};

export default Header;
