import { BASE_URL } from "./constants.js";

export const getItems = async () => {
  return await fetch(BASE_URL + '/items/')
  .then (response => {
    if (!response.ok) {
      throw new Error();
    }

    return response.json();
  })
}