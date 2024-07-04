function counterchangeplus(){
    const counterele = document.getElementById("counter");
   let counter = parseInt(counterele.innerText);
    counterele.innerText = ++counter;
}

function counterchangeminus(){
    const counterele = document.getElementById("counter");
    let counter = parseInt(counterele.innerText);
    if(counter>0){
    counterele.innerText = --counter;
    }
    else{
        alert("number can not be below 0")
    }
}