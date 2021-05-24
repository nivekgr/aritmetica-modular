document.addEventListener("DOMContentLoaded", function() {
    let a = document.getElementById("a");
    let b = document.getElementById("b");

    let calcA = 0;
    let calcB = 0;
    let showA = document.getElementById("showA");
    let showB = document.getElementById("showB") ;  
    let showRes = document.getElementById("showRes");


    a.addEventListener("input", (evnt) => {
        calcA = evnt.target.value;
        mostrarResultado(calcA,calcB)
        showA.innerHTML = calcA
    });
    b.addEventListener("input", (evnt) => {
        calcB = evnt.target.value;
        mostrarResultado(calcA,calcB)
        showB.innerHTML = calcB
    });

})
mostrarResultado = (a,b) => {
    let res  = mod(a , b)
    showRes.innerHTML = res
}

function mod(n, m) {
    let rem = Math.floor(n / m);
    let res;
    if (Math.sign(n) == -1) {
        if(Math.sign(m) == 1){
            res = n - ((rem) * m) 
        }else{
            res = (n) - ((rem) * m) 
        }
    } 
    else if(Math.sign(n) == 1){
        if(Math.sign(m) == -1 ){
            res = ((rem) * m) - n 
        }else{
            res = n - ((rem) * m) 
        }
    }
    return  res;
}

