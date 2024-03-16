/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import { BsSearch } from "react-icons/bs";
import { FaHeart } from "react-icons/fa";
import { state } from "../data/data";

const Gallery = ({
  image,
  addToFavoriteHandler,
  removeFromFavorite,
  search,
  favorite,
}) => {
  const zooImEffect = (image) => {
    state.biggerImageLink = image;
    state.showBiggerImage = true;
  };

  return (
    <div className="relative overflow-hidden rounded-lg w-full group ">
      <img src={image?.urls?.full} className="w-full h-auto aspect-auto " />
      <div className="absolute inset-0 flex items-start justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className=" mr-2 mt-2 w-10 text-white bg-white cursor-pointer rounded p-4  ">
          <div
            className="w-full flex items-center justify-center"
            onClick={
              search
                ? () => addToFavoriteHandler(image)
                : () => removeFromFavorite(image?.id)
            }
          >
            <FaHeart
              className={`${
                search
                  ? "fill-gray-600 hover:fill-red-600"
                  : "fill-red-600  hover:fill-gray-600"
              }  absolute transition-all duration-300`}
            />
          </div>
        </div>
        <div
          className=" mr-2 mt-2 w-10 text-white bg-white cursor-zoom-in rounded p-4  "
          onClick={() => zooImEffect(image)}
        >
          <div className="w-full flex items-center justify-center">
            <BsSearch
              className={`fill-gray-600 absolute transition-all duration-300`}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
