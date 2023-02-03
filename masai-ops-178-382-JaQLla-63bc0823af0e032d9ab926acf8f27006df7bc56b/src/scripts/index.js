document.getElementById(`wallet`).innerText = localStorage.getItem(`amount`);


const addtowallet = () => {
    let sum=+localStorage.getItem(`amount`)||0;
    let amount=+document.getElementById(`amount`).value;
    sum+=amount;
    localStorage.setItem(`amount`,sum);
    document.getElementById(`wallet`).innerText = sum;
    document.getElementById(`amount`).value = ``;
}

