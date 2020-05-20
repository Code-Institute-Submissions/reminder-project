import React from 'react';
import '../App.css';
import { loadFromLocalStorage, saveToLocalStorage } from '../utils/HandleLocalStorage';
import Header from './Header';
import HowToUse from './HowToUse';
import Footer from './Footer';
import RemindApp from './remindApp/RemindApp';

const StartPage = () => {
	const [isDark, setIsDark] = React.useState(() => (loadFromLocalStorage('isDark') ?? false));
	const [isHidden, setIsHidden] = React.useState(() => (loadFromLocalStorage('isHidden') ?? false));
	const [formActive, setFormActive] = React.useState(false);

	function handleVisibility(visible) {
		setIsHidden(visible);
		saveToLocalStorage('isHidden', visible);
		window.scrollTo(0, 0);
	}

	function handleTheme(theme) {
		setIsDark(theme);
		saveToLocalStorage('isDark', theme);
	}

	return (
		<div className={isDark ? 'dark app-container' : 'light app-container'}>
			<Header isDark={isDark} handleTheme={handleTheme} isHidden={isHidden} handleForm={setFormActive} />
			<HowToUse handleVisibility={handleVisibility} isHidden={isHidden} />
			<RemindApp formActive={formActive} handleForm={setFormActive} />
			<Footer />
		</div>
	);
};

export default StartPage;
