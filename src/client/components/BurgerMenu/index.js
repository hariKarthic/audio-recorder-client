import React, { Component } from 'react';
import { push as Menu} from 'react-burger-menu';
import '../../assets/styles/menu.css';
import {browserHistory} from 'react-router';
import UserProfile from './../../containers/UserProfile';

class BurgerMenu extends Component {
  constructor(props) {
    super(props);
    
    
    this.state = {
      isMenuOpen: false,
    };
    
    this.onLogoutHandler = this.onLogoutHandler.bind(this);
    this.onStateChange = this.onStateChange.bind(this);
  }
  getMenuOptions(){
    return [
      {'id':'dashboard', 'label':'Dashboard', 'link':'/dashboard'},
      {'id':'mystories', 'label':'My Stories', 'link':'/my-stories'},
      {'id':'recordstory', 'label':'Record a story', 'link':'/record-audio'},

    ]
  }
  closeMenu(){
    this.props.toggleMenu(false);
  }
  onSelectMenu(evt, menuLink, menuId){
    evt.preventDefault();

    this.closeMenu();

    browserHistory.push(menuLink);


  }
  onStateChange(state){
    const {isOpen} = this.props.menuState;
    if(isOpen !== state.isOpen){
      this.props.toggleMenu(!isOpen);
    }

  }
  onLogoutHandler(evt){
    evt.preventDefault();
    this.props.logoutUser();
    this.closeMenu();
  }
  render(){
    const {isOpen, activePage} = this.props.menuState;
    const {isLoggedIn} = this.props.authInfo;
    return (
      <Menu onStateChange={this.onStateChange} customBurgerIcon={false} isOpen={isOpen} pageWrapId={'page-wrap'} outerContainerId={'outer-container'} className="burgerMenu">
        {isLoggedIn && <div className="block onlyBottomBorder onlyLeftPad pad24 border_95 profile-header">
          <UserProfile/>
        </div>}

        {
          this.getMenuOptions().map((menuItem, id)=>{
            return (
              <a key={`menu-${id}`} className={`menu-item block border_33 onlyBottomBorder bold  color_FFF fontSize_5 lineHeight36 pad20 noSidePad ${menuItem.link === activePage ? 'selected' : ''}`} href="javascript:void(0);" onClick={(evt)=>{
                this.onSelectMenu(evt, menuItem.link, menuItem.id);
              }}>
                <span className="onlyLeftPad pad24">{menuItem.label}</span>
              </a>
            );
          })
        }
        <a  className="menu-item block border_33 onlyBottomBorder bold  color_FFF fontSize_5 lineHeight36 pad20 noSidePad" href="javascript:void(0);" onClick={this.onLogoutHandler}>
          <span className="onlyLeftPad pad24">Logout</span>
        </a>

      </Menu>
    );
  }

}

export default BurgerMenu;