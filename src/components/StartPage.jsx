import React from 'react';
import "../css/App.css";
import { loadFromLocalStorage, saveToLocalStorage } from '../utils/HandleLocalStorage';
import Header from './Header';
import HowToUse from './HowToUse';
import Footer from './Footer';
import RemindApp from './remindApp/RemindApp';

const StartPage = () => {
	const [isDark, setIsDark] = React.useState(() => (loadFromLocalStorage("isDark") ?? false));
	const [formActive, setFormActive] = React.useState(false);

	function handleTheme(theme) {
		setIsDark(theme);
		saveToLocalStorage("isDark", theme);
	}

	return (
		<div className={isDark ? "dark app-container" : "light app-container"}>
			<Header isDark={isDark} handleTheme={handleTheme} handleForm={setFormActive} />
			<RemindApp formActive={formActive} handleForm={setFormActive} />
			<HowToUse />
			<Footer />
		</div>
	);
};

export default StartPage;
