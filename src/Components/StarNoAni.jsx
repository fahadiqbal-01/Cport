import React from "react";

const StarNoAni = ({ className, innerFill, outerFill }) => {
  return (
    <div className={`w-[700px] pointer-events-none select-none ${className} `}>
      <svg
        className=" p-0 m-0"
        viewBox="0 0 200 200"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g fill={outerFill} className=" pointer-events-auto ">
          <path
            className=" "
            d="M100,50 
             C115,30 135,30 140,50 
             C165,50 170,75 155,90 
             C175,105 165,130 145,125 
             C150,150 120,160 100,145 
             C80,160 50,150 55,125 
             C35,130 25,105 45,90 
             C30,75 35,50 60,50 
             C65,30 85,30 100,50
             Z"
          />
        </g>
        <circle cx="100" cy="100" r="20" fill={innerFill} />
      </svg>
    </div>
  );
};

export default StarNoAni;
