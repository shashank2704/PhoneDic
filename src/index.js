import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ShowSubscribers from './ShowSubscribers'
import registerServiceWorker from './registerServiceWorker';
import './common/common.css';

import AddSusbscriber from './AddSubscriber';
import PhoneDirectory from './PhoneDirectory';

ReactDOM.render(<PhoneDirectory />, document.getElementById('root'));
registerServiceWorker();





