import React from 'react';  
import { ThemeProvider } from '../Context/ThemeProvider';  
import MainContent from './MainContent';

function MainPage() {  
  return (  
    <ThemeProvider>  
      <MainContent />   
    </ThemeProvider>  
  );
}  

export default MainPage;