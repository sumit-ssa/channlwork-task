import logo from "../assets/Logo.webp";
import { Link, useNavigate } from "react-router-dom";
import { FaHeart } from "react-icons/fa";

const Navbar = () => {
  const navigate = useNavigate();

  const goToFavorites = () => {
    navigate("/favorites");
  };

  return (
    <nav className="relative flex w-full items-center justify-between py-2 shadow-sm bg-gray-700  ">
      <div className="flex w-full flex-wrap items-center justify-between px-10 max-w-[1600px] mx-auto">
        <Link to={""} className="w-16">
          <img src={logo} className="w-full cursor-pointer" />
        </Link>
        <div className="bg-white px-3 py-1 rounded border cursor-pointer hover:scale-95 transition-all duration-500">
          <div
            className="flex items-center justify-center gap-2"
            onClick={goToFavorites}
          >
            <FaHeart className="fill-red-400" />
            <span>Favorites</span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
