import React from "react";

const Container = ({ children, className }) => {
  return (
    <div className={`w-full max-w-[1600px] mx-auto 2xl:px-0 xl:px-10 lg:px-10 md:px-10 px-4 ${className} `}>
      {children}
    </div>
  );
};

export default Container;
