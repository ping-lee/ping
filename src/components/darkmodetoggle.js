import React from 'react';

import Toggle from './toggle';
import useDarkMode from 'use-dark-mode';

import Moon from "../../content/assets/_ionicons_svg_ios-moon.svg";
import Sunny from "../../content/assets/_ionicons_svg_ios-sunny.svg";

const DarkModeToggle = () => {
  const darkMode = useDarkMode(false);

  console.log(darkMode.value)

  return (
    <div className="dark-mode-toggle">
      
      {darkMode.value ? <Sunny onClick={darkMode.disable} style={{height: "25px", fill: "#565d64"}} /> : <Moon onClick={darkMode.enable} style={{height: "25px"}} />}

      
    </div>
  );
};

export default DarkModeToggle;
