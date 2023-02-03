//play the video

const showclickedvideo=()=>{
    let data=localStorage.getItem(`clicked_video`);
    let {snippet}=JSON.parse(data)
    let {videoId}=JSON.parse(data);
    //  console.log(snippet)
    //embedding the video using i frame html element

     let iframe=document.createElement(`iframe`);

     iframe.src=`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1`;
     iframe.width=`100%`;
     iframe.height=`100%`;
     iframe.setAttribute(`autoplay`,true)
     
     let h3=document.createElement(`h4`)
     h3.innerText=snippet.title;
     let h1=document.createElement(`h2`);
     h1.innerText=snippet.channelTitle;
     let line=document.createElement(`p`);
     line.innerText=`_______________________________________________________________________________________________________________________________`
     let p=document.createElement(`p`);
     p.innerText=snippet.description;
     document.getElementById(`video_detail`).append(iframe,h3,h1,line,p);
}


