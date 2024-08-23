import React from 'react';  
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';  
import LoginPage from './components/LoginPage'; 
import EditPage from './components/EditPage';
import SignupPage from './components/SignupPage';
import IntroPage from './components/IntroPage';
import MainPage from './components/Mainpage';
  
function App() {  
  return (  
    <Router>  
        <Routes>  
          <Route path="/" element={<LoginPage />} />  
          <Route path="/signup" element={<SignupPage />} /> 
          <Route path="/intro" element={<IntroPage />} />
          <Route path="/main" element={<MainPage />} />
        </Routes>  
    </Router>  
  );  
}  
  
export default App;