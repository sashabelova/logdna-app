import React from 'react';

const preload = {
  data: [
    {
      id: '001',
      name: '⌘1',
      active: true
    },
    {
      id: '002',
      name: '⌘2',
      active: false
    },
    {
      id: '003',
      name: '⌘3',
      active: false
    },
    {
      id: '004',
      name: '⌘4',
      active: false
    }
  ]
};

const SidebarItems = props => {
  return (
    <ul>
      {props.items.data.map(item => (
        <React.Fragment key={item.id}>
          <li className={item.active ? 'active' : ''}>{item.name}</li>
        </React.Fragment>
      ))}
    </ul>
  );
};

const Sidebar = () => (
  <nav>
    <SidebarItems items={preload} />
  </nav>
);

export default Sidebar;
