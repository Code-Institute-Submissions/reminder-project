export function loadFromLocalStorage(name) {
	try {
		const serializedState = localStorage.getItem(name);
		if (serializedState === null) {
			return undefined;
		}
		return JSON.parse(serializedState);
	} catch (err) {
		return undefined;
	}
}

export function saveToLocalStorage(name, value) {
	try {
		const serializedState = JSON.stringify(value);
		localStorage.setItem(name, serializedState);
	} catch (err) {
		return undefined;
	}
}
