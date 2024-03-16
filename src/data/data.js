import { proxy } from "valtio";

export const state = proxy({
  isLoading: false,
  page: 1,
  qeury: null,
  searchResult: [],
  favorites: [],
  showBiggerImage: false,
  biggerImageLink: null,
});
