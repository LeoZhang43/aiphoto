import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import './style.css';
  
// 使用ThemeContext的组件  
const LogInContent = () => { 
  const [account, setAccount] = useState('');
  const [password, setPassword] = useState('');
  const [buttonEnable, setButtonEnable] = useState(false);
  const navigate = useNavigate();
  const handleAccountChange = (event) => {  
    setAccount(event.target.value);  
    if(account && password){
      setButtonEnable(true);
    }
  }; 
  const handlePasswordChange = (event) => {  
    setPassword(event.target.value); 
    if(account && password){
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
      setButtonEnable(false);
      return;
    }  
  
    if (password.length < 6) {  
      alert('密码长度不能少于6位！');   
      setAccount('');
      setPassword('');
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
                className="input-form" 
                value={account}
                type="text" 
                id="username" 
                placeholder="Email"
                onChange={handleAccountChange}
              />
              <input 
                className="input-form" 
                value={password}
                type="password" 
                id="password" 
                placeholder="Password"
                onChange={handlePasswordChange}
              />
            </div>
            <button 
              type="submit" 
              className={`login-button ${buttonEnable ? 'active' : 'disable'}`}
              disabled={!buttonEnable}
              onClick={handleSubmit}
            >log in</button>  
            <div className='form-third-party-login-container'>
              <div className="divider">  
                <span className='loginText'>OR login with</span>  
              </div>
              <div className='login-footer'>
                <div className="form-third-party-login">  
                  <img src="/assets/images/insIcon.png" className='third-party-icon'></img>
                  <img src="/assets/images/facebookIcon.png"  className='third-party-icon'></img>
                  <img src="/assets/images/GoogleIcon.png"  className='third-party-icon'></img>
                </div>
              </div>
            </div>
          </div>
          <div className='signup-container'>
            <span className='signup-text'>Don't have a account? 
              <a href="/signup" className="signup-button"> Sign Up</a>
            </span>
          </div>
        </div>
      </form>  
    </div>  
  ); 
};  
  
export default LogInContent;