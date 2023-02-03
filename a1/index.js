

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


//make movies data by hard code
let movies=[
    {
        name:'THE GOOD WIFE',
        rating:2.9,
        image:'https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/4954/894954-v'
    },
    {
        name:'AOASHI',
        rating:5,
        image:'https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/8315/1358315-v-460de76e954a'
    },
    {
        name:'OVERLORD',
        rating:6.9,
        image:'https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/8938/1318938-v-c6774b84e0ce'
    },
    {
        name:'TATAMI TIME',
        rating:8.9,
        image:'https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/5858/1345858-v-629a422bee2a'
    },
    {
        name:'DR. STONE',
        rating:9,
        image:'https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/7151/1317151-v-3325efe236e4'
    },
    {
        name:'KENOBI',
        rating:3,
        image:'https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/4153/1254153-v-3f414ad4fef9'
    },
    {
        name:'NEW LIFE',
        rating:6.6,
        image:'https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/69/1240069-v-8f3eaedecbc6'
    },
    {
        name:'MS DHONI',
        rating:10,
        image:'https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/old_images/vertical/MOVIE/3314/1770003314/1770003314-v'
    },{
        name:'TURNING RED',
        rating:8.4,
        image:'https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/1608/1161608-v-8fdb21cf9c1c'
    }

]

//make a function that u can use anywhere
function appendmovies(data){
    document.getElementById('loader').style.display="none";
  let movieList=document.getElementById('movie_list');
//forEach to get all element
  data.forEach(function(el){
    
    let div=document.createElement('div');

    let pname=document.createElement('p');
    pname.innerHTML=el.name;
    pname.style.color="white";

    let prating=document.createElement('p');
    prating.innerHTML=el.rating;
    prating.style.color="white";

    let pimg=document.createElement('img');
    pimg.src=el.image
 //appending   
    div.append(pimg,pname,prating);
    movieList.append(div)
    
    
  })
}

// appendmovies(movies)

//take tag by id and add event listener

document.getElementById('sort-lh').addEventListener('click',function(){
    sortlow()
})
//make a low to high sort function
function sortlow(){
//make older data to null
  document.getElementById('movie_list').innerHTML=null;
  let data=movies;
//sorting method
  data=data.sort((a, b) => a.rating-b.rating);
//give data to the function  
  appendmovies(data);
}


document.getElementById('sort-hl').addEventListener('click',function(){
    sorthigh()
})
function sorthigh(){
  document.getElementById('movie_list').innerHTML=null;
  let data=movies;
  data=data.sort((a, b) => b.rating-a.rating);
  appendmovies(data);
}


document.getElementById('sort-name').addEventListener('click',function(){
    sortname();
})
function sortname(){
    document.getElementById('movie_list').innerHTML=null;
    let data=movies;
    data.sort(function(a,b){
        if(a.name>b.name) return 1;
        if(a.name<b.name) return -1;
        return 0;
    })
    
    appendmovies(data)
}

function login(){
    document.getElementById('logbox').style.visibility="visible";
}
function cls(){
    document.getElementById('logbox').style.visibility="hidden";
    document.getElementById('signbox').style.visibility="hidden";
}
function signup(){
  document.getElementById('signbox').style.visibility="visible";
  document.getElementById('logbox').style.visibility="hidden";
}

let arr=JSON.parse(localStorage.getItem('Sobj'))||[];
function signupData(){

  let obj={
    name:document.getElementById('Sname').value,
    pass:document.getElementById('Spass').value
  }
  if(document.getElementById('Sname').value==""||document.getElementById('Spass').value==""){
   alert('Fill All Entries')
  }else{
    arr.push(obj)
    localStorage.setItem('Sobj',JSON.stringify(arr))
  }
  
  document.getElementById('Sname').value="";
  document.getElementById('Spass').value="";
}


function signinData(){
 let data=arr;
 data.forEach(function(el){
  if(document.getElementById('Ename').value==el.name && document.getElementById('Epass').value==el.pass){
    alert('Login Successful');
  }
 })
 document.getElementById('Ename').value="";
 document.getElementById('Epass').value=""
}


let getmeData= new Promise(function(resolve,reject){

setTimeout(function(){
    let data=movies;
    
    if(data!=null){
        resolve(data)
    }else{
        reject('ERR:Server could not get the DATA')
    }
  },1000)
})
 
getmeData
.then(function(success){

    appendmovies(success)

})
.catch(function(error){

console.log(error)

})



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
  document.getElementById('movie_list').innerHTML=null;
  document.getElementById('loader').style.display='none';

    data.forEach(function(el){
        let div=document.createElement('div');
        
        let img=document.createElement('img');
        img.src=el.Poster;
        let p_name=document.createElement('p')
        p_name.innerText=el.Title;
        let p_year=document.createElement('p');
        p_year.innerText=el.Year;
        let p_imdb=document.createElement('p');
        p_imdb.innerText=el.imdbID;
        

        div.append(img,p_name,p_year,p_imdb)
        document.getElementById('movies').append(div)
    })
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