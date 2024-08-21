import React, { useState } from 'react';  
import { ThemeProvider } from '../Context/ThemeProvider';  
import LogInContent from './LogInContent';

function LoginPage() {  
  return (  
    <ThemeProvider>  
      <LogInContent />   
    </ThemeProvider>  
  );
}  

export default LoginPage;