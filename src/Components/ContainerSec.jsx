import React from "react";

const ContainerSec = ({ className, children }) => {
  return (
    <div className={`w-full max-w-[800px] mx-auto ${className} `}>
      {children}
    </div>
  );
};

export default ContainerSec;
