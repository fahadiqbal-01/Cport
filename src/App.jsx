import { useEffect, useState } from "react";
import RootLayout from "./Layouts/RootLayout";
import Explore from "./Pages/Explore";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
  Routes,
} from "react-router-dom";
import Home from "./Pages/Home";
import "./App.css";
import Message from "./Components/Message";

function App() {
  const [count, setCount] = useState(0);

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path="/Explore" element={<Explore />} />
      </Route>
    )
  );

  // const [mousePosition, setMousePosition] = useState({
  //   x: 0,
  //   y: 0,
  // });

  // useEffect(() => {
  //   const mouseMove = (e) => {
  //     setMousePosition({
  //       x: e.clientX,
  //       y: e.clientY,
  //     });
  //     console.log(`X: ${e.clientX} | Y: ${e.clientY}`);
  //   };
  //   window.addEventListener("mousemove", mouseMove);
  //   return () => {
  //     window.removeEventListener("mousemove", mouseMove);
  //   };
  // }, []);

  return (
    <>
      {/* <div
        style={{
          left: mousePosition.x - 10,
          top: mousePosition.y - 10,
          position: "fixed",
          zIndex: 9999,
          pointerEvents: "none",
        }}
        className="h-[20px] w-[20px] rounded-full bg-black opacity-[70%] cursor fixed left-0 top-0 z-50 "
      >
     
      </div> */}
      <RouterProvider router={router} />
    </>
  );
}

export default App;
