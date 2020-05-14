import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
	return (
		<footer className='footer-container'>
			<div className='footer-social'>
				<h4 className='footer-heading'>Keep In Touch</h4>
				<ul className='social-links'>
					<li className='social-item'>
						<a 
							className='link-item' 
							href='https://github.com/Zylashro' 
							rel='noopener noreferrer' 
							alt='GitHub Link'
						>
							<FaGithub aria-hidden='true' />
						</a>
					</li>
					<li className='social-item'>
						<a 
							className='link-item' 
							href='https://www.linkedin.com/in/dominik-jug-3aa2971a0/' 
							rel='noopener noreferrer' 
							alt='LinkedIn Link'
						>
							<FaLinkedin aria-hidden='true' />
						</a>
					</li>
				</ul>
			</div>
			<div>
				<p className='copyright'>
					Copyright © 2020
					<span>
						<a href='index.html'>Task Meister</a>
					</span>
					. All rights reserved.
				</p>
			</div>
		</footer>
	);
};

export default Footer;
