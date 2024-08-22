import React from 'react';  
import { useTheme } from '../Context/ThemeContext';  
  
// 使用ThemeContext的组件  
const ChangeNumber = () => {  
  const { number, toggleNumber } = useTheme();  
  return (  
    <div>  
      <p>{number}</p> 
      <button onClick={toggleNumber}>点击+1</button>
    </div>  
  );  
};  
  
export default ChangeNumber;