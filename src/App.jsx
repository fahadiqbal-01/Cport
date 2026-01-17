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
import { NotFound } from "./Pages/NotFound";
import { About } from "./Pages/About";
import { ContactMSG } from "./Components/ContactMSG";
import HireMeNow from "./Components/HireMeNow";
import { ScrollSmoother, ScrollTrigger } from "gsap/all";
import gsap from "gsap";

gsap.registerPlugin(ScrollSmoother, ScrollTrigger);

function App() {
  const [count, setCount] = useState(0);

  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<RootLayout />}>
          <Route index element={<Home />} />
          <Route path="/Explore" element={<Explore />} />
          <Route path="/About" element={<About />} />
          <Route path="/ContactMSG" element={<ContactMSG />} />
          <Route path="/HIreMeNOw" element={<HireMeNow />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </>
    )
  );

  useEffect(() => {
    const smoother = ScrollSmoother.create({
      wrapper: "#smoothWrapper",
      content: "#smoothContent",
      smooth: 1,
      onUpdate: (self) => {
        // Optional: add custom logic on scroll
      },
    });

    return () => {
      smoother.kill();
    };
  }, []);

  return (
    <>
      <div id="smoothWrapper">
        <div id="smoothContent">
          <RouterProvider router={router} />
        </div>
      </div>
    </>
  );
}

export default App;
