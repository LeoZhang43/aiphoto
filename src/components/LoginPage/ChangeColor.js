import React from 'react';  
import { useTheme } from '../Context/ThemeContext';  
  
// 使用ThemeContext的组件  
const ChangeColor = () => {  
  const { theme, toggleTheme } = useTheme();  
  return (  
    <div style={{ backgroundColor: theme === 'light' ? '#fff' : '#333', padding: '20px' }}>  
      The theme is {theme}.  
      <button onClick={toggleTheme}>Toggle Theme</button>  
    </div>  
  );  
};  
  
export default ChangeColor;