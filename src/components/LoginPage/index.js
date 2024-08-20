import React, { useState } from 'react';  
import { ThemeProvider } from '../Context/ThemeProvider';  
import ChangeColor from './ChangeColor';

function LoginPage() {  
  return (  
    <ThemeProvider>  
      <ChangeColor />   
    </ThemeProvider>  
  );
}  

export default LoginPage;