import React from 'react';

const Header = () => {
	return (
		<header className="header-background">
			<div className="top-bar-container">
				<ul className="top-bar">
					<li className="li-item li-link first-item start-app">
						Create new
					</li>
					<li className="li-item theme-changer theme-icon">
						Change theme
					</li>
				</ul>
			</div>
			<div className="intro-panel">
				<img src="#" alt="#" className="panel-img" />
				<h1 className="panel-heading">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit.
				</h1>
				<p className="panel-text">
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