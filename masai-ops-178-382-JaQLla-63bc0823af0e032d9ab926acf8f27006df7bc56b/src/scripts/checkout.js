let num = localStorage.getItem(`amount`);
document.getElementById(`wallet`).innerText=num;

let arr = JSON.parse( localStorage.getItem(`details`))

let div = document.createElement(`div`);

let img = document.createElement(`img`);
img.src = arr.url;

let title = document.createElement(`h1`);
title.innerText = arr.name;

div.append(title,img)
document.getElementById(`movie`).append(div)


function con(){
    let ticket =+ document.getElementById(`number_of_seats`).value;
    if(ticket*100<num){
        let n =+ num-ticket*100;
        localStorage.setItem(`amount`,n)
        document.getElementById(`wallet`).innerText = localStorage.getItem(`amount`);
        document.getElementById(`number_of_seats`).value = ``;
        document.getElementById(`booking_status`).innerText = `Booking Successful!`
    }
    else{
        document.getElementById(`booking_status`).innerText = `Insufficient Balance !`
    }
}
