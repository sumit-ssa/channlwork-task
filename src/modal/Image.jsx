import { useSnapshot } from "valtio";
import { state } from "../data/data";
import { CancelButton, DownloadButton } from "../components/buttons/Butttons";
import { downloadImage } from "../utils/api_calls";

const Image = () => {
  const snap = useSnapshot(state);

  const image = snap?.biggerImageLink;
  const url = snap?.biggerImageLink?.urls?.full;
  const closeModalHandler = () => {
    state.showBiggerImage = false;
  };

  const downloadHandler = async (image) => {
    const id = image?.links?.download_location;
    let res = await downloadImage(id);
    const url = window.URL.createObjectURL(new Blob([res?.data?.url]));
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", "downloaded_image.jpg");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="bg-black/[.50] fixed top-0 right-0 left-0 z-50 w-full md:inset-0 h-full flex justify-center items-center">
      <div className="relative  w-full max-w-xl xl:max-w-3xl md:h-auto">
        <div className="relative bg-white rounded-lg shadow w-full">
          <div className="w-full flex items-center justify-between px-4 py-2">
            <div className="w-full">
              <span className="font-bold">Unsplash</span>
            </div>
            <div className="w-full flex items-center justify-end gap-3 ">
              <CancelButton func={closeModalHandler} />
            </div>
          </div>
          <div className="px-4 pb-2 ">
            <div className="w-full flex items-center justify-center">
              <img src={url} alt="" className="w-full h-full aspect-square" />
            </div>
            <div className="w-full flex items-end justify-end mt-2">
              <DownloadButton func={() => downloadHandler(image)} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Image;
