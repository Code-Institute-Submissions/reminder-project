import React from 'react';
import PropTypes from 'prop-types';
import Logo from './Logo';
import { FaMoon, FaSun } from 'react-icons/fa';
import { MdAddAlarm } from 'react-icons/md';
import { BsInfoCircle } from 'react-icons/bs';

const Header = (props) => {
	const iconCode = () => {
		if (props.isDark) {
			return <FaSun id='icon' className='icon' alt='Change into dark mode button' />;
		}
		return <FaMoon id='icon' className='icon' alt='Change into light mode button' />;
	};

	return (
		<header className='header-background'>
			<div className='top-bar-container'>
				<ul className='top-bar'>
					<li
						className='li-item first-item start-app'
						onClick={() => props.handleForm(true)}
					>
						<MdAddAlarm
							className='icon'
							alt='Add reminder button'
						/>
					</li>
					<li
						className='li-item'
						onClick={() => props.handleVisibility(!props.isHidden)}
					>
						<BsInfoCircle className='icon' />
					</li>
					<li
						id='theme-id'
						className='li-item'
						onClick={() => props.handleTheme(!props.isDark)}
					>
						{iconCode()}
					</li>
				</ul>
			</div>
			<div className='intro-panel'>
				<Logo className='logo' />
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
