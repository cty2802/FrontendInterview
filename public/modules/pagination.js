import { getItems } from "../utils/fetchClient.js";
import { QUANTITY_PER_PAGE } from "../utils/constants.js";

export const buttonPrev = document.getElementsByClassName("pagination-next")[0];
export const buttonNext = document.getElementsByClassName("pagination-prev")[0];

export const pageNumberFromUrl = () => {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);

  return Number(urlParams.get("page")) || 1;
};

export async function getPageItems(pageIndexAdd = 0) {
  const newPage = pageNumberFromUrl() + pageIndexAdd;
  const items = await getItems(newPage);
  const lastPage = Math.trunc(items.totalItems / QUANTITY_PER_PAGE);

  if (newPage === lastPage) {
    buttonPrev.disabled = true;
  } else {
    buttonPrev.disabled = false;
  }

  if (newPage === 1) {
    buttonNext.disabled = true;
  } else {
    buttonNext.disabled = false;
  }

  navigateToPage(newPage);

  return items;
}

function navigateToPage(page) {
  if (history.pushState) {
    let newurl =
      window.location.protocol +
      "//" +
      window.location.host +
      window.location.pathname +
      `?page=${page}`;
    window.history.pushState({ path: newurl }, "", newurl);
  }
}
