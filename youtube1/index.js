//'https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=surfing&key=[YOUR_API_KEY]' \
//AIzaSyALRUjwoBdEvQZ9fgyEtf5kE17-WoByDow
// import { navbar } from "./components/navbar.js";
// let nav=document.getElementById(`navbar`)
// nav.innerHTML=navbar();
const searchVideo = async(res)=>{
    //.then , .catch
    
    //async await handles a promise
    //try and catch
   //document.getElementById(`sortin`).style.display=`block`
    

   try{
    const API_KEY=`AIzaSyALRUjwoBdEvQZ9fgyEtf5kE17-WoByDow `;
    let search_term =document.getElementById(`search`).value;
    let res= await fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${search_term}&key=${API_KEY}`);
    
    let data= await res.json();
    let r_data=data.items
    appendData(r_data)
   }
   catch(err){
    console.log(`error`)
   }
    
}

const appendData=(data)=>{
 document.getElementById(`container`).innerHTML=null;
data.forEach(({ snippet,id:{videoId}})=>{

    let div=document.createElement(`div`);

    let p_title=document.createElement(`p`);
    p_title.innerText=snippet.title;
    let p_channel=document.createElement(`p`);
    p_channel.innerText=snippet.channelTitle;
    let thumbnail=document.createElement(`img`);
    thumbnail.src=snippet.thumbnails.high.url;

    div.append(thumbnail,p_title,p_channel);

    //add eventlistner to div

    div.onclick=()=>{
      
        let data={
            snippet,
            videoId,
        };
        
        data= JSON.stringify(data)
        localStorage.setItem(`clicked_video`,data);
        window.location.href=`video.html`

    }
    document.getElementById(`container`).append(div)
 
})

}

const view=()=>{
   
}