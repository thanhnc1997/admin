import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route, useHistory } from 'react-router-dom';

function Login() {
  const history = useHistory();
  const [inputValue, setInputValue] = useState({
    phone_number: '',
    password: ''
  });
  const [isLogin, setIsLogin] = useState(false);

  function handleChange(e) {
    const value = e.target.value;
    setInputValue({
      ...inputValue,
      [e.target.name]: value
    });
  }
  function handleLogin() {
    if (inputValue.phone_number === '0987654321' && inputValue.password === '123456') {
      setIsLogin(!isLogin);
      history.push('/');
    }
  }
  return (
    <div className="login">
      <form>
        <div className="form-group mb-10">
          <input
            className="input"
            type="text"
            name="phone_number"
            value={inputValue.phone_number}
            placeholder="Số điện thoại"
            onChange={handleChange}
          />
        </div>
        <div className="form-group mb-20">
          <input
            className="input"
            type="password"
            name="password"
            value={inputValue.password}
            placeholder="Mật khẩu"
            onChange={handleChange}
          />
        </div>
        <button
          className="btn"
          type="button"
          onClick={() => handleLogin()}
        >
          Đăng nhập
                  </button>
      </form>
    </div>
  );

}

export default Login;