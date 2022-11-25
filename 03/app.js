function VerificarPeriodo(){
let periodo = document.getElementById("periodo").value
if(periodo == "D"){
    document.getElementById("numero1").value = "Dia"
}else if(periodo == "N"){
    document.getElementById("numero1").value = "Noite"   
}else{
    document.getElementById("resultado").innerHTML = "Periodo inválido"
}
}