import React from "react";
import Marquee from 'react-fast-marquee';
import '/src/App.jsx';
import img1 from '../assets/scrimg/img1.png';
import img2 from '../assets/scrimg/img2.png';
import img3 from '../assets/scrimg/img3.png';
import img4 from '../assets/scrimg/img4.png';
import img5 from '../assets/scrimg/img5.png';
import img6 from '../assets/scrimg/img6.png';
import img7 from '../assets/scrimg/img7.png';
import img8 from '../assets/scrimg/img8.png';
import img9 from '../assets/scrimg/img9.png';
import img10 from '../assets/scrimg/img10.png';

function ImageScr(){
    return(
        <div className="con">
        <Marquee  direction="left" speed={100} delay={5}>
        <div id="marq">
        <div className="pic-con">
          <div className=" pic">
            <img className="img" src={img1} alt="" />
          </div>
          <div className=" pic">
            <img className="img" src={img2} alt="" />
          </div>
          <div className=" pic">
            <img className="img" src={img3} alt="" />
          </div>
          <div className=" pic">
            <img className="img" src={img4} alt="" />
          </div>
          <div className="pic">
            <img className="img" src={img5} alt="" />
          </div>
          <div className=" pic">
            <img className="img" src={img6} alt="" />
          </div>
          <div className=" pic">
            <img className="img" src={img7} alt="" />
          </div>
          <div className=" pic">
            <img className="img" src={img8} alt="" />
          </div>
          <div className=" pic">
            <img className="img" src={img9} alt="" />
          </div>
          <div className=" pic">
            <img className="img" src={img10} alt="" />
          </div>
          </div>
      </div>
        </Marquee>
      
      </div>
    )
};

export default ImageScr;