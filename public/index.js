import { getPageItems } from "./modules/pagination.js";
import { drawItems } from "./modules/table.js";

async function handleChangePrev() {
  drawItems(await getPageItems(-1));
}

async function handleChangeNext() {
  drawItems(await getPageItems(1));
}

window.onload = async () => {
  drawItems(await getPageItems());
};

window.handleChangePrev = handleChangePrev;
window.handleChangeNext = handleChangeNext;
