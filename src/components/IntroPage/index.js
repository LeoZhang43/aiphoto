import React, { useState } from 'react';  
import { ThemeProvider } from '../Context/ThemeProvider';  
import IntroContent from './IntroContent';

function IntroPage() {  
  return (  
    <ThemeProvider>  
      <IntroContent />   
    </ThemeProvider>  
  );
}  

export default IntroPage;