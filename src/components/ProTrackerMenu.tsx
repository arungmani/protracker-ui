import React, { Component } from 'react';
import { Menu } from 'semantic-ui-react';
import { Link, useLocation } from 'react-router-dom';

interface State {
  activeItem: string;
}

class ProTrackerMenu extends Component<{}, State> {
  state: State = { activeItem: '' };

  handleItemClick = (e: any, data: any): void =>
    this.setState({ activeItem: data.name });

  render() {
    const { activeItem } = this.state;

    return (
      <div>
        <Menu pointing secondary>
          <Menu.Item
            as={Link}
            to="/projects/all"
            name='Projects'
            active={activeItem === 'Projects'}
            onClick={(e, data) => this.handleItemClick(e, data)}
          />

          <Menu.Item
            as={Link}
            to="/projects/add"
            name='AddProject'
            active={activeItem === 'AddProject'}
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