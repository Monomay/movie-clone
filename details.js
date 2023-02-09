// console.log(window.location);
var allUrl = window.location.href
// var result = window.location.href.split('/').reverse()[0]
var res = window.location.href.split("=")[1];
const api_key = `16baca66e4b4b206c0b67a2ac88293cd`;
const signleImage = document.querySelector(".img-item");
const movieDiv = document.querySelector(".movie-detail-div")
const img_path = `https://image.tmdb.org/t/p/w1280`;
var isLoading = false;
// const url=`https://api.themoviedb.org/3/movie/{movie_id}?api_key=<<api_key>>&language=en-US'
// console.log(res);
//==================== Movies Details ====================//
const trending_movies = async () => {
    isLoading = true
    const data = await fetch(`https://api.themoviedb.org/3/movie/${res}?api_key=${api_key}&language=en-US`);
    isLoading = false
    const respData = await data.json();
    // console.log(respData);
    document.getElementById('imageDiv').innerHTML = `<img width="100" height="100" 
    src=${img_path}${respData.poster_path}>`;
    document.getElementById('movieName').innerHTML = respData.title
    document.getElementById('rating').innerHTML = `Rating: ${respData.popularity}`
    document.getElementById('genree').innerHTML = respData.genres.map((data, item) => {
        return data.name
    })
    document.getElementById('overview').innerHTML = respData.overview
    document.getElementById('movieDetails').innerHTML = `Details of ${respData.title}`

    //============================== Local Storage Set Item ==============================//
    
    const addToFav = document.getElementById('addToFav');
    const audio = new Audio('pika.mp3');

    addToFav.addEventListener('click', () => {
       var favourite_List = JSON.parse(localStorage.getItem('favourite'))||[];
        // poster_path = data[poster_path];
        // var favourite_List = JSON.parse(localStorage.getItem('favourite'))||favourite_List === null?[]:favourite_List;
        // favourite_List.push(respData);
        // favourite_List = favourite_List.concat(JSON.parse(localStorage.getItem('favourite'))||favourite_List === null?[]:favourite_List)
        
        // localStorage.setItem("favourite", JSON.stringify(favourite_List));
        // audio.play();
        // if(!favourite_List){
        // window.alert("Item Added successfully");
        // }
            // window.alert('item');
        // ||'[]'));
        // const id = favourite.id;
        // for(var i=0;i<favourite_List.length;i++){
        if(favourite_List.findIndex(favourite=>favourite.id === respData.id) === -1){
        favourite_List.push(respData);
            localStorage.setItem("favourite", JSON.stringify(favourite_List));
        audio.play();
        window.alert("Item Added successfully");    
            console.log(res)
            // return res;
        }else{
        window.alert('This already store');
        }
    //     window.alert('This already store');
    // }
    })

};

trending_movies()

const goBack = () => {
    window.location.replace('/');
}

// const addToFav = document.getElementById('addToFav');
// addToFav.addEventListener('click', ()=>{
//     var new_data = document.getElementById('add'.value);
//     if(localStorage.getItem('img') == null){
//         localStorage.setItem('img',`${img_path}${respData.poster_path}`);
//     }
//    var old_data = JSON.parse(localStorage.getItem('img'));
//    old_data.push(new_data);

//    localStorage.setItem('img', `${img_path}${respData.poster_path}`);
// })
// const person = {
//     url: `${img_path}${respData.poster_path}`
// }

// const addToFav = document.getElementById('addToFav');

// addToFav.addEventListener('click', ()=>{
//     data = requests.get(img_path);
//     data = data.JSON();
//     poster_path = data[poster_path];
//     const results = [`${img_path}${poster_path}`,
// ]
//     localStorage.setItem('url', JSON.stringify(results));
//     console.log(poster_path)
// })