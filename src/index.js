import ReactDOM from 'react-dom';
import GroupedKatas from './grouped-katas.js';
import {KATAS_URL} from './config';

import React from 'react';

class Page extends React.Component {
  render() {
    return (<div>{Object.keys(this.props.katas.groups)}</div>);
  }
}

new GroupedKatas()
  .load(KATAS_URL)
  .then((groupedKatas) => {
    ReactDOM.render(<Page katas={groupedKatas}/>, document.getElementById('app'));
  });
