function verificarletra(){
    let a =document.getElementById("a").value
    let b =document.getElementById("b").value
    let c =document.getElementById("c").value

    let total =parseFloat(a)+ parseFloat(b)
    if (total < c){
        document.getElementById("resposta").innerHTML = "a + b é menor que c"
    }else{
        document.getElementById("resposta").innerHTML = "a + b é maior que c"
    }
    

}