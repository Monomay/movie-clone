const displayList = document.querySelector(".movies-list-div");
const card = document.querySelector(".movie-detail-div");
const noting = document.querySelector(".noting");

const img_path = `https://image.tmdb.org/t/p/w1280`;

// =================== local Storage get item =====================//

const getItem = () => {
  var storedNames = JSON.parse(localStorage.getItem("favourite"));
  //   movieList= window.localStorage.getItem("favourite");
  if (storedNames.length == 0) {
    noting.innerHTML = "No Favourites..., Please Add";
  }
  displayList.innerHTML = storedNames.map((item, index) => {
    console.log(item.poster_path);
    return `
        <div class='movie-detail-div' key=${index}>
        <img class="image-list" key=${index} src="${img_path}${
      item.poster_path
    }" alt="">
        <p id="movieName">${item.title}</p>
                <p id="rating">Popularity: ${item.popularity}</p>
                <p id="overview">${item.overview}</p>
                <div class="listButton">
                    <button class="buttons" onclick="goBack()">GoBack</button>
                   
                    <button class="buttons" onclick="remove(${
                      item.id
                    })">Remove</button>
                </div>
        </div>
        `;
  });
};
getItem();

const audio1 = new Audio('woo.mp3');

// ======================== Remove =====================//

const remove = (id) => {
  var storedNames = JSON.parse(localStorage.getItem("favourite"));
  const newFavouriteList = storedNames.filter(
    (storedNames) => storedNames.id !== id
  );
  localStorage.setItem("favourite", JSON.stringify(newFavouriteList));
  audio1.play();
  window.alert("Item Deleted successfully");
  window.location.reload();
};
const goBack = () => {
  window.location.replace("/");
};
