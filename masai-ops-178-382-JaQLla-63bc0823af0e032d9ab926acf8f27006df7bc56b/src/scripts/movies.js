document.getElementById(`wallet`).innerText = localStorage.getItem(`amount`);


//f282b693

const searchMovies = async() => {
    document.getElementById('movies').innerHTML=null;
    let moviename = document.getElementById(`search`).value;
    

    let res = await fetch (`https://www.omdbapi.com/?page=1&apikey=f282b693&s=${moviename}`)

    try{
        let data = await res.json();
        let r_data = data.Search;
        appendMovies(r_data)
    }
    catch(error){
        console.log(`error`)
    }
}





const appendMovies = (data) => {

    data.forEach(function(el){
        let div = document.createElement(`div`);
        div.className = `movie_tab`;
        let img = document.createElement(`img`);
        img.src = el.Poster;

        let name = document.createElement(`p`);
        name.innerText = el.Title;

        let book = document.createElement(`button`);
        book.innerText = `Book Now`
        book.className = `book_now`
        book.onclick = () =>{
            booknow(el);
        }
        div.append(img,name,book);
        document.getElementById(`movies`).append(div)

    })
}


let id;

const debounce = (fun,delay) => {

    if(id){
        clearTimeout(id);
    }

    id = setTimeout(function(){

        fun();
  
      },delay)
}


function booknow(el){
   
    let obj={
        name : el.Title,
        url : el.Poster
    }
    
    localStorage.setItem(`details`,JSON.stringify(obj))

    window.location.replace(`checkout.html`)
}