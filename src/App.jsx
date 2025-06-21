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

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
