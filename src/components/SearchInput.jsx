/* eslint-disable react/prop-types */
import { BsSearch } from "react-icons/bs";

const SearchInput = ({ search, setSearch, action }) => {
  return (
    <div className=" flex items-center mt-8">
      <input
        type="text"
        autoComplete="off"
        placeholder="Search high-resoltuion images"
        className="w-80 lg:w-96 px-4 py-1 text-sm bg-gray-300 outline-none focus:ring-0 focus:shadow-none hover:bg-white transition-all duration-500 border-none rounded-l h-12  text-slate-800 "
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button
        className="py-[16px] px-[20px] bg-gray-700 rounded rounded-l-none text-sm transition-all duration-150"
        onClick={action}
      >
        <BsSearch className="text-themecolor font-bold h-4 w-4" />
      </button>
    </div>
  );
};

export default SearchInput;
