function counterchangeplus(){
    const counterele = document.getElementById("counter");
   let counter = parseInt(counterele.innerText);
    counterele.innerText = ++counter;
}

function counterchangeminus(){
    const counterele = document.getElementById("counter");
   let counter = parseInt(counterele.innerText);
    counterele.innerText = --counter;
}