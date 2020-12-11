import React from 'react';
import { NavLink } from 'react-router-dom';

function SideBar() {
  return (
    <nav className="sidebar">
      <NavLink activeClassName="active" to={'/products'}>Sản phẩm</NavLink>
      <NavLink activeClassName="active" to={'/customers'}>Khách hàng</NavLink>
      <NavLink activeClassName="active" to={'/orders'}>Đơn hàng</NavLink>
      <span className="logout">Đăng xuất</span>
    </nav>
  )
}

export default SideBar