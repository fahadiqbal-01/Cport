import React from "react";

const ContainerSec = ({ className, children }) => {
  return (
    <div className={`w-full max-w-[800px] mx-auto 2xl:px-0 xl:px-0 lg:px-0 md:px-10 px-6 ${className} `}>
      {children}
    </div>
  );
};

export default ContainerSec;
