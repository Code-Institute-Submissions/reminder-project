import React from 'react';
import PropTypes from 'prop-types';
import { FaMoon, FaSun } from 'react-icons/fa';

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
					<li className='li-item li-link first-item start-app' onClick={() => props.handleForm(true)}>
						Create new
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
				<img src='#' alt='#' className='panel-img' />
				<h1 className='panel-heading'>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit.
				</h1>
				<p className='panel-text'>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
					do eiusmod tempor incididunt ut labore et dolore magna
					aliqua. Diam maecenas ultricies mi eget. Vitae sapien
					pellentesque habitant morbi tristique senectus. Vitae semper
					quis lectus nulla at volutpat. Odio ut sem nulla pharetra
					diam sit amet nisl suscipit.
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
