import React from 'react';
import ReactDOM from 'react-dom';
import hotColdApp from './hotCold';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

ReactDOM.render(<hotColdApp />, document.getElementById('root'));
registerServiceWorker();
