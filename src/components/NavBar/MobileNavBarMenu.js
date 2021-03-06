import React, { Component } from 'react';
import { Menu, Sidebar } from 'semantic-ui-react';
import { NavBarMenuItemsMobile } from './NavBarMenuItems';
import onClickOutside from "react-onclickoutside";
import { HamburgerButton } from 'react-hamburger-button';

class MobileNavBarMenu extends Component {
  state = {
    visible: false,
  };

  handleButtonClick = () => this.setState({ visible: !this.state.visible });

  handleClickOutside = (event) => this.setState({ visible: false }); // used by react-onclickOutside.

  render() {
    const { visible } = this.state;
    const { updateLogoutStatus, isLoggedIn } = this.props;
    return [
      <Sidebar
        as={Menu}
        animation='overlay'
        color='blue'
        icon='labeled'
        inverted
        vertical
        visible={visible}
        width='thin'
        direction='right'
        key='sidebar-mobile'
      >
        <NavBarMenuItemsMobile
          updateLogoutStatus={updateLogoutStatus}
          isLoggedIn={isLoggedIn}
          handleButtonClick={this.handleButtonClick}
        />
      </Sidebar>,
      <Menu.Item
        style={{cursor: 'pointer'}}
        position='right'
        key='mobile-button'
        onClick={this.handleButtonClick}
      >
        <HamburgerButton
          open={visible}
          width={18}
          height={15}
          color='white'
          onClick={() => {}}
        />
      </Menu.Item>
    ];
  }
}

export default onClickOutside(MobileNavBarMenu);