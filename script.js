const URL =
  "https://api.themoviedb.org/3/trending/all/day?api_key=16baca66e4b4b206c0b67a2ac88293cd"; //trending movie
const img_path = `https://image.tmdb.org/t/p/w1280`;
const api_key = `16baca66e4b4b206c0b67a2ac88293cd`;

// const main = document.querySelector('.main-con');
const input = document.querySelector(".form-control");
const btn = document.querySelector(".btn");
const title = document.querySelector(".cont-section-heading");
// const main_grid = document.querySelector(".movies-grid")
const showDiv = document.querySelector(".cont-row");
const buttonClick = document.querySelector(".posterImg")
// const sho = document.querySelector(".cont-row");
// const trending = document.querySelector(".")

// Search movie
// async function get_search_by_movie(search_term) {
//   const res = await fetch(
//     `https://api.themoviedb.org/3/search/movie?api_key=${api_key}&query=${search_term}`
//   );
//   const resData = await res.json();
//   console.log(resData.results);
//   return resData.results;
// }

//======================function for searching movies====================================
const searched_movies = async () => {
  // console.log(input.value);
  const data = await fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=${api_key}&query=${input.value}`
  );
  const resPonseData = await data.json();
  // console.log(resPonseData);
  title.innerText = "Searched Movie";
  showDiv.innerHTML = resPonseData.results.map((item, index) => {
    // console.log("printing the map data");
    // console.log(item.id);
    // console.log(item);
    const id = item.id;
    // title.innerText = item.id
    return `
    <a href=/detailspage.html?id=${id}><img class="img-item" src="${img_path }${item.poster_path}" alt=""></a>
`;
  });
};
btn.addEventListener("click", searched_movies);




//========================================function for trending movies=========================
const trending_movies = async () => {
  // console.log(input.value);
  const Data = await fetch(URL);
  const respData = await Data.json();
  // console.log(respData);

  showDiv.innerHTML = respData.results.map((item, index) => {
    // console.log(item.id);
    const id = item.id

    return `
    <a href=/detailspage.html?id=${id}><img class="img-item" src="${img_path}${item.poster_path}" alt=""></a>
    `;
  });
};
trending_movies()

/* <!-- Mobile menu toggle --> */
$(document).ready(()=>{
  $('#hamburger-menu').click(()=>{
    // alert('hello')
    $('#hamburger-menu').toggleClass('active');
    $('#main-nav').toggleClass('active')
    // alert('hello')
  });
});


// console.log(window.location)

// fetch(URL).then((res) => {
//   return res.json()
// }).then((resdata) =>{
//   console.log(resdata.results[0]);
// console.log(resdata.results[0].poster_path);
// console.log(resdata.results[1].poster_path);
// console.log(resdata.results[2].poster_path);
// console.log(resdata.results[3].poster_path);

// resdata.map(val => {
//   console.log(val);
// })

// });

// const
// const apiUrl = "https://api.themoviedb.org/3/genre/movie/list?api_key=16baca66e4b4b206c0b67a2ac88293cd";
// const movieListUrl = "https://api.themoviedb.org/3/movie/{movie_id}?api_key=16baca66e4b4b206c0b67a2ac88293cd&language=en-US"
// const apiKey ="16baca66e4b4b206c0b67a2ac88293cd";
// const url = "https://developers.themoviedb.org/3";

// const apiPath = {
// fetchAllCatagories: '${url}/genre/movie/list?api_key=${apiKey}'
// fetchAllCatagories: apiUrl,
// fetchMovieList: (id) => 'https://developers.themoviedb.org/3/discover/movie?api_key=16baca66e4b4b206c0b67a2ac88293cd&withgenres{id}'
// fetchMovieList: (id) => 'https://api.themoviedb.org/3/movie/{movie_id}?api_key=16baca66e4b4b206c0b67a2ac88293cd&language=en-US'
// }

// Boot up the app
// function init(){
//     fetchAllCatagories();
// }

// function fetchAllCatagories(){
//   fetch(apiPath.fetchAllCatagories)
//     .then(res => res.json())
//     .then(res =>{
//       const Catagories = res.genres;
//       if (Array.isArray(Catagories) && Catagories.length > 0) {
//         Catagories.forEach(Catagory => {
//           fetchAllMoviesSection(apiPath.fetchMovieList(Catagory.id),
//           Catagory
//           );
//         });
//       }
//       // console.table(Catagories);
//     })
//     .catch(err =>console.log(err));
// }

// function fetchAllMoviesSection(fetchUrl ,Catagory) {
//   console.log(fetchUrl,Catagory);
//   fetch(fetchUrl)
//   .then(res => res.json)
//   .then(res => console.log(res.result))
//   .catch(err => console.error(err))
// }

// window.addEventListener('load', function(){
//     init();
// })
