

let arr=JSON.parse(localStorage.getItem(`items`))||[];
let sum=0;
function cartappend(data){
    document.getElementById(`cart`).innerHTML=null;
    sum=null;
    data.forEach(function(el,index){
        sum=sum+el.price;
        document.getElementById(`cart_total`).innerText=sum;
        let div=document.createElement(`div`)
        let img=document.createElement(`img`);
        img.src=el.image;
        let name=document.createElement(`h3`);
        name.innerText=el.name;
        let price=document.createElement(`h3`);
        price.innerText=el.price
        let remove=document.createElement(`button`);
        remove.innerText=`Remove`;
        remove.class=`remove`
        remove.onclick=function(){
          remove(index)
        };
        div.append(img,name,price,remove)
        document.getElementById(`cart`).append(div)
        console.log(div)
       
    })
}
 cartappend(arr);

function remove(index){
    let arr=JSON.parse(localStorage.getItem(`items`))||[];
    arr.splice(index,1)
    localStorage.setItem(`items`,JSON.stringify(arr));
    cartappend(arr)
    let count=localStorage.getItem(`count`);
    count--;
    localStorage.setItem(`count`,count)
}