import React, { useState } from 'react';   
import { ThemeContext } from './ThemeContext';  
  
// ThemeProvider组件  
export const ThemeProvider = ({ children }) => {  
  // 使用useState Hook来管理主题状态  
  const [theme, setTheme] = useState('light');  
  const [number, setNumber] = useState(0);  
  // 提供一个方法来更新主题  
  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');  
  };  
  const toggleNumber = () => {
    setNumber(number + 1);  
  }; 
  
  // 使用Context.Provider来包裹子组件，并传递主题和切换主题的方法  
  return (  
    <ThemeContext.Provider value={{ theme, number, toggleTheme, toggleNumber }}>  
      {children}  
    </ThemeContext.Provider>  
  );  
};