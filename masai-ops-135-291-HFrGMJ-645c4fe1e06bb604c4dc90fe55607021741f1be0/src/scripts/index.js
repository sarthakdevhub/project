// The items should be stored in local storage with key :- “items”
// API :- https://mock-server-js.onrender.com/api/groceries


function append(DATA){
   
    DATA.forEach(function(el,i){
       let div=document.createElement(`div`);
       div.className=`item`;
       let image=document.createElement(`img`);
       image.src=el.image;
       let name=document.createElement(`h3`);
       name.innerText=el.name;
       let price=document.createElement(`h3`);
       price.innerText=el.price;
       let btn=document.createElement(`button`);
       btn.innerText=`Add to cart`
       btn.className=`add_to_cart`
       btn.onclick=function(){
        addcart(el);
       }

       div.append(image,name,price,btn)
       document.getElementById(`items`).append(div)
    })

}

let count=localStorage.getItem(`count`)||[];
let arr=JSON.parse(localStorage.getItem(`items`))||[];
function addcart(el){ 
  count++;
  localStorage.setItem(`count`,count)
  // document.getElementById(`item_count`).innerText=count;
  document.getElementById(`item_count`).innerText=count
  let obj={
     name:el.name,
     price:el.price,
     image:el.image
  }
  arr.push(obj);
  
  localStorage.setItem(`items`,JSON.stringify(arr))
}



async function allitems(){
    let res=await fetch(`https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-groceries`);

    try{
      let data= await res.json();
      let r_data=data.data
      append(r_data)
    }
    catch(err){
        console.log('error')
    }
}

allitems()