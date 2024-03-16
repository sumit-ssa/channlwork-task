import axios from "axios";
import { ACCESS_KEY, BASE_URL } from "./constants";
import { FailureAlert } from "../components/Toast";

export const getRandomImage = async () => {
  try {
    let res = await axios.get(
      `${BASE_URL}/photos/random?client_id=${ACCESS_KEY}`
    );
    if (res?.status === 200) {
      return res;
    }
  } catch (error) {
    console.log(error);
    FailureAlert(error?.response?.data);
  }
  return false;
};

export const getSearchedImage = async (page, query) => {
  try {
    let res = await axios.get(
      `${BASE_URL}/search/photos?page=${page}&query=${query}&client_id=${ACCESS_KEY}`
    );
    if (res.status === 200) {
      return res;
    }
  } catch (error) {
    console.log(error);
    FailureAlert(error?.response?.data);
  }
  return false;
};

export const downloadImage = async (id) => {
  try {
    let res = await axios.get(`${id}&client_id=${ACCESS_KEY}`);
    if (res.status === 200) {
      return res;
    }
  } catch (error) {
    console.log(error);
  }
  return false;
};
