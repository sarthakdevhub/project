let Ldata = JSON.parse(localStorage.getItem(`mobile_data`));
let container = document.getElementById(`mobile_list`);

const appendData = (data) => {
    data.forEach(function(el,i){
        let div = document.createElement(`div`);
        div.className=`mobile`
        let image = document.createElement(`img`);
        image.src = el.image;
        let Brand = document.createElement(`h3`);
        Brand.innerText = el.brand;
        let name = document.createElement(`h4`);
        name.innerText = el.name;
        let price = document.createElement(`p`);
        price.innerText = parseInt(el.price);
        let rem = document.createElement(`button`);
        rem.innerText = `Remove`;
        rem.className = `remove`
        rem.onclick = (event)=>{
            event.target.parentNode.remove();
          delDiv(i)
        }
    
        div.append(image,Brand,name,price,rem)
        container.append(div)
    })
    
}

appendData(Ldata)

const delDiv = (i) => {
    Ldata.splice(i,1);
    
    localStorage.setItem(`mobile_data`,JSON.stringify(Ldata))
}


document.getElementById(`sort_lth`).addEventListener(`click`,function(){
    sortlowhigh();
})

document.getElementById(`sort_htl`).addEventListener(`click`,function(){
    sorthighlow();
})
const sortlowhigh = () => {
    document.getElementById('mobile_list').innerHTML=null;
    let data = Ldata;
    data = data.sort((a,b)=>a.price-b.price)
    
    appendData(data)
}

const sorthighlow = () => {
    document.getElementById('mobile_list').innerHTML=null;
    let data = Ldata;
    data = data.sort((a,b)=>b.price-a.price)
    
    appendData(data)
}

