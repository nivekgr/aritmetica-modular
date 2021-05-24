document.addEventListener("DOMContentLoaded", function() {
    let ab = document.getElementById("ab");
    let modulo = document.getElementById("modulo")
    let equRes = document.getElementById("equRes")

    let calcAB = ""
    let mod = 1

    ab.addEventListener("input", (evnt) => {
        calcAB = evnt.target.value;
        const res = equivalencia(calcAB, mod)
        equRes.innerHTML = res
    });
    modulo.addEventListener("input", (evnt) => {
        mod = evnt.target.value;
        const res = equivalencia(calcAB, mod)
        equRes.innerHTML = res
    });

})


equivalencia = (str,mod) =>{
    const split = str.split('=')
    const num1ToStr = parseInt(split[0])
    const num2ToStr = parseInt(split[1])

    let a = num1ToStr % mod;
    let b = num2ToStr % mod;
    let msg

    if (a != b) {
        msg = '<span class="badge bg-danger" id="resSpan">[ - ] No existe equivalencia </span>'
    } else {
        msg = '<span class="badge bg-success" id="resSpan">[ - ] Si existe equivalencia </span>'
    }

    return msg
}