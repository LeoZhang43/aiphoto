import React from 'react';  
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';  
import LoginPage from './components/LoginPage'; 
import EditPage from './components/EditPage.js';
  
function App() {  
  return (  
    <Router>  
        <Routes>  
          <Route path="/login" element={<LoginPage />} />  
          <Route path="/edit" element={<EditPage />} />
        </Routes>  
    </Router>  
  );  
}  
  
export default App;