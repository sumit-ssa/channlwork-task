/* eslint-disable react/jsx-key */
import { useSnapshot } from "valtio";
import { state } from "../data/data";
import Gallery from "../components/Gallery";
import PageHeading from "../components/PageWrapper";

const Search = () => {
  const snap = useSnapshot(state);
  const title = snap.qeury;
  const images = snap.searchResult;

  const addToFavoriteHandler = (image) => {
    state.favorites.push(image);
  };

  return (
    <PageHeading title={title}>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 mt-4">
        {images.map((image) => (
          <Gallery
            image={image}
            key={image?.id}
            addToFavoriteHandler={addToFavoriteHandler}
            search
          />
        ))}
      </div>
    </PageHeading>
  );
};

export default Search;
