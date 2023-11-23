import { BASE_URL } from "./constants.js";

export const getItems = async (page) => {
  return await fetch(BASE_URL + `/items/?page=${page}`)
  .then (response => {
    if (!response.ok) {
      throw new Error();
    }

    return response.json();
  })
};
