import React, { createContext, useContext } from 'react';  
  
// 创建一个Context对象  
const ThemeContext = createContext();  
  
// 自定义Hook来简化Context的使用  
const useTheme = () => useContext(ThemeContext);  
  
export { ThemeContext, useTheme };