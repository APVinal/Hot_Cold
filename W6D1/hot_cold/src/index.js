import React from 'react';
import ReactDOM from 'react-dom';
import HotCold_Board from './components/hotCold_Board';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

ReactDOM.render(<HotCold_Board />, document.getElementById('root'));
registerServiceWorker();
