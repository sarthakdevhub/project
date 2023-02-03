let form = document.getElementById(`mobile_form`);
form.addEventListener(`submit`,function(el){
    el.preventDefault();
    submit()
});

const submit = () => {
    let arr =JSON.parse(localStorage.getItem(`mobile_data`))||[];
    let obj = {
        name : form.mobile_name.value,
        brand : form.mobile_brand.value,
        price : form.mobile_price.value,
        image : form.mobile_image.value,
    }

    arr.push(obj);
    
    localStorage.setItem(`mobile_data`,JSON.stringify(arr))
    form.mobile_name.value = null;
    form.mobile_brand.value = null;
    form.mobile_price.value = null;
    form.mobile_image.value = null;
    
}
//JSON.parse(localStorage.getItem(`mobile_data`))||