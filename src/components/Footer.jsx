import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

import "./Footer.css";

const Footer = () => {
	return (
		<footer className='footer__container'>
			<div className='footer__social'>
				<h4 className='footer__heading'>Keep In Touch</h4>
				<ul className='footer__social-links'>
					<li className='footer__social-item'>
						<a 
							className='footer__link-item' 
							target='_blank'
							href='https://github.com/Zylashro' 
							rel='noopener noreferrer'
						>
							<FaGithub alt='GitHub Link' />
						</a>
					</li>
					<li className='footer__social-item'>
						<a 
							className='footer__link-item'
							target='_blank'
							href='https://www.linkedin.com/in/dominik-jug-3aa2971a0/' 
							rel='noopener noreferrer'
						>
							<FaLinkedin alt='LinkedIn Link' />
						</a>
					</li>
				</ul>
			</div>
			<div>
				<p className='footer__copyright'>
					Copyright ©{new Date().getFullYear()}{` `}
					<span>
						<a href='/'>Task Meister</a>
					</span>
					. All rights reserved.
				</p>
			</div>
		</footer>
	);
};

export default Footer;
