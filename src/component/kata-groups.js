import React from 'react';

export default class KataGroupsComponent extends React.Component {
  render() {
    const groups = this.props.groups;
    const groupNames = Object.keys(groups);
    const groupList = groupNames.map(name => groups[name]);
    let selected = 'Template strings';
    let selectedGroup = groups[selected];
    let selectedKata = selectedGroup.items[0];

    return (
      <div id="layout" className="content pure-g">
        <div id="nav" className="pure-u">
          <a href="#" className="nav-menu-button">Menu</a>

          <KataGroupsList groupList={groupList}/>
        </div>

        <div id="list" className="pure-u-1">
          {selectedGroup.items.map(item => <KataListItem key={item.name} name={item.name}/>)}
        </div>

        <Kata kata={selectedKata}/>

      </div>
    );
  }
}

class KataGroupsList extends React.Component {
  render() {
    return (
      <div className="nav-inner">
        <div className="pure-menu">
          <ul className="pure-menu-list">
            <li className="pure-menu-heading">Kata groups</li>
            <li className="pure-menu-item">
            </li>
            {this.props.groupList.map(group =>
              <li className="pure-menu-item" key={group.name}>
                <a href="#" className="pure-menu-link">{group.name} <span
                  className="email-count">({group.items.length})</span></a>
              </li>
            )}
          </ul>
        </div>
      </div>
    );
  }
}

class KataListItem extends React.Component {
  render() {
    /*  email-item-selected email-item-unread */
    return (
      <div className="email-item pure-g">
        <div className="pure-u-3-4">
          <h5 className="email-name">{this.props.name}</h5>
        </div>
      </div>
    );
  }
}

class Kata extends React.Component {
  render() {
    const kata = this.props.kata;

    return (
      <div id="main" className="pure-u-1">
        <div className="email-content">
          <div className="email-content-header pure-g">
            <div className="pure-u-1-2">
              <h1 className="email-content-title">{kata.groupName} - {kata.name}</h1>

              <p className="email-content-subtitle">
                {kata.description}
              </p>
            </div>

            <div className="email-content-controls pure-u-1-2">
              <a href={`http://tddbin.com/#?kata=es6/language/${kata.path}`} className="secondary-button pure-button">Open
                in TDDbin</a>
            </div>
          </div>

          <div className="email-content-body">
            <p>nothing here yet</p>
          </div>
        </div>
      </div>
    );
  }
}
