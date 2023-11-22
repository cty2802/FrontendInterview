import { QUANTITY_PER_PAGE } from '../utils/constants.js';
import { readFileSync } from "node:fs";

const DB_DATA = readFileSync('./db.json');
const ALL_DATA = JSON.parse(DB_DATA);

function getAllItems() {
  return ALL_DATA.articles;
}

function getItemsOnPage(items, page) {
  return items.slice(
    page * QUANTITY_PER_PAGE - QUANTITY_PER_PAGE,
    QUANTITY_PER_PAGE * page
  );
}

export function getResponse(page) {
  const allItems = getAllItems();

  const response = {
    itemsOnPage: getItemsOnPage(allItems, page),
    totalItems: allItems.length,
  };

  return response;
}
