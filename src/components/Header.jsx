import React from 'react';
import PropTypes from 'prop-types';
import { FaMoon, FaSun } from 'react-icons/fa';
import { MdAddAlarm } from 'react-icons/md';

const Header = (props) => {
	const iconCode = () => {
		if (props.isDark) {
			return <FaSun id='icon' />;
		}
		return <FaMoon id='icon' />;
	};

	return (
		<header className='header-background'>
			<div className='top-bar-container'>
				<ul className='top-bar'>
					<li className='li-item first-item start-app' onClick={() => props.handleForm(true)}>
						<MdAddAlarm className='theme-icon' />
					</li>
					<li 
						id='theme-id'
						className='li-item theme-icon'
						onClick={() => props.handleTheme(!props.isDark)}
					>
						{iconCode()}
					</li>
				</ul>
			</div>
			<div className='intro-panel'>
				<h1 className='panel-heading'>
					Task Meister
				</h1>
				<p className='panel-text'>
					Never forget another task again!
				</p>
			</div>
		</header>
	);
};

Header.propTypes = {
	isDark: PropTypes.bool.isRequired,
	handleTheme: PropTypes.func.isRequired,
	handleForm: PropTypes.func.isRequired
};

export default Header;
