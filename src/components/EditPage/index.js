import React, { useState } from 'react';  
import { ThemeProvider } from '../Context/ThemeProvider';  
import ChangeNumber from './ChangeNumber';

function EditPage() {  
  return (  
    <ThemeProvider>  
      <ChangeNumber />   
    </ThemeProvider>  
  );
}  

export default EditPage;