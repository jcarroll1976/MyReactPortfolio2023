import React, { useEffect, useRef } from 'react';
import "./intro.scss";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { useTypewriter, Cursor } from 'react-simple-typewriter';

function Intro() {

  /*const [text,count] =useTypewriter({
    words: [
        "Full Stack JavaScript Developer",
        "Guy-who-loves-Coffee.tsx",
        "<ButLovesToCodeMore/>",
    ],
    loop:true,
    delaySpeed:2000,
});*/

  return (
    <div className="intro" id="intro">
        <div className="left">
          <div className="imgContainer">
            <img src="assets/Profilepic.jpg" alt="" />
          </div>
        </div>
        <div className="right">
          <div className="wrapper">
            <h2>Hi there, I'm</h2>
            <h1>Joshua Carroll</h1>
            <h3>Full Stack JavaScript Developer</h3>
          </div>
          <a href="#portfolio">
            <KeyboardArrowDownIcon className="introImg" />
          </a>
        </div>
    </div>
  )
}

export default Intro