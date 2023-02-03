function redirectToIndexPage() {
  window.location.replace(`index.html`)
}


function append() {
let arr=JSON.parse(localStorage.getItem(`data`))||[];
 document.getElementById(`products_data`).innerHTML=null;
 arr.forEach(function(el,index){
  let div=document.createElement(`div`)
  let img=document.createElement(`img`);
  img.src=el.image;
  let name=document.createElement(`h3`);
  name.innerText=el.name;
  let brand=document.createElement(`h3`);
  brand.innerText=el.brand;
  let price=document.createElement(`h3`);
  price.innerText=el.price+`/-`
  let del=document.createElement(`button`);
  del.innerText=`Remove Product`;
  del.onclick=function(){
    remove(index)
  };
  div.append(img,name,brand,price,del)
  document.getElementById(`products_data`).append(div)
 })
}



function remove(index) {
  let arr=JSON.parse(localStorage.getItem(`data`))||[];
  arr.splice(index,1)
  localStorage.setItem(`data`,JSON.stringify(arr));
  append()
}

window.addEventListener("load", function () {
  // get the add more products button here and add eventlisteners
  // onload invoke append function
  append()
});
