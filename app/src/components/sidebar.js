import React from 'react';
import { NavLink, useHistory } from 'react-router-dom';

function SideBar() {
  const history = useHistory();
  function handleLogout() {
    history.push('/login');
  }
  return (
    <nav className="sidebar">
      <NavLink exact activeClassName="active" to="/">Trang chủ</NavLink>
      <NavLink activeClassName="active" to="/products">Sản phẩm</NavLink>
      <NavLink activeClassName="active" to="/customers">Khách hàng</NavLink>
      <NavLink activeClassName="active" to="/orders">Đơn hàng</NavLink>
      <span
        className="logout"
        onClick={handleLogout}
      >
        Đăng xuất
      </span>
    </nav>
  )
}

export default SideBar