import React from 'react';  
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';  
import LoginPage from './components/LoginPage'; 
import EditPage from './components/EditPage';
import SignupPage from './components/SignupPage';
import IntroPage from './components/IntroPage';
  
function App() {  
  return (  
    <Router>  
        <Routes>  
          <Route path="/login" element={<LoginPage />} />  
          <Route path="/signup" element={<SignupPage />} /> 
          <Route path="/edit" element={<EditPage />} />
          <Route path="/intro" element={<IntroPage />} />
        </Routes>  
    </Router>  
  );  
}  
  
export default App;