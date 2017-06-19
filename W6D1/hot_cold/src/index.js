import React from 'react';
import ReactDOM from 'react-dom';
import hotColdApp from './components/hotCold_Board';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

ReactDOM.render(<hotCold_Board />, document.getElementById('root'));
registerServiceWorker();
