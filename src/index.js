import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import Store from './store';
import { Provider } from 'react-redux'

const StoreInstance = Store({
	filterlist: [],
	skills: ["NodeJS", "LoRaWAN", "VBA","Visio", "SQL databases", "Distributed Systems", "Python", "Git version control", "HTML5", "Java", "ReactJS", "REST Integrations", "CSS", "HTML5", "JQuery", "Bootstrap", "AWS Solutions", "Microcontrollers", "QT Creator", "C++", "C"]
});

ReactDOM.render(<Provider store={StoreInstance}>
        <App />
    </Provider>, document.getElementById('root'));
serviceWorker.unregister();
