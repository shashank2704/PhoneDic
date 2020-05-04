import React from 'react';
import ReactDOM from 'react-dom';
import ShowSubscribers from './ShowSubscribers'
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import './common/common.css';
import AddSubscriber from './AddSubscriber';

import PhoneDirectory from './PhoneDirectory';

ReactDOM.render(<PhoneDirectory />, document.getElementById('root'));
registerServiceWorker();