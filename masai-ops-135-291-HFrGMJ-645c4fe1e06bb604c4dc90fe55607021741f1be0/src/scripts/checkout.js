
document.getElementById(`place-order`).addEventListener(`click`,function(){order()})
function order(){
    let name=document.getElementById(`name`).value;
    let num=document.getElementById(`number`).value;
    let adr=document.getElementById(`address`).value;

    if(name=="" || num=='' || adr==''){
      alert(`fill`)
    }else{
       
        document.getElementById(`order-message`).innerText=`Your order is successfully placed`
        document.getElementById(`name`).value='';
        document.getElementById(`number`).value='';
        document.getElementById(`address`).value='';
    }
}
