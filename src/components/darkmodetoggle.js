import React from 'react';

import Toggle from './toggle';
import useDarkMode from 'use-dark-mode';

import Moon from "../../content/assets/_ionicons_svg_ios-moon.svg";
import Sunny from "../../content/assets/_ionicons_svg_ios-sunny.svg";

const svgstyle = {
  position: 'absolute',
  top: '-1px',
  right: '-25px',
  width: '18px',
  hegiht: 'auto'
}

const DarkModeToggle = ({ ph }) => {
  const darkMode = useDarkMode(false);

  return (
    <div className="dark-mode-toggle" style={{margin: 0}}>
      
      {darkMode.value ? 
      <div onClick={darkMode.disable}>
        <span style={{
          display: 'inline-block',
          borderBottom: '1px solid rgba(32,33,33,0.5)',
          lineHeight: 'normal',
          cursor: 'pointer',
          transition: 'all 0.3s ease-in-out',
        }}><font color='#202121'>白天</font></span>
        <span style={{
          position: 'relative',
          marginLeft: '30px'
        }}>
          <Sunny style={{
            height: '19px',
            fill: "#f47920",
            right: '0px',
            width: '18px',
            top: '-1px',
            position: 'absolute'
          }} />
        </span>
      </div>
      : 
      <div onClick={darkMode.enable}>
        <span style={{
          display: 'inline-block',
          borderBottom: '1px solid rgba(32,33,33,0.5)',
          lineHeight: 'normal',
          cursor: 'pointer',
          transition: 'all 0.3s ease-in-out',
        }}><font color='#202121'>夜晚</font></span>
        <span style={{
          position: 'relative',
          marginLeft: '30px'
        }}>
          <Moon style={{
            height: '19px',
            fill: "#121a2a",
            right: '0px',
            width: '18px',
            top: '-1px',
            position: 'absolute'
          }} />
        </span>
      </div>
      }

      
    </div>
  );
};

export default DarkModeToggle;
