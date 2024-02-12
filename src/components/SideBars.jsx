import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { BsGrid1X2Fill, BsFillArchiveFill, BsListCheck, BsChat, BsWallet, BsGearFill, BsArrowLeft } from 'react-icons/bs'; // Importing icons from react-icons
import './sidebar.scss';

function Sidebar() {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {isOpen && (
        <aside id="sidebar">
          <div className='sidebar-title'>
            <div className='sidebar-brand'>
              <BsFillArchiveFill className='icon_header' /> SHOP
            </div>
            <button className="close-button" onClick={toggleSidebar}><BsArrowLeft className='icon' /></button>
          </div>

          <ul className='sidebar-list'>
            <li className='sidebar-list-item'>
              <NavLink exact to="/dashboard" activeClassName="active">
                <BsGrid1X2Fill className='icon' /> Dashboard
              </NavLink>
            </li>
            <li className='sidebar-list-item'>
              <NavLink to="/store" activeClassName="active">
                <BsFillArchiveFill className='icon' /> Store
              </NavLink>
            </li>
            <li className='sidebar-list-item'>
              <NavLink to="/orders" activeClassName="active">
                <BsListCheck className='icon' /> Orders
              </NavLink>
            </li>
            <li className='sidebar-list-item'>
              <NavLink to="/chats" activeClassName="active">
                <BsChat className='icon' /> Chats
              </NavLink>
            </li>
            <li className='sidebar-list-item'>
              <NavLink to="/wallet" activeClassName="active">
                <BsWallet className='icon' /> Wallet
              </NavLink>
            </li>
            <li className='sidebar-list-item'>
              <NavLink to="/settings" activeClassName="active">
                <BsGearFill className='icon' /> Settings
              </NavLink>
            </li>
          </ul>
        </aside>
      )}

      {!isOpen && (
        <button className="open-button" onClick={toggleSidebar}>
          &#8801; 
        </button>
      )}
    </>
  );
}

export default Sidebar;
