import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';

import ToDoApp from './ToDoApp'

import registerServiceWorker from './registerServiceWorker';


ReactDOM.render(
        <div>
            <ToDoApp />
        </div>,
    document.getElementById('root')
);
registerServiceWorker();