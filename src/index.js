import React from 'react';
import ReactDOM from 'react-dom';
import GroupedKatas from './grouped-katas';
import KataGroupsComponent from './component/kata-groups';
import {KATAS_URL} from './config';

class Page extends React.Component {
  render() {
    const groupNames = Object.keys(this.props.katas.groups);
    return (
      <div>
        <h1>ES6 Katas</h1>
        <KataGroupsComponent groupNames={groupNames} />
      </div>
    );
  }
}

new GroupedKatas()
  .load(KATAS_URL)
  .then((groupedKatas) => {
    ReactDOM.render(<Page katas={groupedKatas}/>, document.getElementById('app'));
  });
