/* eslint-disable react/prop-types */
import { MdOutlineSaveAlt } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";

export const DownloadButton = ({ func }) => {
  return (
    <button
      className="group w-32 font-semibold flex gap-2 hover:gap-0 hover:bg-green-600  items-center border  rounded bg-green-600 text-red-200"
      onClick={func}
    >
      <MdOutlineSaveAlt className="bg-green-700 fill-red-200 h-8 p-2 rounded-l w-8 group-hover:w-full group-hover:rounded-r-md transition-all duration-500" />
      <span className="group-hover:text-[0px] transition-all duration-500  text-white font-thin ">
        Download
      </span>
    </button>
  );
};

export const CancelButton = ({ func }) => {
  return (
    <RxCross2
      onClick={func}
      className="font-bold text-gray-700 h-6 w-6 cursor-pointer hover:scale-75 transition-all duration-300 "
    />
  );
};
