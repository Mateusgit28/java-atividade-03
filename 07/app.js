function verificar() {
    let a = document.getElementById("a").value
    let b = document.getElementById("b").value
    let c = 0
    if (a == b) {
        let total = parseFloat(a) + parseFloat(b)
        c = total
    } else {
        let total = parseFloat(a) * parseFloat(b)
        c = total
    }

    document.getElementById("resposta").innerHTML = "valor atribuido"+ c




}
