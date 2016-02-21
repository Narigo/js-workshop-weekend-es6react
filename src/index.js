import ReactDOM from 'react-dom';
import GroupedKatas from './grouped-katas.js';
import {KATAS_URL} from './config';

import React from 'react';

class Page extends React.Component {
  render() {
    const groupNames = Object.keys(this.props.katas.groups);
    return (
      <div>
        <h1>ES6 Katas</h1>
        {groupNames.map(name => <h2>{name}</h2>)}
      </div>
    );
  }
}

new GroupedKatas()
  .load(KATAS_URL)
  .then((groupedKatas) => {
    ReactDOM.render(<Page katas={groupedKatas}/>, document.getElementById('app'));
  });
