import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';

import ToDo from './ToDo'

import registerServiceWorker from './registerServiceWorker';


ReactDOM.render(
        <div>
            <ToDo />
        </div>,
    document.getElementById('root')
);
registerServiceWorker();