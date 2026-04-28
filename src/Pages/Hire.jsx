import React, { useEffect } from "react";
import HireMeNow from "../Components/HireMeNow";

const Hire = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main>
      <HireMeNow />
    </main>
  );
};

export default Hire;
