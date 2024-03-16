/* eslint-disable react/prop-types */
import Lottie from "react-lottie-player";
import anime from "../assets/No-image.json";

const NoImageAnime = ({ msg }) => {
  return (
    <div className="w-full h-full flex items-center justify-center flex-col ">
      <Lottie
        loop
        animationData={anime}
        play
        style={{ width: 300, height: 300 }}
      />
      <p className="mt-2 text-slate-500  text-xl ">{msg}</p>
    </div>
  );
};

export default NoImageAnime;
