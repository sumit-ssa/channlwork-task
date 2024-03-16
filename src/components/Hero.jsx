import { useEffect, useState } from "react";
import { getRandomImage, getSearchedImage } from "../utils/api_calls";
import { state } from "../data/data";
import Search from "./SearchInput";
import { useNavigate } from "react-router-dom";
import { useSnapshot } from "valtio";

const Hero = () => {
  const [image, setImage] = useState(null);
  const [search, setSearch] = useState("");
  const navigate = useNavigate();
  const snap = useSnapshot(state);
  const page = snap.page;

  const getImage = async () => {
    state.isLoading = true;
    try {
      let res = await getRandomImage();
      setImage(res?.data?.urls?.full);
    } catch (error) {
      console.log(error);
    }
    state.isLoading = false;
  };

  useEffect(() => {
    getImage();
  }, []);

  const getSearchResult = async () => {
    state.isLoading = true;
    try {
      state.qeury = search;
      let res = await getSearchedImage(page, search);
      state.searchResult = res?.data?.results;
      if (res?.data?.results?.length > 0) {
        navigate("/search");
      }
    } catch (error) {
      console.log(error);
    }
    state.isLoading = false;
  };

  return (
    <div className=" relative h-screen text-white overflow-hidden bg-no-repeat">
      <div className="absolute inset-0 ">
        <img
          src={
            image ||
            "https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          }
          className="object-cover object-center w-full h-full"
        />
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>

      <div className="relative z-10 flex flex-col justify-center items-center h-full text-center pb-[15vh] lg:pb-[10vh]  ">
        <h1 className="text-5xl font-bold leading-tight mb-2 flex items-center flex-col md:flex-row gap-1 ">
          <span className="text-4xl lg:text-5xl">WELCOME TO</span>
          <span className="text-gradient bg-gradient-to-r from-[#4a1d69] to-[#D1378D] px-2">
            CHANNL WORKS
          </span>
        </h1>

        <Search
          search={search}
          setSearch={setSearch}
          action={getSearchResult}
        />
      </div>
    </div>
  );
};

export default Hero;
