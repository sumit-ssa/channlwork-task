import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/Home";
import Search from "./pages/Search";
import Hero from "./components/Hero";
import Favorites from "./pages/Favorites";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />}>
          <Route path="" element={<Hero />} />
          <Route path="search" element={<Search />} />
          <Route path="favorites" element={<Favorites />} />
        </Route>
      </Routes>
      <ToastContainer />
    </>
  );
}

export default App;
