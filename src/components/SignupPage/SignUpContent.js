import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import './style.css';
  
// 使用ThemeContext的组件  
const SignUpContent = () => { 
  const [account, setAccount] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const [buttonEnable, setButtonEnable] = useState(false);
  const navigate = useNavigate();
  const handleAccountChange = (event) => {  
    setAccount(event.target.value);  
    if(account && password && repeatPassword){
      setButtonEnable(true);
    }
  }; 
  const handlePasswordChange = (event) => {  
    setPassword(event.target.value); 
    if(account && password && repeatPassword){
      setButtonEnable(true);
    } 
  }; 
  const handleRepeatPasswordChange = (event) => {  
    setRepeatPassword(event.target.value); 
    if(account && password && repeatPassword){
      setButtonEnable(true);
    } 
  }; 
  const handleSubmit = (e) => {
    e.preventDefault();
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // 简单的邮箱验证正则表达式  
  
    if (!emailPattern.test(account)) {  
      alert('请输入有效的邮箱地址！');  
      setAccount('');
      setPassword('');
      setRepeatPassword('');
      setButtonEnable(false);
      return;
    }  
  
    if (password.length < 6) {  
      alert('密码长度不能少于6位！');   
      setAccount('');
      setPassword('');
      setRepeatPassword('');
      setButtonEnable(false);
      return;
    }  
    navigate('/intro');
  }
  return (  
    <div className="login-container">  
      <form className="login-form">  
        <div className='form-container'>
          <div className='title-container'>
            <div className='title'>
              <img src="/assets/images/titleIcon.png"  className='title-icon'></img>
              <img src="/assets/images/kurage.png"  className='title-text'></img>
            </div>
          </div>
          <div className='interactive-container'>
            <div className='form-login-input'>
              <input 
                value={account}
                onChange={handleAccountChange}
                className="input-form" 
                type="text" 
                id="username" 
                placeholder="Email"
              />
              <input 
                value={password}
                onChange={handlePasswordChange}
                className="input-form" 
                type="password" 
                id="password" 
                placeholder="Password"
              />
              <input 
                value={repeatPassword}
                onChange={handleRepeatPasswordChange}
                className="input-form" 
                type="password" 
                id="password" 
                placeholder="Repeat Password"
              />
            </div>
            <button 
              type="submit" 
              className={`login-button ${buttonEnable ? 'active' : 'disable'}`}
              disabled={!buttonEnable}
              onClick={handleSubmit}
            >sign up</button>  
          </div>
          <div className='signup-container'>
            <span className='signup-text'>Already has an account? 
              <a href="/" className="signup-button"> Log in</a>
            </span>
          </div>
        </div>
      </form>  
    </div>  
  ); 
};  
  
export default SignUpContent;