import { createBrowserHistory, createHashHistory } from 'history';

var history = () => {
	if (window.cordova) {
		return createHashHistory();
	} else {
		return createBrowserHistory();
	}
};

export default history();
