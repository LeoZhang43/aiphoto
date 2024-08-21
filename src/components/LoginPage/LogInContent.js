import React from 'react'; 
import './style.css';
import dianliang from '../../dianliang.svg';
import xinhao from '../../xinhao.svg';
import xinhao_1 from '../../xinhao_1.svg';
import titleIcon from '../../titleIcon.png';
import kurage from '../../kurage.png';
import insIcon from '../../insIcon.png';
import facebookIcon from '../../facebookIcon.png';
import GoogleIcon from '../../GoogleIcon.png';
  
// 使用ThemeContext的组件  
const LogInContent = () => { 
  return (  
    <div className="login-container">  
      <div className='login-header'>
        <p className='login-header-text'>12:21</p>
        <div className='login-header-icon-container'>
          <img src={xinhao}  className='login-header-icon icon-xinhao'></img>
          <img src={xinhao_1}  className='login-header-icon'></img>
          <img src={dianliang}  className='login-header-icon'></img>
        </div>
      </div>
      <form className="login-form">  
        <div className='form-container'>
          <div className='title'>
            <img src={titleIcon}  className='title-icon'></img>
            <img src={kurage}  className='title-text'></img>
          </div>
          <div className='form-login-input'>
            <input className="input-form" type="text" id="username" placeholder="Email"/>
            <input className="input-form" type="password" id="password" placeholder="Password"/>
          </div>
          <button type="submit" className='login-button'>log in</button>  
          <div className='form-third-party-login-container'>
            <div class="divider">  
              <span className='loginText'>OR login with</span>  
            </div>
            <div className="form-third-party-login">  
              <img src={insIcon} className='third-party-icon'></img>
              <img src={facebookIcon}  className='third-party-icon'></img>
              <img src={GoogleIcon}  className='third-party-icon'></img>
            </div>
            <div className='signup-container'>
              <span className='signup-text'>Don't have a account? 
                <a href="" className="signup-button"> Sign Up</a>
              </span>
            </div>
          </div>
        </div>
      </form>  
    </div>  
  ); 
};  
  
export default LogInContent;