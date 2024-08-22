import React from 'react'; 
import './style.css';
  
// 使用ThemeContext的组件  
const LogInContent = () => { 
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
            </div>
            <button type="submit" className='login-button'>log in</button>  
            <div className='form-third-party-login-container'>
              <div class="divider">  
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
              <a href="" className="signup-button"> Sign Up</a>
            </span>
          </div>
        </div>
      </form>  
    </div>  
  ); 
};  
  
export default LogInContent;