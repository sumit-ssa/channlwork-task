import { useSnapshot } from "valtio";
import { state } from "../data/data";
import Gallery from "../components/Gallery";
import PageHeading from "../components/PageWrapper";
import { SuccessAlert } from "../components/Toast";
import NoImageAnime from "../components/NoImageAnime";

const Favorites = () => {
  const snap = useSnapshot(state);

  const favorites = snap.favorites;

  const removeFromFavorite = (id) => {
    state.favorites = favorites.filter((f) => f.id !== id);
    SuccessAlert("Removed from favorites");
  };

  return (
    <PageHeading title={"Favorites"}>
      {favorites?.length > 0 ? (
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 mt-4">
          {favorites.map((image) => (
            <Gallery
              image={image}
              key={image?.id}
              removeFromFavorite={removeFromFavorite}
              favorite
            />
          ))}
        </div>
      ) : (
        <NoImageAnime msg={"No Images Found"} />
      )}
    </PageHeading>
  );
};

export default Favorites;
