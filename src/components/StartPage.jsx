import React from 'react';
import "../css/App.css";
import { loadFromLocalStorage, saveToLocalStorage } from '../utils/HandleLocalStorage';
import Header from './Header';
import HowToUse from './HowToUse';

const StartPage = () => {
	const [isDark, setIsDark] = React.useState(() => (loadFromLocalStorage("isDark") ?? false));
	
	function handleTheme(theme) {
		setIsDark(theme);
		saveToLocalStorage("isDark", theme);
	}

	return (
		<div className={isDark ? "dark app-container" : "light app-container"}>
			<Header isDark={isDark} handleTheme={handleTheme} />
			<HowToUse />
		</div>
	);
};

export default StartPage;
