//store the products array in localstorage as "data"

function redirectToInventoryPage() {
  // let a=document.createElement(`a`);
  // a.href=`inventory.html`
  window.location.replace(`inventory.html`)
}


function getFormData(el) {
  el.preventDefault();
  
    n=document.getElementById(`product_name`).value;
    brand=document.getElementById(`product_brand`).value;
    price=+document.getElementById(`product_price`).value;
    image=document.getElementById(`product_image`).value;
  
    addData(n,brand,price,image)
 
}

let arr=JSON.parse(localStorage.getItem(`data`))||[];
function addData(name, brand, price, image) {
  
  let obj={
    name,
    brand,
    price,
    image
  }
   arr.push(obj);
   localStorage.setItem(`data`,JSON.stringify(arr))
}



window.addEventListener("load", function () {
  // get the form and show products button here and add eventlisteners
  let form=document.getElementById('product_form');
  form.onsubmit=function(){
    getFormData(event)
  }
});
