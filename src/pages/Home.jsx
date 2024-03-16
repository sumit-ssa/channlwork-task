import { useSnapshot } from "valtio";
import Navbar from "../components/Navbar";
import { state } from "../data/data";
import Loading from "../components/Loading";
import { Outlet } from "react-router-dom";
import Image from "../modal/Image";

const HomePage = () => {
  const snap = useSnapshot(state);

  return (
    <section>
      <Navbar />
      {snap.isLoading ? <Loading /> : null}
      {snap.showBiggerImage ? <Image /> : null}
      <Outlet />
    </section>
  );
};

export default HomePage;
