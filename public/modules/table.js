export async function drawItems(items) {
  const atricle = document.getElementsByClassName("articles")[0];

  const itemsList = items.itemsOnPage;
  let html = "";

  for (let i = 0; i < itemsList.length; i++) {
    let htmlSegment = `<div class="article">
    <div class="article__picture">
      <img class="article__picture-img" 
        alt="${itemsList[i].title}" 
        src='${itemsList[i].photo}'/>
    </div>    
    <div class="article__info">
      <p class="article__info-title">${itemsList[i].title}</p>
      <p class="article__info-fields">${itemsList[i].fields}</p>
    </div>
   </div>`;
    html += htmlSegment;
  }
  atricle.innerHTML = html;
}
