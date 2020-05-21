import React from 'react';
import '../App.css';
import { loadFromLocalStorage, saveToLocalStorage } from '../utils/HandleLocalStorage';
import Header from './Header';
import HowToUse from './HowToUse';
import Footer from './Footer';
import RemindApp from './remindApp/RemindApp';

const StartPage = () => {
	const [isDark, setIsDark] = React.useState(() => (loadFromLocalStorage('isDark') ?? false));

	function handleTheme(theme) {
		setIsDark(theme);
		saveToLocalStorage('isDark', theme);
	}

	return (
		<div className={isDark ? 'dark app-container' : 'light app-container'}>
			<Header isDark={isDark} handleTheme={handleTheme} />
			<HowToUse />
			<RemindApp />
			<Footer />
		</div>
	);
};

export default StartPage;
