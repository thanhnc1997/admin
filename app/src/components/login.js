import React from 'react';

function Login() {
  return (
    <div className="login">
      <form>
        <div className="form-group mb-10">
          <input
            className="input"
            type="text"
            placeholder="Số điện thoại"
          />
        </div>
        <div className="form-group mb-20">
          <input
            className="input"
            type="password"
            placeholder="Mật khẩu"
          />
        </div>
        <button className="btn">Đăng nhập</button>
      </form>
    </div>
  );
}

export default Login;