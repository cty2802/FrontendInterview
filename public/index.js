import {getItems} from "./utils/fetchClient.js";

const items = await getItems();
console.log(items);