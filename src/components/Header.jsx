import React from 'react';
import PropTypes from 'prop-types';
import './Header.css';
import {
	MdAddAlarm,
	MdAssignment,
	MdInfoOutline,
	MdWbSunny,
	MdBrightness2,
} from 'react-icons/md';
import { Logo } from './svg';

const Header = (props) => {
	return (
		<header className='header'>
			<div className='header__logo-container'>
				<Logo />
			</div>
			<div className='header__nav-container'>
				<ul className='header__nav-bar'>
					<li className='header__nav-item'>
						<div className='header__icon-holder'>
							<a href='#form__id'>
								<MdAddAlarm
									className='header__icon'
									alt='Go to add reminder section'
								/>
							</a>
						</div>
					</li>
					<li className='header__nav-item'>
						<div className='header__icon-holder'>
							<a href='#htu__id'>
								<MdInfoOutline
									className='header__icon'
									alt='Go to how to use section'
								/>
							</a>
						</div>
					</li>
					<li className='header__nav-item'>
						<div className='header__icon-holder'>
							<a href='#list__id'>
								<MdAssignment
									className='header__icon'
									alt='Go to list section'
								/>
							</a>
						</div>
					</li>
					<li
						className='header__nav-item'
						onClick={() => props.handleTheme(!props.isDark)}
					>
						<div className='header__icon-holder'>
							{props.isDark && (
								<MdWbSunny
									className='header__icon'
									alt='Go to list section'
								/>
							)}
							{!props.isDark && (
								<MdBrightness2
									className='header__icon'
									alt='Go to list section'
								/>
							)}
						</div>
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
