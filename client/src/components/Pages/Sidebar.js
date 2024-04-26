import React from 'react';
import {Link} from 'react-router-dom';
import { slide as Menu } from 'react-burger-menu';
import './styles/Sidebar.css'
const Sidebar=() => {
  return (
    
    <Menu>
      <Link className="menu-item" to="/AdminPanel">
        Home
      </Link>
      <Link className="menu-item" to="/Client">
        Clients
      </Link>
      <Link className="menu-item" to="/AddEditClient">
        ADD Client
      </Link>
      <Link className="menu-item" to="/Update/:id">
        UPDATE Client
      </Link>
      <Link className="menu-item" to="/Airplane">
        Airplane
      </Link>
      <Link className="menu-item" to="/">
        Client Home
      </Link>
    </Menu>
    
  );
};

export default Sidebar;