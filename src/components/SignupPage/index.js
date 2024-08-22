import React, { useState } from 'react';  
import { ThemeProvider } from '../Context/ThemeProvider';  
import SignUpContent from './SignUpContent';

function SignupPage() {  
  return (  
    <ThemeProvider>  
      <SignUpContent />   
    </ThemeProvider>  
  );
}  

export default SignupPage;