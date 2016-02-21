import ReactDOM from 'react-dom';
import GroupedKatas from './grouped-katas.js';
import {KATAS_URL} from './config';

import React from 'react';

class Page extends React.Component {
  render() {
    return (<div>Here is some react!</div>);
  }
}

new GroupedKatas()
  .load(KATAS_URL)
  .then(() => {
    ReactDOM.render(<Page/>, document.getElementById('app'));
  });
