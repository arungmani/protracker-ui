import React, { Component } from 'react';
import { Menu, Segment } from 'semantic-ui-react';

interface State {
  activeItem: string;
}

interface MenuItemProps {
  name: string;
}

class ProTrackerMenu extends Component<{}, State> {
  state: State = { activeItem: 'Projects' };

  handleItemClick = (e: any, data: any): void =>
    this.setState({ activeItem: data.name });

  render() {
    const { activeItem } = this.state;

    return (
      <div>
        <Menu pointing secondary>
          <Menu.Item
            name='Projects'
            active={activeItem === 'Projects'}
            onClick={(e, data) => this.handleItemClick(e, data)}
          />
          <Menu.Item
            name='Employees'
            active={activeItem === 'Employees'}
            onClick={(e, data) => this.handleItemClick(e, data)}
          />
          <Menu.Item
            name='Administration'
            active={activeItem === 'Administration'}
            onClick={(e, data) => this.handleItemClick(e, data)}
          />
          <Menu.Menu position='right'>
            <Menu.Item
              name='logout'
              active={activeItem === 'logout'}
              onClick={(e, data) => this.handleItemClick(e, data)}
            />
          </Menu.Menu>
        </Menu>
      </div>
    );
  }
}

export default ProTrackerMenu;