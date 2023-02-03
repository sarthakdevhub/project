

function append(){
    document.getElementById('movie_list').innerHTML=null;
    document.getElementById('loader').style.display='none';

    data.forEach(function(el){
        let div=document.createElement('div');
        div.id=el.imdbID;
        div.onclick=function(){
          det(el);
        }
        let img=document.createElement('img');
        img.src=el.Poster;
        

        div.append(img)
        document.getElementById('movies').append(div)
    })
}

export default append;