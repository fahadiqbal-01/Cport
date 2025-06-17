import React from "react";
import Marquee from "react-fast-marquee";

const LeftSlide = () => {
  return (
    <Marquee
      gradient={false}
      speed={50}
      pauseOnHover={false}
      loop={0} // 0 = infinite loop
    >
      <div style={slideStyle}>
        <img className=" rounded-2xl " src="/porsche.png" alt="" />
      </div>
      <div style={slideStyle}>
        <img className=" rounded-2xl " src="/Maverick.png" alt="" />
      </div>
      <div style={slideStyle}>
        <img className=" rounded-2xl " src="" alt="" />
      </div>
      <div style={slideStyle}>
        <img className=" rounded-2xl " src="" alt="" />
      </div>
      <div style={slideStyle}>
        <img className=" rounded-2xl " src="" alt="" />
      </div>
      <div style={slideStyle}>
        <img className=" rounded-2xl " src="" alt="" />
      </div>
      <div style={slideStyle}>
        <img className=" rounded-2xl " src="" alt="" />
      </div>
      <div style={slideStyle}>
        <img className=" rounded-2xl " src="" alt="" />
      </div>
    </Marquee>
  );
};

const slideStyle = {
  maxWidth: "300px",
  margin: "60px 20px ",
  background: "transparent",
  color: "white",
  textAlignY: "start",
  willChange: "transform",
};

export default LeftSlide;
