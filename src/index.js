import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import server from '@/utils/api';

React.Component.prototype.$axios=server;

ReactDOM.render(<App />, document.getElementById('root'));
