import { useSnapshot } from "valtio";
import { state } from "../data/data";
import Gallery from "../components/Gallery";
import PageHeading from "../components/PageWrapper";

const Favorites = () => {
  const snap = useSnapshot(state);

  const favorites = snap.favorites;

  const removeFromFavorite = (id) => {
    state.favorites = favorites.filter((f) => f.id !== id);
  };

  return (
    <PageHeading title={"Favorites"}>
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
    </PageHeading>
  );
};

export default Favorites;
