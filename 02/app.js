function PositivoOuNegativo(){
    let n1 = document.getElementById("numero1").value
    if(n1 >= 1){
        document.getElementById("resultado").innerHTML = "Positivo"
    }else if(n1 <= -1){
        document.getElementById("resultado").innerHTML = "Negativo"
    }else if(n1 == 0){
        document.getElementById("resultado").innerHTML = "neutro"
    }else{
        document.getElementById("resultado").innerHTML = "Valor invalido"
    }
    document.getElementById("numero1").value = ""
}
//limpar campo
