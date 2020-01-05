import React from 'react';

import Toggle from './toggle';
import useDarkMode from 'use-dark-mode';

import Moon from "../../content/assets/_ionicons_svg_ios-moon.svg";
import Sunny from "../../content/assets/_ionicons_svg_ios-sunny.svg";

const DarkModeToggle = ({ ph }) => {
  const darkMode = useDarkMode(false);

  return (
    <div className="dark-mode-toggle">
      
      {darkMode.value ? <Sunny onClick={darkMode.disable} style={{height: ph, fill: "#565d64"}} /> : <Moon onClick={darkMode.enable} style={{height: ph,}} />}

      
    </div>
  );
};

export default DarkModeToggle;
