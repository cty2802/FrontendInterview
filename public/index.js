import { getPageItems } from "./pagination.js";

async function drawItems(items) {
  const atricle = document.getElementsByClassName("articles")[0];

  const itemsList = items.itemsOnPage;
  let html = "";

  for (let i = 0; i < itemsList.length; i++) {
    let htmlSegment = `<div class="article">
    <img class="article__img" src='${itemsList[i].photo}'/>
    <span class="article__info">
      <p class="article__info-title">${itemsList[i].title}</p>
      <p class="article__info-fields">${itemsList[i].fields}</p>
    </span>
   </div>`;
    html += htmlSegment;
  }
  atricle.innerHTML = html;
}

async function handleChangePrev() {
  // const nextPage = document.getElementsByClassName("pagination-next")[0];
  drawItems(await getPageItems(-1));
}

async function handleChangeNext() {
  drawItems(await getPageItems(1));
}

// document.addEventListener("DOMContentLoaded", loadItems());
window.onload = async () => {
  drawItems(await getPageItems());
};

window.handleChangePrev = handleChangePrev;
window.handleChangeNext = handleChangeNext;

