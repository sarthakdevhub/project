let carousel_div=document.getElementById('carousel')
//take a function
function carousel(){
//make image array
    let image=[ 
                'https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/927/1360927-h-375c5733d218',
                'https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/1298/1351298-h-66706310312e',
                'https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/4831/1374831-h-13b22eedb0fa',
                'https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/7976/1317976-h-e672d8d911fe',
                'https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/1331/641331-h'
              ]
//create image element
              let imgel=document.createElement('img');
//append one before to avoid delay
               imgel.src=image[0];
               carousel_div.append(imgel);
//set interval from i=1 to stop delay
              let i=1;
              setInterval(function(){  
                if(i===image.length){
                    i=0;
                }
//give src to all image
                imgel.src=image[i];
//append
                carousel_div.append(imgel);
                i++;
              },3000)
}

carousel();


async function searchMovies(){

  document.getElementById('loader').style.display='block';

    
    document.getElementById('movies').innerHTML=null;
    //http://img.omdbapi.com/?apikey=d876a7c2&=avengers
    let movieName=document.getElementById('movie_name').value;

   let res= await fetch(`http://www.omdbapi.com/?apikey=f282b693&s=${movieName}`)
    
   //asynce await method
   try{
    let data=await res.json();
  
 
    let r_data=data.Search;
    appendMovies(r_data)
   }
   catch(err){
        console.log('error')
   }
    


   //.then,.catch method
    // res
    // .then(function(success){
    //   let data=success.json();
      
    //   data.then(function(success){
    //     console.log(success)
    //   })
    //   .catch(function(error){
    //     console.log(error)
    //   })
    // })
    // .catch(function(error){
    //     console.log('error')
    // })
}


function appendMovies(data){

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

function det(el){
        let div1=document.createElement('div');
        let p_name=document.createElement('p')
        p_name.innerText=el.Title;
        let p_year=document.createElement('p');
        p_year.innerText=el.Year;
        let p_imdb=document.createElement('p');
        p_imdb.innerText=el.imdbID;
        
        div1.append(p_name,p_year,p_imdb);
        document.getElementById(el.imdbID).append(div1);

}

let id;
function deattach(fun,delay){
   
  if(id){
    clearTimeout(id);
  }

   id = setTimeout(function(){

      fun();

    },delay)

}