import React from 'react';

//import Toggle from './toggle';
import useDarkMode from 'use-dark-mode';

import Moon from "../../content/assets/dark.svg";
import Sunny from "../../content/assets/_ionicons_svg_ios-sunny.svg";

export var value = null;

export const DarkModeToggle = ({ ph, handleDark }) => {
  const darkMode = useDarkMode(false);

  value = darkMode.value;

  return (
    <div className="dark-mode-toggle" style={{margin: 0}}>
      
      {darkMode.value ? 
      <div onClick={() => {
        darkMode.disable();
        handleDark(false);
      }}>
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
            height: '16px',
            fill: "#f47920",
            right: '0px',
            width: '18px',
            top: '-1px',
            position: 'absolute'
          }} />
        </span>
      </div>
      : 
      <div onClick={() => {
        darkMode.enable();
        handleDark(true);
      }}>
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
            height: '16px',
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
