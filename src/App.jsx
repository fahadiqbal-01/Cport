import { useState } from "react";
import Home from "./Pages/Home";
import RootLayout from "./Layouts/RootLayout";
import About from "./Pages/About";
import Explore from "./Pages/Explore";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import HomeMain from "./subPages/HomeMain";
import ChatWithME from "./Pages/ChatWithME";

function App() {
  const [count, setCount] = useState(0);

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route index element={<HomeMain />} />
        <Route path="/ChatWithME" element={<ChatWithME />} />
        <Route path="/Explore" element={<Explore />} />
      </Route>
    )
  );

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
