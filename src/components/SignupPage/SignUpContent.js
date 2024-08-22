import React from 'react'; 
import './style.css';
  
// 使用ThemeContext的组件  
const SignUpContent = () => { 
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
              <input className="input-form" type="text" id="username" placeholder="Email"/>
              <input className="input-form" type="password" id="password" placeholder="Password"/>
              <input className="input-form" type="password" id="password" placeholder="Repeat Password"/>
            </div>
            <button type="submit" className='login-button'>log in</button>  
          </div>
          <div className='signup-container'>
            <span className='signup-text'>Already has an account? 
              <a href="" className="signup-button"> Log in</a>
            </span>
          </div>
        </div>
      </form>  
    </div>  
  ); 
};  
  
export default SignUpContent;